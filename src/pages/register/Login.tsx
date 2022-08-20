import RegisterHooks from "./hooks/RegisterHooks";
import styled from "styled-components";
const Login = () => {
  const { handleRegister, handleUserInfo } = RegisterHooks("/users/login");
  return (
    <>
      <UserForm onSubmit={handleRegister}>
        <label htmlFor="email">아이디</label>
        <input type="text" id="email" onChange={handleUserInfo} />
        <label htmlFor="password">패스워드</label>
        <input type="text" id="password" onChange={handleUserInfo} />
        <button>로그인</button>
      </UserForm>
      <div>아이디가 없으신가요? 회원가입하러 가기</div>
    </>
  );
};

export default Login;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
`;
