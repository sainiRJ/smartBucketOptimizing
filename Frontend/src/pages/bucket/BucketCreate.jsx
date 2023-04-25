import React, { useState } from "react";
import { handleApiCall } from "../../apis";
import Sidebar from "../../common/sidebar/Sidebar";
import { Link, useNavigate, NavLink } from "react-router-dom";

const BucketCreate = () => {
  const navigate = useNavigate();
  const alertStyle = {
    backgroundColor: "darkseagreen",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };

  const [bucketA, setBucketA] = useState("");
  const [bucketB, setBucketB] = useState("");
  const [bucketC, setBucketC] = useState("");
  const [bucketD, setBucketD] = useState("");
  const [bucketE, setBucketE] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (message) => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setMessage("");
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await handleApiCall("post", "user/addVolumeOfBucket", {
      bucketA,
      bucketB,
      bucketC,
      bucketD,
      bucketE,
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
              <b>Bucket A:</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={bucketA}
              onChange={(event) => setBucketA(event.target.value)}
              name="bucketA"
              required
            />
            <label for="uname">
              <b>Bucket B:</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={bucketB}
              onChange={(event) => setBucketB(event.target.value)}
              name="bucketB"
              required
            />
            <label for="uname">
              <b>Bucket C:</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={bucketC}
              onChange={(event) => setBucketC(event.target.value)}
              name="bucketC"
              required
            />
            <label for="uname">
              <b>Bucket D:</b>
            </label>
            <input
              type="text"
              placeholder="Cubic inches"
              value={bucketD}
              onChange={(event) => setBucketD(event.target.value)}
              name="bucketD"
              required
            />
            <label for="uname">
              <b>Bucket E:</b>
            </label>
            <input
              type="text"
              value={bucketE}
              onChange={(event) => setBucketE(event.target.value)}
              placeholder="Cubic inches"
              name="bucketE"
              required
            />
            <button type="submit">Create Bucket Volume</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BucketCreate;
