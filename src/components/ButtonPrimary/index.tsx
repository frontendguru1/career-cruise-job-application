import React from "react";
import { ButtonPrimaryProps } from "../../@types/type";

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="bg-pinkBackground flex justify-center items-center rounded-md h-[44px] px-7 text-[16px] text-white border-purpleGradient-r border-[.5px]"
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
