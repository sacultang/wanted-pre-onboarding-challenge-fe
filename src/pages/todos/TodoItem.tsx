import React, { ChangeEvent, useState } from "react";
import { TodoItemType } from "../../types/TodoTypes";
import { HiPencilAlt } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
interface IProps {
  todoItem: string;
  todoId: number;
}
const TodoItem = ({ todoItem, todoId }: IProps) => {
  const [updateTodo, setUpdateTodo] = useState(false);

  const handleUpdateTodo = (id: number) => {
    console.log(id);
    setUpdateTodo(!updateTodo);
  };

  const handleChangeTodo = (e: ChangeEvent) => {};

  return (
    <>
      {!updateTodo ? (
        <TodoLi>
          <TextGroup>{todoItem}</TextGroup>
          <ButtonGroup>
            <TodoButton onClick={() => handleUpdateTodo(todoId)}>
              <HiPencilAlt />
            </TodoButton>
            <TodoButton>
              <MdDeleteOutline />
            </TodoButton>
          </ButtonGroup>
        </TodoLi>
      ) : (
        <TodoLi>
          <input type="text" value={todoItem} onChange={handleChangeTodo} />
          <ButtonGroup>
            <TodoButton onClick={() => handleUpdateTodo(todoId)}>
              <HiPencilAlt />
            </TodoButton>
            <TodoButton>
              <MdDeleteOutline />
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
