import Button from "../../Reuseable UI/Button";
import Hamburger from "hamburger-react";
import { cont } from "../../Context/Context";
import classNames from "classnames";
import { ReactNode } from "react";

type nav = {
  children: ReactNode;
  section?: string;
  className?: string;
  rest?: string | undefined;
  onClick?: (() => void) | undefined;
};

const Nav = () => {
  const context = cont();
  const Logo = "<sel/>";

  const Navigate = ({ children, section, ...rest }: nav) => {
    return (
      <a
        onClick={() => {
          context?.setOpen(false);
        }}
        href={section}
      >
        <Button className={rest?.className} onClick={rest?.onClick}>
          {children}
        </Button>
      </a>
    );
  };

  return (
    <div className="fixed top-0 z-30 flex align-middle">
      <div className={context?.phoneMenu}>
        <Navigate section={"./#hero"} className="font-thin text-xl">
          Home
        </Navigate>
        <Navigate section={"./#about"} className="font-thin text-xl">
          About
        </Navigate>
        <Navigate section={"./#project"} className="font-thin text-xl">
          Project
        </Navigate>
        <Navigate onClick={context?.toToggle} className="font-thin text-xl">
          Resume
        </Navigate>
      </div>

      <div className=" pt-5 py-2 w-screen flex px-10 justify-between bg-white">
        <a href="./#hero">
          <p className="text-3xl font-bold h-fit my-auto">{Logo}</p>
        </a>
        <div className="media-show absolute right-7 mt-4 top-0 z-10">
          <Hamburger
            easing="ease-in "
            duration={0.3}
            toggled={context?.isOpen}
            toggle={context?.setOpen}
            size={25}
          />
        </div>
        <div className="flex gap-2 media">
          <Navigate section={"./#hero"} className="font-thin ">
            Home
          </Navigate>
          <Navigate section={"./#about"} className="font-thin">
            About
          </Navigate>
          <Navigate section={"./#project"} className="font-thin">
            Project
          </Navigate>
          <Navigate onClick={context?.toToggle} className="font-bold">
            Resume
          </Navigate>
        </div>
      </div>
    </div>
  );
};

export default Nav;
