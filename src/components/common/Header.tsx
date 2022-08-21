import React, { useCallback, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    navigate("/");
  }, [navigate]);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <HeaderStyle>
      <InnerWrap className="inner-container">
        {/* {user?.user ? (
          <>
            <h4>{user?.user}님 안녕하세요</h4>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : null} */}
      </InnerWrap>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  padding: 40px 0;
`;

const InnerWrap = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;
