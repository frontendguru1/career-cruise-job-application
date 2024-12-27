import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonPrimaryProps = {
  label: React.ReactNode;
};

export interface PageHeaderProps {
  title: string;
  icon: IconDefinition;
}

export interface JobProps {
  title: string;
  exp: string | number;
  description: string;
  skills: string[];
}
