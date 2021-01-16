import React from "react";

export default function Person(props) {
  // const removePerson = () => {
  //     people.filter(person => person.id !== person)
  // }
  const { id, name, role, img } = props.person;

    // const id = props.person.id
    // const role = props.person.role
    // const name = props.person.name
    // const img = props.person.img

  return (
    <div>
      <article key={id} id={id} classname="person">
        <img src={img} alt="" className="img" />
        <div className="text">
        <h3>{name}</h3>
        <p>Role: {role}</p>
        </div>
      </article>
    </div>
  );
}
