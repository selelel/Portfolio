import { ReactNode } from "react";
import classNames from "classnames";

type tagType = {
  children: ReactNode;
  className?: string;
};

function TagIcon({ children, ...rest }: tagType) {
  const className = classNames(
    "min-w-[3rem] h-[2rem] p-1 text-center font-medium bg-black text-white cursor-pointer",
    rest?.className
  );

  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}

export default TagIcon;
