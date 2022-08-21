import React, { useContext } from "react";
import { TodoItemType } from "../../types/TodoTypes";

interface IProps {
  accessToken: string | undefined;
  todoList?: TodoItemType[];
}
const TodoItem = ({ accessToken, todoList }: IProps) => {
  return (
    <div>
      {todoList?.map((item: TodoItemType) => (
        <div>{item.todo}</div>
      ))}
    </div>
  );
};

export default TodoItem;
