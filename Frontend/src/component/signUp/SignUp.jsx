import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleApiCall } from "../../apis";
import AlertMessage from "../../common/alertmessage/AlertMessage";

const SignUp = () => {
  const styles = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
    width: "50px",
  };
  const alertStyle = {
    backgroundColor: "darkseagreen",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setMessage("");
    }, 2000);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await handleApiCall("post", "user/createUser", {
      name,
      email,
      password,
    });
    setMessage(result.data.message);
    handleClick();
  };
  return (
    <div>
      <h2>Signup Form</h2>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
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
            <b>Name</b>
          </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter name"
            name="name"
            required
          />
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

          <button type="submit">Signup</button>
        </div>

        <div class="container">
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
          <button type="button" onClick={handleButtonClick} class="cancelbtn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
