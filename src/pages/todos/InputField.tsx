import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { createTodo } from "../../api/todoApi";
import { UserContext } from "../../context/UserContext";
const InputField = () => {
  const [todo, setTodo] = useState("");
  const user = useContext(UserContext);
  const accessToken = user?.user.token;
  const handleAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const submitTodo = (e: FormEvent) => {
    e.preventDefault();
    createTodo(todo, accessToken as string);
  };
  return (
    <form onSubmit={submitTodo}>
      <input type="text" onChange={handleAddTodo} />
      <button>추가</button>
    </form>
  );
};

export default InputField;
