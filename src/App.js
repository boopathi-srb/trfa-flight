import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import JSONDATA from "./MOCK_DATA.json";
import { useState } from 'react';

import Navbar from './components/navbar/navbar';
import Signup from './pages/signup/signup';
import  Home  from './pages/home/home';

function App() {
  const [ searchTerm , setSearchTerm] = useState("");
  return ( 
   /* <div className="app">
     <input
      type="text" 
      placeholder="Search..." 
      onChange={ (event) => {
          setSearchTerm(event.target.value);
      }}
      />
      {JSONDATA.filter((val)=> {
        if (searchTerm == "") {
          return val
        } else if (val.Location.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val 
        }
      }).map((val, key) => {
          return (
            <div className="search-input" key={key}>
            <p>{val.Location}</p>
            </div>
          );
      })}
       </div>
   */
  <Router className='"app'>
    <header>
       <Navbar/>
    </header>
   <body>
     <Routes>
         <Route path="/" element={ <Home/>} exact></Route>
         <Route path="/signup" element={ <Signup/>} exact></Route>
     </Routes>
   </body>
    
  </Router>
  
      
    
         
  );
}
export default App;

