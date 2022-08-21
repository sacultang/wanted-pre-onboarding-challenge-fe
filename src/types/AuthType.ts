export type UserAuthType = {
  email: string;
  password: string;
};
export interface UserContextType {
  user: UserType;
  setUser: React.Dispatch<any>;
}

interface UserType {
  id: string;
  accessToken: string;
}
