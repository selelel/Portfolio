import Context from "../../Context/Context";
import { useContext, useEffect } from "react";
import Resume from "../Resume/Resume";
import Modals from "../../Reuseable UI/Modals";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

const Main = () => {
  const context = useContext(Context);

  useEffect(() => {}, []);

  return (
    <>
      {context?.modal && (
        <Modals
          onClose={() => {
            context?.tosetModal();
          }}
        >
          <Resume />
        </Modals>
      )}

      <div className="">
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
