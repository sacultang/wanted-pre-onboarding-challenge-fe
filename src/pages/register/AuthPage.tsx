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
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ChangeInputForm = styled.form`
  line-height: 100px;
`;

const ChangeLabel = styled.label`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #aeaeae;
  color: #fff;
  margin: 0 4px;
  &.active {
    color: #fff;
    background-color: #164771;
  }
`;

const ChangeInput = styled.input`
  display: none;
  /* &:checked + label {
    color: white;
    background-color: #a6d5fe;
  } */
`;
