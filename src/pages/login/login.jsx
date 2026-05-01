import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">NSocial</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on NSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Username" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button onClick={() => navigate("/")} className="loginButton">
              Login
            </button>
            <p className="forgotPass">Forgot password?</p>
            <button className="createButton">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
