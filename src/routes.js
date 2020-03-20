import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { InfoPage, ProjectsPage } from "./page";
import HeaderBar from "./components/headerBar";
import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={InfoPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </BrowserRouter>
  );
};
