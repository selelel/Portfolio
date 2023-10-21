import React from 'react';
import Main from './Components/Main/Main';
import { Provider } from './Context/Context';


function App() {
  return (
    <>
    <Provider>
    <Main/>
    </Provider>
    </>
  );
}

export default App;
