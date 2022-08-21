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
      <TodoUl>
        {todoList.map((item: TodoItemType) => (
          <TodoItem todoItem={item.todo} key={item.id} todoId={item.id} />
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
