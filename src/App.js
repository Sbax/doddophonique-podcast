import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Episode from "./episode/Episode";
import episodesInfo from "./episodes.json";
import GlobalStyle from "./GlobalStyle";
import podcastInfo from "./podcast-info.json";
import theme from "./theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faYoutube,
  faInstagram,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";

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

const Social = styled.section`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.5rem;
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
      <h1>{podcastInfo.title}</h1>
      <p>
        {podcastInfo.description.replace(
          "https://www.twitch.tv/doddophonique",
          "twitch"
        )}
      </p>
      <p>
        Puoi iscriverti al podcast utilizzando il tuo client preferito tramite
        il comodo{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${process.env.PUBLIC_URL}/feed.xml`}
        >
          feed
        </a>
        .
      </p>

      <Episode episode={latestEpisode} />

      <Social>
        <span>Dodds</span>
        <a
          href="https://www.instagram.com/doddophonique/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faInstagram} />
        </a>

        <a
          href="https://t.me/Doddophonique"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faTelegramPlane} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCtgooS_6RtECnEJZEpJrv7w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faYoutube} />
        </a>

        <a
          href="https://www.twitch.tv/doddophonique"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faTwitch} />
        </a>
      </Social>

      <Social>
        <span>Matzu</span>
        <a
          href="https://www.instagram.com/tuttobeneappartelavita/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faInstagram} />
        </a>

        <a href="https://t.me/matzuh" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size="lg" icon={faTelegramPlane} />
        </a>

        <a
          href="https://www.youtube.com/user/HPAmerijuanican"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faYoutube} />
        </a>
      </Social>
    </Main>
  </>
);

export default App;
