import React from "react";
import Main from "./Components/Main/Main";
import { Provider } from "./Context/Context";
import Nav from "./Components/Main/Nav";

function App() {
  return (
    <>
      <Provider>
        <Nav />
        <Main />
      </Provider>
    </>
  );
}

export default App;
