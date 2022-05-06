import React from "react";
import clsx from "clsx";

interface TitleProps {
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        "italic font-semibold text-blue-600 py-1 text-xl",
        className
      )}
    >
      - {children}
    </h2>
  );
};
