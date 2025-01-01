import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonPrimaryProps = {
  label: React.ReactNode;
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
