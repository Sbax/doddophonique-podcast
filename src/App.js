import { mount, NotFoundError, route } from "navi";
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Router, View } from "react-navi";
import styled from "styled-components";
import Episode from "./episode/Episode";
import episodesInfo from "./episodes.json";
import GlobalStyle from "./GlobalStyle";
import podcastInfo from "./podcast-info.json";
import PodcastInfo from "./PodcastInfo";
import RouteWrapper from "./RouteWrapper";
import SocialInfo from "./SocialInfo";
import theme from "./theme";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: auto;

  width: 100vw;

  > * + * {
    margin-top: 2rem;
  }
`;

const Description = styled.div`
  font-size: 1rem;

  > * + * {
    margin-top: 1em;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-weight: 200;
  }
`;

const routes = mount({
  "/": route({
    getView() {
      const episodes = episodesInfo.map(e => ({
        ...e,
        podcast: podcastInfo.title
      }));

      const latestEpisode = episodes[episodes.length - 1];

      return <Episode episode={latestEpisode} />;
    }
  }),
  "/episode/:id": route({
    getView(request) {
      const { id } = request.params;
      const episode = episodesInfo
        .map(e => ({
          ...e,
          podcast: podcastInfo.title
        }))
        .find(e => e.ordinal.toString() === id.toString());

      if (!episode) {
        throw new NotFoundError();
      }

      return <>{episode ? <Episode episode={episode} /> : "OwO what's this"}</>;
    }
  })
});

const App = () => (
  <>
    <Helmet>
      <meta name="theme-color" content={theme.primary} />
      <meta property="og:title" content={podcastInfo.title} />

      <meta property="og:description" content={podcastInfo.description} />
      <meta property="og:site_name" content={podcastInfo.title} />
      <meta property="og:locale" content="it_IT" />
      <meta property="article:author" content={podcastInfo.author} />
    </Helmet>
    <GlobalStyle />
    <Main>
      <Description>
        <PodcastInfo />
        <SocialInfo />
      </Description>
      <Router routes={routes}>
        <RouteWrapper>
          <Suspense fallback={null}>
            <View />
          </Suspense>
        </RouteWrapper>
      </Router>
    </Main>
  </>
);

export default App;
