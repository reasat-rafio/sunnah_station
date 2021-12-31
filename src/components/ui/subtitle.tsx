import React from "react";
import clsx from "clsx";

interface SubTitleProps {
  className?: string;
}

export const SubTitle: React.FC<SubTitleProps> = ({ children, className }) => {
  return (
    <h6
      className={clsx(
        "text-smTitle md:text-lgTitle font-extrabold flex-1 text-nevyBlue font-title",
        className
      )}
    >
      {children}
    </h6>
  );
};
