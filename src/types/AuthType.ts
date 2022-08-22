export type UserAuthType = {
  email: string;
  password: string;
};
export interface AuthContextType {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

export interface UserType {
  id: string;
  accessToken: string;
}
