import React, { useState, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import InputField from "./InputField";
import TodoItem from "./TodoItem";
import { getTodos } from "../../api/todoApi";
import { UserContext } from "../../context/ProviderUser";
import { TodoItemType } from "../../types/TodoTypes";

const TodoPage = () => {
  const [result, setResult] = useState<string | undefined>("");
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const user = useContext(UserContext);
  const accessToken = user?.user.accessToken;
  const fetch = useCallback(async () => {
    const res = await getTodos(accessToken!);
    setTodoList(res);
  }, [accessToken]);
  useEffect(() => {
    fetch();
  }, [result, fetch]);
  return (
    <Container>
      <InputField accessToken={accessToken} setResult={setResult} />
      <TodoItem accessToken={accessToken} todoList={todoList} />
    </Container>
  );
};

export default TodoPage;
