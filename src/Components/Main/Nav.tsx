import Button from '../../Reuseable UI/Button'
import Hamburger from 'hamburger-react'
import { cont } from '../../Context/Context'
import classNames from 'classnames'

function Nav() {
  const Logo = '<sel/>'
  const context = cont();
  const classN = classNames('z-10 fixed h-full bg-white w-screen flex flex-col justify-center items-center media-show', context?.isOpen ? 'animation-slide' : 'animation-slide-isClose')
  return (
    <>
    <div className={classN}><Button className='font-thin'>Home</Button>
        <Button className='font-thin'>About</Button>
        <Button className='font-thin'>Project</Button>
        <Button className='font-thin'>Contact</Button>
        </div>

    <div className='fixed z-10 w-screen flex mx-auto px-5 justify-between m-4'>

      <p className='text-2xl font-bold h-fit my-auto'>{Logo}</p>
        <div className='flex gap-2 media'>
        <div className='media-show absolute right-3 -top-1'>       <Hamburger easing="ease-in " duration={0.3} toggled={context?.isOpen} toggle={context?.setOpen} size={18}/>
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