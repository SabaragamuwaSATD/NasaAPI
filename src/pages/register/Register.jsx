import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./register.scss";
import email_icon from "../../components/Assests/email.png";
import password_icon from "../../components/Assests/password.png";

const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleRegister}>
        <div className="container">
          <div className="header">
            <div className="text">Register</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="email_icon" />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="password_icon" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>{" "}
          <Link to="/login">
            <div className="flex items-center justify-center mt-4 text-xs text-blue-500 uppercase hover:underline">
              Already Registered!
            </div>
          </Link>
          <div className="submit-container">
            <button type="submit" className="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
