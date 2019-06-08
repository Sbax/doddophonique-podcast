import React from "react";
import { NotFoundBoundary } from "react-navi";
import styled from "styled-components";
import Navigator from "./Navigator";

const Title = styled.h1`
  margin: 1rem 0;
`;

export default function Layout({ children }) {
  return (
    <NotFoundBoundary
      render={() => (
        <div>
          <Title>OwO what's this</Title>
          <Navigator />
        </div>
      )}
    >
      {children}
    </NotFoundBoundary>
  );
}
