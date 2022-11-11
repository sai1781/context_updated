import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Service from './Components/Service';
import contextTheme from './Context';


function App() {
  const [light, setLight] = useState(true);


  const changeTheme = (e) => {
    console.log("it is working");
    setLight(e);
  }


  return (
    <div className={light === true?"App-header light": "App-header dark"}>
      <contextTheme.Provider value={{ light, changeTheme }} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </contextTheme.Provider>


    </div>
  );
}

export default App;
