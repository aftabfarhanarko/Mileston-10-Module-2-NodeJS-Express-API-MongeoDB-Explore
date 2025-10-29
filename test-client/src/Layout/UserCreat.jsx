import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

const UserCreat = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <h1 className="text-3xl font-semibold text-red-600 text-center py-7">Now Creat User Now</h1>
        <main className="w-11/12 mx-auto">
           <Form></Form>
        </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default UserCreat;
