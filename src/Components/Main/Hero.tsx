import Button from "../../Reuseable UI/Button";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";
import {cont} from "../../Context/Context";


function Hero() {
  const context = cont();
  return (
    <>
    <div className="mx-10 mt-16 mb-32 min-h-[24rem] flex flex-col">
      <div className="my-auto flex flex-col gap-y-2">
        <h1 className="text-5xl">Jan Russel Gorembalem</h1>
        <p className="font-medium">🚀 Crafting Digital Worlds, One Pixel at a Time 🌟</p>
        <div className="flex w-1/2 gap-0">
          <Button className="text-4xl w-fit"><AiFillLinkedin/></Button>
          <Button className="text-4xl w-fit"><AiFillGithub/></Button>
          <Button className="flex text-2xl font-thin gap-0 w-fit" onClick={context?.toToggle}><BsFiletypePdf/> <p className="text-sm">Resume</p></Button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero;