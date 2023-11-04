import Button from "../../Reuseable UI/Button";
import Hamburger from "hamburger-react";
import { cont } from "../../Context/Context";
import classNames from "classnames";

const Nav = () => {
  const Logo = "<sel/>";
  const context = cont();

  return (
    <div className="fixed top-0 z-30">
      <div className={context?.phoneMenu}>
        <a href="./#hero">
          <Button
            onClick={() => {
              context?.setOpen(false);
            }}
            className="font-thin text-xl"
          >
            Home
          </Button>
        </a>
        <a href="./#about">
          <Button
            onClick={() => {
              context?.setOpen(false);
            }}
            className="font-thin text-xl"
          >
            About
          </Button>
        </a>
        <a href="./#project">
          <Button
            onClick={() => {
              context?.setOpen(false);
            }}
            className="font-thin text-xl"
          >
            Project
          </Button>
        </a>
        <a
          onClick={() => {
            context?.setOpen(false);
          }}
          href="./#hero"
        >
          <Button onClick={context?.toToggle} className="text-xl font-bold">
            Resume
          </Button>
        </a>
      </div>

      <div className=" pt-5 py-2 w-screen flex px-10 justify-between bg-white">
        <a href="./#hero">
          <p className="text-3xl font-bold h-fit my-auto">{Logo}</p>
        </a>
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
          <a href="./#hero">
            <Button className="font-thin">Home</Button>
          </a>
          <a href="./#about">
            <Button className="font-thin">About</Button>
          </a>
          <a href="./#project">
            <Button className="font-thin">Project</Button>
          </a>
          <Button onClick={context?.toToggle} className="font-bold">
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
