import React, { ReactNode, useEffect } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import { cont } from "../Context/Context";

type Props = {
  children: ReactNode;
  onClose?: (() => void) | undefined;
  className?: string;
};

function Modals({ children, ...rest }: Props): JSX.Element | null {
  const context = cont();
  const classes = classNames(
    "fixed inset-0 top-16 w-5/12 border border-black h-[30rem] overflow-auto scrollbar-hide bg-white m-3 min-w-[20rem] mx-auto rounded-xl shadow-2xl",
    rest.className
  );

  const modalRoot = document.querySelector(".modal-root") as HTMLElement;

  if (!modalRoot) {
    return null;
  }

  const container = document.createElement("div");
  modalRoot.appendChild(container);

  useEffect(() => {
    document.querySelector("#root") as HTMLElement;
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={() => {
          context?.toToggle();
        }}
        className="fixed inset-0 backdrop-blur-sm"
      ></div>
      <div className={classes}>
        <div className="flex justify-end"></div>
        <div>{children}</div>
      </div>
    </div>,
    container
  );
}

export default Modals;
