import React, { ChangeEvent, useCallback, useState } from "react";

import Register from "./register/Register";
import styled from "styled-components";
import Container from "../../components/common/Container";

const Home = () => {
  const [changeInputValue, setChangeInputValue] = useState(0);
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChangeInputValue(Number(e.target.value));
  }, []);

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

export default Home;

const ChangeInputForm = styled.form`
  padding: 40px 0;
`;

const ChangeLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;

  color: #9a9a9a;
  margin: 0 4px;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #6a68b4;
  }
`;

const ChangeInput = styled.input`
  display: none;
`;
