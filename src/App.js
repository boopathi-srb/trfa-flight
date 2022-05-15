import './App.css';
import JSONDATA from "./MOCK_DATA.json";
import { useState } from 'react';

function App() {
  const [ searchTerm , setSearchTerm] = useState("");
  return ( 
    <div className="app">
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
         
  );
}
export default App;

