import React, { use, useState } from "react";

const Users = ({ promiseData }) => {
  const asdhd = use(promiseData);
  const [user, setUser] = useState(asdhd);

  const hamdelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const creatUser = { name, email };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creatUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After Saved Data", data);
        if (data.insertedId) {
          alert("User Save Successfully");
          creatUser._id = data.insertedId;
          const newAddUser = [...user, creatUser];
          setUser(newAddUser);
        }
      });
  };

  const handelDelete = (id) => {
    console.log("Delete Now Data", id);
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((del) => {
        console.log("Delete User Now", del);
        if (del.deletedCount) {
          const newArray = user.filter((itemas) => itemas._id !== id);
          setUser(newArray);
        }
      });
  };
  return (
    <div>
      <form onSubmit={hamdelSubmit}>
        <input type="text" name="name" placeholder="enter your name"></input>
        <br />
        <input type="email" name="email" placeholder="enter your email"></input>
        <br />
        <input type="submit" value="submit"></input>
      </form>

      <h2>Total User : {user.length}</h2>
      <div>
        {user.map((item) => (
          <p key={item._id}>
            Name : {item.name} Email : {item.email}
            <button onClick={() => handelDelete(item._id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
