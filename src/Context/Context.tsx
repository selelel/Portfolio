import {ReactNode, useContext } from 'react';
import { createContext } from 'react'
import { useState, useEffect} from 'react';
import classNames from 'classnames';


type Props = {
  children: ReactNode
}

type Outputprops = {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  toToggle: () => void,
  isOpen: boolean,
  phoneMenu: string
} 

const Context = createContext<Outputprops|null>(null)

const Provider = ({children}:Props) => {
  const [isOpen, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const toToggle = () => {
    modal===true ? setModal(false): setModal(true);
  }

  const phoneMenu = classNames(
    "z-10 fixed left-0 rigth-0 top-0 bg-white w-screen flex flex-col justify-center items-center media-show",
    isOpen ? "animation-slide" : "hidden"
  );

  return (
    <Context.Provider value = {{modal, setModal, toToggle, isOpen, setOpen,phoneMenu}} >{children}</Context.Provider>
  )
}

const cont = () => {
  return useContext(Context)
}

export {Provider,cont};
export default Context;