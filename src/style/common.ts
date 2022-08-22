import styled from "styled-components";
interface Props {
  todo?: string;
}
export const TextField = styled.input<Props>`
  border-radius: 4px;
  height: 40px;
  border: 1px solid #ddd;
  padding-left: 10px;
  width: ${(p) => (p.todo ? "100%" : "")};
  &::placeholder {
    color: #b6b6b6;
  }
`;
export const StyledButton = styled.button<Props>`
  width: ${(p) => (p.todo ? "60px" : "")};
  border: none;
  padding: 10px 0;
  margin: 40px 0 20px 0;
  border-radius: 4px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12);
  background-color: #6a68b4;
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    background-color: #4d4c8e;
    color: #ffffff;
  }
  &:disabled {
    background-color: #b4b4be;
    cursor: default;
  }
`;

export const TodoLi = styled.li`
  display: flex;
  justify-content: space-between;
  height: 35px;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid #ddd;
`;
