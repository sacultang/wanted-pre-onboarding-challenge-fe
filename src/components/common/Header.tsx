import React, { useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import styled from "styled-components";
import { StyledButton } from "../../style/common";
const Header = () => {
  const { accessToken, setAccessToken } = useContext(AuthContext);
  const handleLogout = useCallback(() => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
  }, [setAccessToken]);

  return (
    <HeaderStyle>
      <InnerWrap className="inner-container">
        {accessToken ? (
          <StyledButton todo="logout" onClick={handleLogout}>
            로그아웃
          </StyledButton>
        ) : null}
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
