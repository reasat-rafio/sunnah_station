import clsx from "clsx";
import React from "react";

interface SecondarySubtitleProps {
  className?: string;
}

export const SecondarySubtitle: React.FC<SecondarySubtitleProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "py-2 border-b-4 border-nevyBlue flex gap-1 uppercase"
      )}
    >
      <h6>{children}</h6>
    </div>
  );
};
