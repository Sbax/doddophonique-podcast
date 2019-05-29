import React from "react";
import { withCustomAudio } from "react-soundplayer/addons";
import { PlayButton, Progress, Timer } from "react-soundplayer/components";
import styled from "styled-components";
import theme from "./theme";

const Container = styled.article`
  width: 66vw;

  > * + * {
    margin-top: 1rem;
  }
`;

const Downloads = styled.div`
  > span + span {
    &:before {
      content: "/";
      margin: 0 0.25rem;
    }
  }
`;

const Header = styled.div`
  > * + * {
    margin-top: 0.25rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const Date = styled.h2`
  display: inline-block;
  background: ${theme.accent};
  padding: 0.1rem;
  font-weight: 300;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.2rem;
`;

const PlayBar = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 1rem;
  }

  @keyframes transform {
    0%,
    100% {
      border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
      border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
      border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
      border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
      border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
      border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
      border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
  }

  button {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.accent};
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;

    border: 0;
    outline: 0;

    &.playing {
      animation: transform 20s ease-in-out infinite both alternate;
    }

    svg {
      height: 1rem;
      width: 1rem;
      fill: ${theme.primary};
    }
  }

  .sb-soundplayer-progress {
    &-container {
      cursor: pointer;

      height: 4rem;
      width: 100%;
      -webkit-mask-image: url(${`${process.env.PUBLIC_URL}/sound.svg`});
      mask-image: url(${`${process.env.PUBLIC_URL}/sound.svg`});
      background: ${theme.primary};
    }

    &-inner {
      height: 100%;
      background: ${theme.accent};
    }
  }
`;

const CustomPlayer = withCustomAudio(props => {
  const { currentTime, duration, playing, episode } = props;
  return (
    <>
      <PlayBar>
        <PlayButton {...props} className={playing ? "playing" : ""}>
          Play
        </PlayButton>
        <Progress value={(currentTime / duration) * 100 || 0} {...props} />
      </PlayBar>
      <Footer>
        <Timer
          className="custom-player-timer"
          duration={duration / 1000}
          currentTime={currentTime}
          {...props}
        />

        <Downloads>
          Downloads:{" "}
          {episode.files.map(download => (
            <span key={`${download.name}.${download.format}`}>
              <a
                href={download.url}
                download={`${episode.podcast} #${episode.ordinal} – ${
                  episode.title
                }`}
                alt={`Download per l'episodio ${episode.title}`}
              >
                {download.format}
              </a>
            </span>
          ))}
        </Downloads>
      </Footer>
    </>
  );
});

const EpisodePlayer = ({ episode }) => {
  const [file] = episode.files;
  const audioFile = file.url;

  return (
    <Container>
      <Header>
        <Date>
          {episode.date}, Episodio {episode.ordinal}
        </Date>
        <Title>{episode.title}</Title>
      </Header>
      <CustomPlayer clientId="" streamUrl={audioFile} episode={episode} />
    </Container>
  );
};

export default EpisodePlayer;
