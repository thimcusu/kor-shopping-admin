type LoginForm = {
  email: string;
  password: string;
};

type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  admin: boolean;
  active: boolean;
  createAt?: string;
  updateAt?: string;
}

export type { LoginForm, User};
