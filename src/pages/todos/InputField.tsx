import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { AxiosResponse } from "axios";
import { StyledButton, TextField } from "../../style/common";
import { createTodo } from "../../api/todoApi";

interface IProps {
  setResult: React.Dispatch<
    React.SetStateAction<AxiosResponse<any, any> | undefined>
  >;
  accessToken: string;
}
const InputField = ({ setResult, accessToken }: IProps) => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);

  const submitTodo = async (e: FormEvent) => {
    e.preventDefault();
    if (todo === "") {
      alert("할 일을 작성해 주세요");
      return;
    }
    const res = await createTodo(todo, accessToken);
    setResult(res);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={submitTodo}>
      <TextField
        ref={inputRef}
        type="text"
        onChange={handleAddTodo}
        placeholder="할 일 작성"
      />
      <StyledButton todo="todo">추가</StyledButton>
    </form>
  );
};

export default InputField;
