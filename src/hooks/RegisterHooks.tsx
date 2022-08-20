import {
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { postRegister } from "../api/authApi";
import { useNavigate } from "react-router-dom";
const EMAIL_REGEX = /^[0-9a-zA-Z]*@([0-9a-zA-Z])*\./;
const RegisterHooks = (
  url: string,
  setBtnDisable: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [idMsg, setIdMsg] = useState(true);
  const [pwMsg, setPwMsg] = useState(true);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await postRegister(url, userInfo);
      console.log(res);
      if (res?.status === 200) {
        navigate("/todo", { replace: true });
      } else if (res?.status === 400) {
        alert(res?.data.details);
        return;
      }
    } catch (e) {
      console.log(e);
    }
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
