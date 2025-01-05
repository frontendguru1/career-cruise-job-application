import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonPrimaryProps = {
  label: React.ReactNode;
  onClickHandler?: () => void;
};

export interface PageHeaderProps {
  title: string | undefined;
  icon: IconDefinition;
}

export interface JobProps {
  title: string;
  exp: string | number;
  description: string;
  skills: string[];
  id: number | string;
  salary: string;
}

export interface JobListHeaderProps {
  title: string;
  totalRecords: number | string;
  renderRecords: number | string;
}

export interface JobListComponentProps extends JobListHeaderProps {
  data: JobProps[];
}

export interface loginApiProps {
  username: string;
  password: string;
}

export interface iUser {
  email: string;
  role: string;
}
export interface authLoginState {
  loading: boolean;
  token: string;
  user?: iUser | null;
  error: null | string;
  status: string;
}

export interface authSignupState {
  loading: boolean;
  message: string;
  error: null | string;
  status: string;
}

export interface LoginFormProps {
  username: string;
  password: string;
}

export interface signupFormProps {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}
