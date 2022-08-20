import {
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { postRegister } from "../../../api/authApi";
const EMAIL_REGEX = /^[0-9a-zA-Z]*@([0-9a-zA-Z])*\./;
const RegisterHooks = (
  url: string,
  setBtnDisable: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [idMsg, setIdMsg] = useState(true);
  const [pwMsg, setPwMsg] = useState(true);
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
    if (!EMAIL_REGEX.test(userInfo.email)) {
      setIdMsg(true);
    } else {
      setIdMsg(false);
    }
    if (userInfo.password.length < 8) {
      setPwMsg(true);
    } else {
      setPwMsg(false);
    }
  }, [userInfo.email, userInfo.password]);
  useEffect(() => {
    if (!idMsg && !pwMsg) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [idMsg, pwMsg, setBtnDisable]);
  return { handleRegister, handleUserInfo, idMsg, pwMsg };
};

export default RegisterHooks;
