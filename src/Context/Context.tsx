import {ReactNode, useContext } from 'react';
import { createContext } from 'react'
import { useState } from 'react';

type Props = {
  children: ReactNode
}

type Outputprops = {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  toOpen: () => void,
} 

const Context = createContext<Outputprops|null>(null)

const Provider = ({children}:Props) => {
  const [modal, setModal] = useState(false)
  const toOpen = () => {
    if(modal===true){setModal(false)}else{setModal(true)}
  }

  return (
    <Context.Provider value = {{modal, setModal, toOpen}} >{children}</Context.Provider>
  )
}

const cont = () => {
  return useContext(Context)
}
export {Provider,cont};
export default Context;