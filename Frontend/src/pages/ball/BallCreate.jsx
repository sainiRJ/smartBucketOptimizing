import React, { useState } from "react";
import { handleApiCall } from "../../apis";
import Sidebar from "../../common/sidebar/Sidebar";
const BallCreate = () => {
  const alertStyle = {
    backgroundColor: "darkseagreen",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };

  const [pink, setPink] = useState("");
  const [blue, setBlue] = useState("");
  const [orange, setOrange] = useState("");
  const [green, setGreen] = useState("");
  const [red, setRed] = useState("");
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
    const result = await handleApiCall("post", "user/addVolumeOfBalls", {
      pink,
      blue,
      orange,
      green,
      red,
    });
    setMessage(result.data.message);
    handleClick();
  };

  return (
    <div>
      <Sidebar />
      <div>
        <h2>Login Form</h2>
        {showAlert && (
          <div className="alert alert-success" style={alertStyle} role="alert">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div class="container">
            <label for="uname">
              <b>Pink</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={pink}
              onChange={(event) => setPink(event.target.value)}
              name="pink"
              required
            />
            <label for="uname">
              <b>Red</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={red}
              onChange={(event) => setRed(event.target.value)}
              name="red"
              required
            />
            <label for="uname">
              <b>Blue</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={blue}
              onChange={(event) => setBlue(event.target.value)}
              name="blue"
              required
            />
            <label for="uname">
              <b>Orange</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={orange}
              onChange={(event) => setOrange(event.target.value)}
              name="orange"
              required
            />
            <label for="uname">
              <b>Green</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={green}
              onChange={(event) => setGreen(event.target.value)}
              name="green"
              required
            />
            <button type="submit">Create Ball Volume</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BallCreate;
