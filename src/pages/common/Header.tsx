import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface ActiveType {
  isActive: boolean;
}

const activeStyle = ({ isActive }: ActiveType) => {
  return {
    textDecoration: "none",
    color: isActive ? "#fff" : "#9a9a9a",
    backgroundColor: isActive ? "#605db0" : "",
    padding: "10px 20px",
    borderRadius: "5px",
  };
};

const Header = () => {
  return (
    <Container>
      <NavStyle className="inner-container">
        <MenuUl>
          <MenuLi>
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
          </MenuLi>
          <MenuLi>
            <NavLink to="/auth" style={activeStyle}>
              Login/Join
            </NavLink>
          </MenuLi>
          <MenuLi>
            <NavLink to="/todo" style={activeStyle}>
              Todos
            </NavLink>
          </MenuLi>
        </MenuUl>
      </NavStyle>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 80px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
`;
const NavStyle = styled.nav``;

const MenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const MenuLi = styled.li`
  padding: 0 20px;
  text-align: center;
  flex: 1;
`;
