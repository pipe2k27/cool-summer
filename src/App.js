import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
     <Banner />
    </div>
    </BrowserRouter>
  );
}

export default App;
