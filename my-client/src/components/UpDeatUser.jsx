import React from "react";
import { useLoaderData } from "react-router";

const UpDeatUser = () => {
  const user = useLoaderData();
  console.log(user);

  const handelEdite = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(email, name);

    const updeat = {name, email};
    // send data
    fetch(`http://localhost:4000/user/${user._id}`, {
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(updeat)
    })
    .then(res => res.json())
    .then(data => {
        // console.log("Updeat Data Now", data)
        if(data. modifiedCount){
            alert("Successfully Updeat User");
        }
    })

  };
  return (
    <div>
      <h1>Updeat User Informations</h1>
      <form onSubmit={handelEdite}>
        <input type="name" name="name" defaultValue={user.name}></input>
        <br></br>
        <input type="email" name="email" defaultValue={user.email}></input>
        <br></br>
        <input type="submit" value="Updeat profile"></input>
      </form>
    </div>
  );
};

export default UpDeatUser;
