import React, { ReactElement } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactElement | [ReactElement, ReactElement];
}

const Container = ({ children }: IProps) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
const ContainerStyle = styled.div`
  width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: aliceblue;
  border-radius: 10px;
`;
