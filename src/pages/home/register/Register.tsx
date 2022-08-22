import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import RegisterHooks from "../../../hooks/RegisterHooks";
import { StyledButton, TextField } from "../../../style/common";
interface IProps {
  changeInputValue: number;
}

const registerUrl = {
  in: "/auth/signin",
  join: "/auth/signup",
};

const Register = ({ changeInputValue }: IProps) => {
  const [btnDisable, setBtnDisable] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleRegister, handleUserInfo, idMsg, pwMsg } = RegisterHooks(
    changeInputValue ? registerUrl.join : registerUrl.in,
    setBtnDisable
  );
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <UserForm onSubmit={handleRegister}>
        <InputLabel htmlFor="email">
          아이디
          <ErrorText>
            <span>{idMsg ? "이메일 형식으로 입력해주세요" : ""}</span>
          </ErrorText>
        </InputLabel>
        <TextField
          ref={inputRef}
          type="text"
          id="email"
          onChange={handleUserInfo}
          placeholder="email@example.com"
        />

        <InputLabel htmlFor="password">
          패스워드
          <ErrorText>
            <span>{pwMsg ? "8자리 이상 입력해주세요" : ""}</span>
          </ErrorText>
        </InputLabel>
        <TextField
          type="text"
          id="password"
          onChange={handleUserInfo}
          placeholder="8자리 이상 작성해주세요"
        />
        <StyledButton disabled={btnDisable}>
          {changeInputValue ? "회원가입" : "로그인"}
        </StyledButton>
      </UserForm>
    </>
  );
};

export default Register;
const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 40px 0;
`;
const InputLabel = styled.label`
  font-size: 0.8rem;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const ErrorText = styled.div`
  font-size: 0.8rem;

  span {
    color: #ff4d00;

    display: block;
  }
`;
