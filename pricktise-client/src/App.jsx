import { Suspense } from "react";
import "./App.css";
import Users from "./components/Users";

const promiseData = fetch("http://localhost:5000/user").then(res => res.json());

function App() {
  return (
    <div>
      <h2>Pricktise MongoDb and Node.js and Express.js</h2>

      <Suspense fallback={<h3>Loding.....!</h3>}>
        <Users promiseData={promiseData}></Users>
      </Suspense>
    </div>
  );
}

export default App;
