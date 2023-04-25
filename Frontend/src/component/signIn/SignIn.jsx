import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleApiCall } from "../../apis";

const SignIn = () => {
  const styles = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
    width: "50px",
  };
  const alertStyle = {
    backgroundColor: "indianred",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setMessage('');

    }, 2000);
  };
  const handleButtonClick = () => {
    navigate("/signup");
  };
  const navigateDashboard = () => {
    navigate("/bucket");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await handleApiCall("post", "user/signIn", {
      email,
      password,
    });
    if(result.data.status == false){
      setMessage(message);
      handleClick(result.data.message)
      
    }else{
      localStorage.setItem('token', result.data.data.token);
      navigateDashboard()
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      {showAlert && (
        <div className="alert alert-success" style={alertStyle} role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} method="post">
        <div class="imgcontainer">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            style={styles}
            alt="Avatar"
            class="avatar"
          />
        </div>

        <div class="container">
          <label for="uname">
            <b>Email</b>
          </label>
          <input
           type="text"
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           placeholder="Enter email"
           name="email"
           required
           />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            required
          />

          <button type="submit">
            Login
          </button>
        </div>

        <div class="container">
         
          <button type="button" onClick={handleButtonClick} class="cancelbtn">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
