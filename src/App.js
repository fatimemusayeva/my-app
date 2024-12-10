import "./Components/Style.css"
import React from 'react';
import {Routes,Route,Link,NavLink} from 'react-router-dom'
import About from "./Components/About";
import WorkExample from "./Components/WorkExample";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <div className="menu">
     <NavLink to='/about'>Haqqinda</NavLink>
     <NavLink to='/workExample'>Is numunesi</NavLink>
     <NavLink to='/contact'>Elaqe</NavLink>
     </div>

     <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/workExample' element={<WorkExample />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>

    </div>
  );
}

export default App;
