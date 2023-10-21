import Context from '../../Context/Context';
import { useContext } from 'react';
import Resume from '../Resume/Resume';
import Button from '../../Reuseable UI/Button';
import Modals from '../../Reuseable UI/Modals';

const Main = () => {
  const context= useContext(Context);
  return (
    <>
    {/* modal here */}
    {
    context?.modal ? 
    <div className='z-10 fixed'>
      <Modals className='overflow-auto scrollbar-hide bg-white m-3 min-w-[300px] ' onClose={context.toOpen}><Resume/></Modals>
      </div> : ''
      }

    <div className={context?.modal ? 'blur-sm': 'blur-none'}>
      <Button primary onClick={context?.toOpen} className='m-3'> Open Resume</Button> 
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
      <Button secondary onClick={context?.toOpen} className='m-3'> Open Resume</Button> 
    </div>
    
    </>
  )
}

export default Main