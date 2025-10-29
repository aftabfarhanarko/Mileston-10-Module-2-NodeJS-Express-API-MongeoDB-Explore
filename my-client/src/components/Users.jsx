import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ promiseData }) => {
  const convartData = use(promiseData);
  const [usera, setUsera] = useState(convartData);

  const handelSubmite = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const myData = { name, email };

    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          myData._id = data.insertedId;
          const newArray = [...usera, myData];
          setUsera(newArray);
          alert("Successfully Data Store in my MongeoDB Datyabase");
        }
      });
  };

  const handelDeleat = (id) => {
    console.log("Deleat Now", id);
    fetch(`http://localhost:4000/user/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Deleat Item Now", data);
        if (data.deletedCount) {
          alert("User Delete Successfyully");
          const upDeatData = usera.filter((ite) => ite._id !== id);
          setUsera(upDeatData);
        }
      });
  };
  return (
    <div>
      <form onSubmit={handelSubmite}>
        <input type="text" name="name"></input>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <input type="submit" value="Submite"></input>
        <br></br>
      </form>

      <h3>Total User : {usera.length}</h3>
      <div>
        {usera.map((item) => (
          <p key={item._id}>
            Name : {item.name} ! Email : {item.email}
            {"  "}
            <Link to={`/usersDetlise/${item._id}`}>detlise</Link>{"  "}
            <Link to={`/edit/${item._id}`}>Updeat</Link>
            <button onClick={() => handelDeleat(item._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
