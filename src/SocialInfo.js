import {
  faInstagram,
  faTelegramPlane,
  faTwitch,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Social = styled.section`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.5rem;
  }
`;
const SocialInfo = () => {
  return (
    <>
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
    </>
  );
};

export default SocialInfo;
