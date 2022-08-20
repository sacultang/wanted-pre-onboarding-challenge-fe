import React, { useState, FormEvent, ChangeEvent, useCallback } from "react";
import { postJoin } from "../../api/authApi";
const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleJoin = async (e: FormEvent) => {
    e.preventDefault();
    const res = await postJoin(userInfo);
    console.log("res", res);
  };
  const handleUserInfo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [id]: value }));
  }, []);
  return (
    <>
      <form onSubmit={handleJoin}>
        <label htmlFor="email">아이디</label>
        <input type="text" id="email" onChange={handleUserInfo} />
        <label htmlFor="password">패스워드</label>
        <input type="text" id="password" onChange={handleUserInfo} />
        <button>회원가입</button>
      </form>
      <div>이미 회원이신가요? 로그인하러 가기</div>
    </>
  );
};

export default Register;
