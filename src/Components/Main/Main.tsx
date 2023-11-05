import Context from "../../Context/Context";
import { useContext } from "react";
import Resume from "../Resume/Resume";
import Modals from "../../Reuseable UI/Modals";
import Hero from "./Hero";
import classNames from "classnames";
import About from "./About";
import Projects from "./Projects";

const Main = () => {
  const context = useContext(Context);
  const classN = classNames(
    "md-lg relative ease-out",
    context?.modal ? "duration-300 blur-sm" : "duration-500 blur-none"
  );

  return (
    <>
      {context?.ViewModal}
      <div className={classN}>
        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="project">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Main;
