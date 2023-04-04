import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import './index.css';


function App() {
  const adminUser = {
    email: "naveenn0805@gmail.com",
    password: "naveen"
  }

const [user, setUser] = useState({id: "", name: "", email: "", password: "",age: "",gender: "",mobile: ""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if (details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      id: details.id,
      name: details.name,
      email: details.email,
      gender: details.gender,
      mobile: details.mobile,
      age: details.age
      
      
    });  } else {
    console.log("Details do not match!");
    setError("Details do not match!");
  }  
}

const Logout = () => {
  setUser({id: "", name: "", email: "", password: "",age: "",gender: "",mobile: ""});
}

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <h2>ID: <span>{user.id}</span></h2>
          <h2>Email: <span>{user.email}</span></h2>
          <h2>Age: <span>{user.age}</span></h2>
          <h2>Gender: <span>{user.gender}</span></h2>
          <h2>Mobile: <span>{user.mobile}</span></h2>
          
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>  
      )}
    </div>
  );
}

export default App;