export type UserAuthType = {
  email: string;
  password: string;
};
export interface ContextType {
  user: UserType;
  setUser: React.Dispatch<any>;
}

interface UserType {
  id: string;
  token: string;
}
