import Button from '../../Reuseable UI/Button'
import Hamburger from 'hamburger-react'
import { cont } from '../../Context/Context'
import classNames from 'classnames'

function Nav() {
  const Logo = '<sel/>'
  const context = cont();
  return (
    <>
    <div className='flex justify-between m-4 items-middle'>
      <p className='text-2xl font-bold h-fit my-auto'>{Logo}</p>
      
        <div className='flex gap-2 media'>
        <div className='media-show top-4 absolute right-2 justify-end'><Hamburger easing="ease-in " duration={0.3} toggled={context?.isOpen} toggle={context?.setOpen} size={19}/>
        <div className={context?.isOpen ? 'visible absolute animation-slide media-show z-10':'absolute animation-slide-isClose media-show'}>
        <Button className='font-thin '>Home</Button>
        <Button className='font-thin'>About</Button>
        <Button className='font-thin'>Project</Button>
        <Button className='font-thin'>Contact</Button>
        </div>

        </div>
          <Button className='font-thin'>Home</Button>
          <Button className='font-thin'>About</Button>
          <Button className='font-thin'>Project</Button>
          <Button className='font-thin'>Contact</Button>
      </div>
    </div>
    </>
  )
}

export default Nav