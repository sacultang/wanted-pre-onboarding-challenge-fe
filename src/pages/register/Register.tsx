import styled from "styled-components";
import RegisterHooks from "./hooks/RegisterHooks";

interface IProps {
  changeInputValue: number;
}
const registerUrl = {
  0: "/users/create",
  1: "/users/login",
};

const Register = ({ changeInputValue }: IProps) => {
  const { handleRegister, handleUserInfo, idMsg, pwMsg } = RegisterHooks(
    changeInputValue ? registerUrl[0] : registerUrl[1]
  );

  return (
    <>
      <UserForm onSubmit={handleRegister}>
        <InputLabel htmlFor="email">
          아이디
          <ErrorText>
            <span>{idMsg}</span>
          </ErrorText>
        </InputLabel>
        <TextField
          type="text"
          id="email"
          onChange={handleUserInfo}
          placeholder="email@example.com"
        />

        <InputLabel htmlFor="password">
          패스워드
          <ErrorText>
            <span>{pwMsg}</span>
          </ErrorText>
        </InputLabel>
        <TextField
          type="text"
          id="password"
          onChange={handleUserInfo}
          placeholder="8자리 이상 작성해주세요"
        />

        <SubmitBtn>{changeInputValue ? "회원가입" : "로그인"}</SubmitBtn>
      </UserForm>
    </>
  );
};

export default Register;
const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;
const InputLabel = styled.label`
  font-size: 0.8rem;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;
const TextField = styled.input`
  border-radius: 4px;
  height: 40px;
  border: 1px solid #ddd;
  padding-left: 10px;
  &::placeholder {
    color: #b6b6b6;
  }
`;
const ErrorText = styled.div`
  font-size: 0.8rem;

  span {
    color: #ff4d00;

    display: block;
  }
`;
const SubmitBtn = styled.button`
  border: none;
  padding: 5px;
  margin: 10px 0;
  background-color: #6a68b4;
  border-radius: 4px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12);
  &:active {
    transform: scale(0.99);
  }
`;
