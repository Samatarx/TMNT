import React from "react";
import Person from "./Person";

export default function People({ people, removeNinja, clearAll }) {
  return (
    <main>
      <section className="container">
        <h1>Teenage Mutant Ninja Turtles: {people.length} </h1>

        {people.map((person) => {
          return (
            <>
              <Person
                key={person.id}
                person={person}
                removeNinja={removeNinja}
              />
            </>
          );
        })}
        <button onClick={clearAll} className="cross">
          Splinters coming
        </button>
      </section>
    </main>
  );
}
