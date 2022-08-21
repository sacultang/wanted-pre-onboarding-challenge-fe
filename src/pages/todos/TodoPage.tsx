import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import InputField from "./InputField";
import TodoItem from "./TodoItem";
import { createTodo } from "../../api/todoApi";
const TodoPage = () => {
  return (
    <Container>
      <InputField />
      <TodoItem />
    </Container>
  );
};

export default TodoPage;
