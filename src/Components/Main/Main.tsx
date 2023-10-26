import Context from '../../Context/Context';
import { useContext } from 'react';
import Resume from '../Resume/Resume';
import Button from '../../Reuseable UI/Button';
import Modals from '../../Reuseable UI/Modals';
import Nav from './Nav';
import Hero from './Hero';

const Main = () => {
  const context= useContext(Context);
  return (
    <>
    {
    context?.modal ? 
    <div className='z-10 fixed'>
      <Modals className='overflow-auto scrollbar-hide bg-white m-3 min-w-[300px] ' onClose={context.toToggle}><Resume/></Modals>
      </div> : ''
      }

    <div className={context?.modal ? 'duration-700 ease-out blur-sm': 'duration-500 ease-out blur-none'}>
      <Nav/>
      <Hero/>
    </div>
    
    </>
  )
}

export default Main