import React, { ChangeEvent, FormEvent, useState, useCallback } from "react";
import styled from "styled-components";
import { StyledButton, TextField } from "../../style/common";
import { createTodo } from "../../api/todoApi";

interface IProps {
  accessToken: string | undefined;
  setResult: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const InputField = ({ accessToken, setResult }: IProps) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);
  const submitTodo = async (e: FormEvent) => {
    e.preventDefault();
    const res = await createTodo(todo, accessToken!);
    setResult(res);
  };
  return (
    <form onSubmit={submitTodo}>
      <TextField
        type="text"
        onChange={handleAddTodo}
        placeholder="할 일 작성"
      />
      <StyledButton todo="todo">추가</StyledButton>
    </form>
  );
};

export default InputField;
