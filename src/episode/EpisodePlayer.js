import React from "react";
import { withCustomAudio } from "react-soundplayer/addons";
import { Progress, Timer } from "react-soundplayer/components";
import styled from "styled-components";
import theme from "../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Downloads = styled.div`
  > span + span {
    &:before {
      content: "/";
      margin: 0 0.25rem;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const PlayBar = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 1rem;
  }

  .sb-soundplayer-progress {
    &-container {
      flex: 1;
      cursor: pointer;

      height: 4rem;
      width: 100%;
      -webkit-mask-image: url(${`${process.env.PUBLIC_URL}/sound.svg`});
      mask-image: url(${`${process.env.PUBLIC_URL}/sound.svg`});
      background: ${theme.primary};
    }

    &-inner {
      height: 100%;
      background: linear-gradient(
        to right,
        ${theme.accent},
        ${theme.secondary},
        ${theme.accent}
      );
      background-size: 33vw;
    }
  }
`;

const PlayButton = styled.button`
  @keyframes transform {
    0%,
    100% {
      border-radius: 50%;
    }
    14% {
      border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    22% {
      border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }

    34% {
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

  @keyframes shade {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  cursor: pointer;

  font-size: 1.25rem;
  width: 3.5rem;
  height: 3.5rem;

  > span {
    display: inline-flex;
    width: 1.5em;
    height: 1.5em;

    justify-content: center;
    align-items: center;
  }

  color: ${theme.primary};
  background: linear-gradient(66deg, ${theme.accent}, ${theme.secondary});
  background-size: 160% 160%;
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;

  border: 0;
  outline: 0;

  animation: transform 20s ease-in-out infinite both alternate,
    shade 25s ease-in-out infinite both alternate;
  animation-play-state: paused;

  &.playing {
    animation-play-state: running;
  }
`;

const CustomPlayer = withCustomAudio(props => {
  const { currentTime, duration, playing, episode, soundCloudAudio } = props;
  return (
    <>
      <PlayBar>
        <PlayButton
          className={playing ? "playing" : ""}
          onClick={() =>
            playing ? soundCloudAudio.pause() : soundCloudAudio.play()
          }
        >
          <span>
            <FontAwesomeIcon size="fw" icon={playing ? faPause : faPlay} />
          </span>
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
          Download{episode.files.length > 1 && "s"}:{" "}
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

  return <CustomPlayer clientId="" streamUrl={audioFile} episode={episode} />;
};

export default EpisodePlayer;
