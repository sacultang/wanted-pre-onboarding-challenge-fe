import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.main`
  max-width: 800px;
  min-width: 400px;
  margin: 0 auto;
  background-color: aliceblue;
`;
