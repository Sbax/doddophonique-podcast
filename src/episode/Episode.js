import React from "react";
import EpisodePlayer from "./EpisodePlayer";
import styled from "styled-components";

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

const Description = styled.p``;

const Episode = ({ episode }) => (
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
    <EpisodePlayer episode={episode} />
    <Description>{episode.description}</Description>
  </Container>
);

export default Episode;
