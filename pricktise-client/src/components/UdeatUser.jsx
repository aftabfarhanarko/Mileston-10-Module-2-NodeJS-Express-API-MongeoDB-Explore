import { useLoaderData } from "react-router";

const UdeatUser = () => {
  const user = useLoaderData();
  console.log(user);

  const handelUpdeat = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const upDeatUser = { name, email };
    fetch(`http://localhost:5000/user/${user._id}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upDeatUser),
    })
      .then((res) => res.json())
      .then((vew) => {
        if (vew.modifiedCount) {
          alert("Modifey This Data Now");
        }
      });
  };

  return (
    <div>
      <h2>This Is Updeat Your Profile</h2>
      <form onSubmit={handelUpdeat}>
        <input type="text" name="name" defaultValue={user.name}></input> <br />
        <br />
        <input type="email" name="email" defaultValue={user.email}></input>
        <br />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default UdeatUser;
