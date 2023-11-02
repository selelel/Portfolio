import Button from "../../Reuseable UI/Button";
import Hamburger from "hamburger-react";
import { cont } from "../../Context/Context";
import classNames from "classnames";

const Nav = () => {
  const Logo = "<sel/>";
  const context = cont();

  const classN = classNames(
    "z-10 fixed left-0 rigth-0 top-0 bg-white w-screen flex flex-col justify-center items-center media-show",
    context?.isOpen ? "animation-slide" : "hidden"
  );

  return (
    <div className="fixed top-0 z-30">
      <div className={classN}>
        <Button className="font-thin text-xl">About</Button>
        <Button className="font-thin text-xl">Home</Button>
        <Button className="font-thin text-xl">Project</Button>
        <Button className="font-thin text-xl">Contact</Button>
      </div>

      <div className=" pt-5 py-2 w-screen flex px-10 justify-between bg-white">
        <p className="text-3xl font-bold h-fit my-auto">{Logo}</p>
        <div className="flex gap-2 media">
          <div className="media-show absolute right-7 mt-5 top-0 z-10">
            <Hamburger
              easing="ease-in "
              duration={0.3}
              toggled={context?.isOpen}
              toggle={context?.setOpen}
              size={30}
            />
          </div>
          <Button className="font-thin">Home</Button>
          <Button className="font-thin">About</Button>
          <Button className="font-thin">Project</Button>
          <Button className="font-thin">Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
