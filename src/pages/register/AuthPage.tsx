import React, { ChangeEvent, useState } from "react";

import Register from "./Register";
import styled from "styled-components";

const AuthPage = () => {
  const [changeInputValue, setChangeInputValue] = useState(0);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(changeInputValue);
    setChangeInputValue(Number(e.target.value));
  };
  return (
    <Container>
      <ChangeInputForm>
        <ChangeLabel
          htmlFor="login"
          className={changeInputValue ? "" : "active"}
        >
          Login
        </ChangeLabel>
        <ChangeInput
          type="radio"
          id="login"
          name="changeInput"
          onChange={handleInputChange}
          value={0}
          defaultChecked
        />
        <ChangeLabel
          htmlFor="join"
          className={changeInputValue ? "active" : ""}
        >
          Join
        </ChangeLabel>
        <ChangeInput
          type="radio"
          id="join"
          name="changeInput"
          onChange={handleInputChange}
          value={1}
        />
      </ChangeInputForm>

      <Register changeInputValue={changeInputValue} />
    </Container>
  );
};

export default AuthPage;

const Container = styled.div`
  width: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: aliceblue;
  height: 500px;
`;

const ChangeInputForm = styled.form`
  padding: 40px 0;
`;

const ChangeLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #aeaeae;
  color: #fff;
  margin: 0 4px;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #6a68b4;
  }
`;

const ChangeInput = styled.input`
  display: none;
  /* &:checked + label {
    color: white;
    background-color: #a6d5fe;
  } */
`;
