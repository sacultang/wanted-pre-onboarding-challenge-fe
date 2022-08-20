import {
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { postRegister } from "../../../api/authApi";
const EMAIL_REGEX = /^[0-9a-zA-Z]*@([0-9a-zA-Z])*\./;
const RegisterHooks = (url: string) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [idMsg, setIdMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [resMsg, setResMsg] = useState("");
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const res = await postRegister(url, userInfo);
  };
  const handleUserInfo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [id]: value }));
  }, []);

  useEffect(() => {
    if (userInfo.email.length && !EMAIL_REGEX.test(userInfo.email)) {
      setIdMsg("이메일 형식으로 작성해 주세요.");
    } else {
      setIdMsg("");
    }
    if (userInfo.password && userInfo.password.length < 8) {
      setPwMsg("8자리 이상 작성해 주세요.");
    } else {
      setPwMsg("");
    }
  }, [userInfo.email, userInfo.password]);

  return { handleRegister, handleUserInfo, idMsg, pwMsg };
};

export default RegisterHooks;
