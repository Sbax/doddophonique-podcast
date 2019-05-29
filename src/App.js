import React from "react";
import GlobalStyle from "./GlobalStyle";
import episodesInfo from "./episodes.json";
import podcastInfo from "./podcast-info.json";
import EpisodePlayer from "./EpisodePlayer";
import styled from "styled-components";

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
    <GlobalStyle />
    <Main>
      <EpisodePlayer episode={latestEpisode} />
    </Main>
  </>
);

export default App;
