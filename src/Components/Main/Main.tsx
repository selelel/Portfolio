import Context from "../../Context/Context";
import { useContext } from "react";
import Resume from "../Resume/Resume";
import Modals from "../../Reuseable UI/Modals";
import Hero from "./Hero";
import classNames from "classnames";
import About from "./About";

const Main = () => {
  const context = useContext(Context);
  const classN = classNames(
    "md-lg relative ease-out",
    context?.modal ? "duration-300 blur-sm" : "duration-500 blur-none"
  );
  return (
    <>
      {context?.modal ? (
        <div className="z-20 fixed">
          <Modals
            className="overflow-auto scrollbar-hide bg-white m-3 min-w-[300px] "
            onClose={context.toToggle}
          >
            <Resume />
          </Modals>
        </div>
      ) : (
        ""
      )}

      <div className={classN}>
        <Hero />
        <About />
      </div>
    </>
  );
};

export default Main;
