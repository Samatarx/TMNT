import React, { useState } from "react";
import "./App.css";
import Person from "./Person";
import data from "./data";

function App() {
  //hook
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Teenage Mutant Ninja Turtles</h3>

        {people.map((person) => {
          return (
            <>
              <Person person={person} age="52" />
            </>
          );
        })}

        <button onClick={() => setPeople([])}>Splinters coming</button>
      </section>
    </main>
  );
}

export default App;
