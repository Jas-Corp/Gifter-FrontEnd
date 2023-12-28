export enum AuthStatus {
  UNKNOW = "UNKNOW",
  NOT_AUTHENTICATED = "NOT_AUTHENTICATED",
  AUTHENTICATED = "AUTHENTICATED",
}

export type user = {
  id: number;
  email: string;
  authStatus: AuthStatus;
};

export type connectionInfo = {
  email: string;
  password: string;
};
