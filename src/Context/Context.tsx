import {ReactNode, useContext } from 'react';
import { createContext } from 'react'
import { useState } from 'react';

type Props = {
  children: ReactNode
}

type Outputprops = {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  toToggle: () => void,
} 

const Context = createContext<Outputprops|null>(null)

const Provider = ({children}:Props) => {
  const [modal, setModal] = useState(false)
  const toToggle = () => {
    modal===true ? setModal(false): setModal(true);
  }

  return (
    <Context.Provider value = {{modal, setModal, toToggle}} >{children}</Context.Provider>
  )
}

const cont = () => {
  return useContext(Context)
}
export {Provider,cont};
export default Context;