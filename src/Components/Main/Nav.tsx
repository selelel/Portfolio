import Button from '../../Reuseable UI/Button'
import Hamburger from 'hamburger-react'
import { cont } from '../../Context/Context'

function Nav() {
  const Logo = '<sel/>'
  const context = cont();
  return (
    <>
    <div className='flex justify-between m-4 items-middle'>
      <div><p className='text-2xl font-bold'>{Logo}</p></div>
        <div className='flex gap-2 media'>
        <div className='media-show absolute right-2 justify-end'><Hamburger easing="ease-in " duration={0.3} toggled={context?.isOpen} toggle={context?.setOpen}/>
        <div className={context?.isOpen ? 'visible absolute right-1':'hidden'}>
        <Button className='font-thin'>Home</Button>
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