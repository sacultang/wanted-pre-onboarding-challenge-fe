import React, { ChangeEvent, useState } from "react";
import { TextField } from "../../style/common";
import { HiPencilAlt } from "react-icons/hi";
import { MdDeleteOutline, MdDone, MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";
import { AxiosResponse } from "axios";
import { deleteTodo, updateTodo } from "../../api/todoApi";
interface IProps {
  todoItem: string;
  todoId: number;
  isCompleted: boolean;
  setResult: React.Dispatch<
    React.SetStateAction<AxiosResponse<any, any> | undefined>
  >;
  accessToken: string;
}
const TodoItem = ({
  todoItem,
  todoId,
  isCompleted,
  setResult,
  accessToken,
}: IProps) => {
  const [writeMode, setWriteMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todoItem);
  const handleWriteMode = () => {
    setWriteMode((prev) => !prev);
    setNewTodo(todoItem);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleUpdateTodo = async () => {
    const res = await updateTodo(todoId, newTodo, isCompleted, accessToken);
    setResult(res);
    setWriteMode(false);
  };
  const handleDeleteTodo = async () => {
    const res = await deleteTodo(todoId, accessToken);
    console.log(res);
    setResult(res);
  };
  return (
    <>
      {!writeMode ? (
        <TodoLi>
          <TextGroup>{todoItem}</TextGroup>
          <ButtonGroup>
            <TodoButton onClick={handleWriteMode}>
              <HiPencilAlt />
            </TodoButton>
            <TodoButton>
              <MdDeleteOutline onClick={handleDeleteTodo} />
            </TodoButton>
          </ButtonGroup>
        </TodoLi>
      ) : (
        <TodoLi>
          <TextField
            todo="input"
            type="text"
            value={newTodo}
            onChange={handleChange}
          />
          <ButtonGroup>
            <TodoButton onClick={handleUpdateTodo}>
              <MdDone />
            </TodoButton>
            <TodoButton>
              <MdOutlineCancel onClick={handleWriteMode} />
            </TodoButton>
          </ButtonGroup>
        </TodoLi>
      )}
    </>
  );
};

export default TodoItem;

const TodoLi = styled.li`
  display: flex;
  justify-content: space-between;
  height: 35px;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid #ddd;
`;
const TextGroup = styled.div`
  padding: 0 20px;
  text-align: left;
  flex: 1;
`;
const ButtonGroup = styled.div`
  height: 40px;
  align-items: center;
  display: flex;
`;

const TodoButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  margin: 0 5px;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    svg {
      opacity: 0.5;
    }
  }
`;
