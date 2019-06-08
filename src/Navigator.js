import React from "react";
import { Link } from "react-navi";
import episodesInfo from "./episodes.json";
import styled from "styled-components";
import theme from "./theme.js";

const Links = styled.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.5rem;
  }

  .active {
    color: ${theme.primary};
  }
`;

const Navigator = ({ active = "" }) => {
  return (
    <Links>
      {[...episodesInfo].reverse().map(episode => (
        <Link
          key={episode.ordinal}
          className={
            active.toString() === episode.ordinal.toString() ? "active" : ""
          }
          href={`/episode/${episode.ordinal}`}
        >
          Episodio {episode.ordinal}, {episode.title},{" "}
          <span>
            {new Date(episode.date).toLocaleDateString("it", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </span>
        </Link>
      ))}
    </Links>
  );
};

export default Navigator;
