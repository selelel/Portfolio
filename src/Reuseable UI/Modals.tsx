import React, { Children, ReactNode } from "react";
import classNames from "classnames";
import Button from "./Button";

type Props = {
  children: ReactNode;
  onClose?: (() => void) | undefined;
  className?: string;
};

function Modals({ children, ...rest }: Props) {
  const classes = classNames(
    "break-words blur-none mx-auto border border-black w-2/4 h-[32rem] rounded-lg overflow-auto scrollbar-hide bg-white m-3 min-w-[20rem] shadow-2xl",
    rest.className
  );
  return (
    <>
      <div className={classes}>
        <div className="flex justify-end ">
          <Button
            secondary
            className=" active:decoration-red-800 active:text-red-500"
            onClick={rest.onClose}
          >
            Close
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Modals;
