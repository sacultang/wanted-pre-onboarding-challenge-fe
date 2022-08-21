import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import InputField from "./InputField";
import TodoItem from "./TodoItem";
import { getTodos } from "../../api/todoApi";
import { TodoItemType } from "../../types/TodoTypes";
import { AxiosResponse } from "axios";
const TodoPage = () => {
  const [result, setResult] = useState<AxiosResponse>();
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  const fetch = useCallback(async () => {
    const res = await getTodos();
    setTodoList(res);
  }, []);
  useEffect(() => {
    fetch();
  }, [result, fetch]);
  return (
    <Container>
      <InputField setResult={setResult} />
      <TodoUl>
        {todoList.map((item: TodoItemType) => (
          <TodoItem
            todoItem={item.todo}
            key={item.id}
            todoId={item.id}
            isCompleted={item.isCompleted}
            setResult={setResult}
          />
        ))}
      </TodoUl>
    </Container>
  );
};

export default TodoPage;

const TodoUl = styled.ul`
  min-width: 400px;
  width: 500px;
  height: 500px;
  background-color: #fff;
  padding: 20px 10px;
  box-sizing: border-box;
  overflow-y: scroll;
`;
