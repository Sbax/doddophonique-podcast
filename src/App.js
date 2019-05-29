import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Episode from "./episode/Episode";
import episodesInfo from "./episodes.json";
import GlobalStyle from "./GlobalStyle";
import podcastInfo from "./podcast-info.json";
import PodcastInfo from "./PodcastInfo";
import theme from "./theme";
import SocialInfo from "./SocialInfo";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  width: 100vw;

  @media only screen and (min-width: 768px) {
    width: 66vw;
  }

  margin: auto;

  > * + * {
    margin-top: 1rem;
  }
`;

const episodes = episodesInfo.map(e => ({
  ...e,
  podcast: podcastInfo.title
}));

const latestEpisode = episodes[episodes.length - 1];

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
      <PodcastInfo />
      <Episode episode={latestEpisode} />
      <SocialInfo />
    </Main>
  </>
);

export default App;
