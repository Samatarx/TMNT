import React, { useState } from "react";
import "./App.css";
import data from "./data";
import People from "./People";
import Restart from './Restart'

function App() {
  //hook
  const [people, setPeople] = useState(data);

  const removeNinja = (id) => {
    const newList = people.filter((person) => person.id !== id);
    setPeople(newList);
  };

  const clearAll = () => setPeople([]);
  const returnAll = () => setPeople(data)


  if(people.length === 0){
    return <div className='restart' >
      <Restart returnAll={returnAll} />
    </div>
  }

  return <People people={people} removeNinja={removeNinja} clearAll={clearAll} />
   
}

export default App;
