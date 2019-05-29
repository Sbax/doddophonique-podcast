import React from "react";
import GlobalStyle from "./GlobalStyle";
import episodesInfo from "./episodes.json";
import podcastInfo from "./podcast-info.json";
import EpisodePlayer from "./EpisodePlayer";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import theme from "./theme";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100vw;
  min-height: 100vh;
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
      <EpisodePlayer episode={latestEpisode} />
    </Main>
  </>
);

export default App;
