import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.main`
  min-height: calc(100vh - 100px);
  display: flex;
`;
