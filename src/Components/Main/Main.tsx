import Context from '../../Context/Context';
import { useContext } from 'react';
import Resume from '../Resume/Resume';
import Modals from '../../Reuseable UI/Modals';
import Nav from './Nav';
import Hero from './Hero';
import classNames from 'classnames';

const Main = () => {
  const context= useContext(Context);
  const classN = classNames('overflow-x-hidden md-lg',context?.modal || context?.isOpen ? 'duration-300 ease-out blur-sm': 'duration-500 ease-out blur-none')
  return (
    <>
    {
    context?.modal ? 
    <div className='z-10 fixed'>
      <Modals className='overflow-auto scrollbar-hide bg-white m-3 min-w-[300px] ' onClose={context.toToggle}><Resume/></Modals>
      </div> : ''
      }
    <div className='overflow-x-hidden'>
    <Nav/>
    </div>
    <div className={classN}>
      <Hero/>
    </div>
    
    </>
  )
}

export default Main