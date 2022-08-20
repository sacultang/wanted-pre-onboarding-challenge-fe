import React, { FormEvent } from "react";

const Login = () => {
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="loginId">아이디</label>
        <input type="text" id="loginId" />
        <label htmlFor="loginPw">패스워드</label>
        <input type="text" id="loginPw" />
        <button>로그인</button>
      </form>
      <div>아이디가 없으신가요? 회원가입하러 가기</div>
    </>
  );
};

export default Login;
