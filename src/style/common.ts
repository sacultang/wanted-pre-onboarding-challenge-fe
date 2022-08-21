import styled from "styled-components";
interface Props {
  todo?: string;
}
export const TextField = styled.input`
  border-radius: 4px;
  height: 40px;
  border: 1px solid #ddd;
  padding-left: 10px;
  &::placeholder {
    color: #b6b6b6;
  }
`;
export const StyledButton = styled.button<Props>`
  width: ${(p) => (p.todo ? "40px" : "")};
  border: none;
  padding: 10px 0;
  margin: 40px 0 20px 0;
  border-radius: 4px;
  color: #464646;
  box-shadow: rgba(0, 0, 0, 0.12);
  background-color: #6a68b4;
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    background-color: #605db0;
    color: #ffffff;
  }
  &:disabled {
    background-color: #b4b4be;
    cursor: default;
  }
`;
