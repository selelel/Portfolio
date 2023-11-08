import { ReactNode, useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import Modals from "../Reuseable UI/Modals";
import Resume from "../Components/Resume/Resume";

type Props = {
  children: ReactNode;
};

type Outputprops = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tosetModal: () => void;
  isOpen: boolean;
  phoneMenu: string;
  tosetTestModal: () => void;
  testModal: boolean;
};

const Context = createContext<Outputprops | null>(null);

const Provider = ({ children }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [testModal, setTestModal] = useState(false);

  const tosetModal = () => {
    setModal(!modal);
  };

  const tosetTestModal = () => {
    setTestModal(!testModal);
  };

  const phoneMenu = classNames(
    "z-10 fixed left-0 rigth-0 top-0 bg-white w-screen flex flex-col justify-center items-center media-show",
    isOpen ? "animation-slide" : "hidden"
  );

  return (
    <Context.Provider
      value={{
        modal,
        setModal,
        tosetModal,
        isOpen,
        setOpen,
        phoneMenu,
        testModal,
        tosetTestModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const cont = () => {
  return useContext(Context);
};

export { Provider, cont };
export default Context;
