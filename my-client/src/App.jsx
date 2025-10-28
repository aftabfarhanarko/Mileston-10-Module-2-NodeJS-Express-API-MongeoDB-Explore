import { Suspense } from "react";
import "./App.css";
import Users from "./components/Users";

const promiseData = fetch("http://localhost:4000/user").then(res => res.json());

function App() {
  return (
    <div>
      <h1>My Clients Sides</h1>
     <Suspense fallback={<h2>Loding......!</h2>}>
       <Users promiseData={promiseData}></Users>
     </Suspense>
    </div>
  );
}

export default App;
