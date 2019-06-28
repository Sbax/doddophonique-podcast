import React, { memo, useState, useEffect } from "react";
import EpisodePlayer from "./EpisodePlayer";
import styled from "styled-components";
import Navigator from "../Navigator";
const ReactMarkdown = require("react-markdown");

const Container = styled.article`
  > * + * {
    margin-top: 1rem;
  }
`;

const Header = styled.div`
  > * + * {
    margin-top: 0.25rem;
  }
`;

const Label = styled.h2`
  font-weight: 300;
  font-size: 0.8em;
  text-transform: capitalize;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Description = styled.div`
  line-height: 1.4;

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }
`;

const Episode = ({ episode }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (!episode.descriptionFile) return;
      const result = await import(
        `!raw-loader!../md/${episode.descriptionFile}`
      );

      setData(result.default);
    };

    fetchData();
  }, [episode]);

  const EpisodeWrapper = memo(
    ({ episode }) => <EpisodePlayer episode={episode} />,
    (a, b) => a.ordinal === b.ordinal
  );

  return (
    <Container>
      <Header>
        <Label>
          Episodio {episode.ordinal},{" "}
          {new Date(episode.date).toLocaleDateString("it", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
        </Label>
        <Title>{episode.title}</Title>
      </Header>
      <EpisodeWrapper episode={episode} />
      <Description>
        {episode.descriptionFile ? (
          <React.Suspense fallback={null}>
            <ReactMarkdown source={data} />
          </React.Suspense>
        ) : (
          episode.description
        )}
      </Description>
      <Navigator active={episode.ordinal} />
    </Container>
  );
};

export default Episode;
