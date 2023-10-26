import Button from '../../Reuseable UI/Button'

function Nav() {
  const Logo = '<sel/>'
  return (
    <>
    <div className='flex justify-between m-4 items-middle '>
      <div><p className='text-2xl'>{Logo}</p></div>
      <div className='flex gap-8'>
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