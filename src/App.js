import React from 'react';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    //<Provider store={store}>
    
    <BrowserRouter>
        <Main />
        </BrowserRouter>
      //</Provider>
    
  );
}

export default App;
