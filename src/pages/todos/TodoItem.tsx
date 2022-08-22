import React, { ChangeEvent, useState, useCallback, useEffect } from "react";
import { TextField, TodoLi } from "../../style/common";
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
  const [isChecked, setIsChecked] = useState(isCompleted);

  const fetch = useCallback(async () => {
    try {
      const res = await updateTodo(todoId, newTodo, isChecked, accessToken);
      setResult(res);
    } catch (e) {
      console.log(e);
    }
  }, [setResult, todoId, newTodo, isChecked, accessToken]);

  const handleWriteMode = useCallback(() => {
    setWriteMode((prev) => !prev);
    setNewTodo(todoItem);
  }, [setWriteMode, setNewTodo, todoItem]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }, []);

  const handleUpdateTodo = useCallback(() => {
    fetch();
    setWriteMode(false);
  }, [setWriteMode, fetch]);

  const handleDeleteTodo = useCallback(async () => {
    try {
      const res = await deleteTodo(todoId, accessToken);
      setResult(res);
    } catch (e) {
      console.log(e);
    }
  }, [setResult, todoId, accessToken]);

  const handleChecked = useCallback(async () => {
    setIsChecked((prev) => !prev);
  }, [setIsChecked]);

  useEffect(() => {
    fetch();
  }, [isChecked]);
  return (
    <>
      {!writeMode ? (
        <TodoLi>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleChecked}
          />
          <TodoText underline={isCompleted}>{todoItem}</TodoText>
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
interface TextProps {
  underline: boolean;
}

const TodoText = styled.div<TextProps>`
  padding: 0 20px;
  text-align: left;
  flex: 1;
  text-decoration: ${(p) => (p.underline ? "line-through" : "none")};
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
