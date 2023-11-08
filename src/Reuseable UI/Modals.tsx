import React, { ReactNode, useEffect } from "react";
import classNames from "classnames";
import Button from "./Button";
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
    "fixed inset-20 w-5/12 border border-black h-[30rem] overflow-auto scrollbar-hide bg-white m-3 min-w-[20rem] mx-auto rounded-xl shadow-2xl duration-500 ease-out",
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
          context?.setModal(false);
        }}
        className="fixed inset-0 duration-500 ease-out backdrop-blur-sm"
      ></div>
      <div className={classes}>
        <div className="flex justify-end">
          <Button
            secondary
            className="active:decoration-red-800 active:text-red-500"
            onClick={() => {
              context?.setModal(false);
            }}
          >
            Close
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    container
  );
}

export default Modals;
