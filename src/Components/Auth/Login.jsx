import { useState } from "react";
import "./Login.css";
import { assets } from '../../Assets/assets';
function Login({setShowLogin}) {
  const [currentState, setCurrentState] = useState("login");
  return (
    <>
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title"><h2>{currentState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
          </div>
          <div className="login-popup-input">
            {currentState === "login" ? <></>:<input type="text" placeholder="your name" required />}
            
            <input type="email" placeholder="your email" required />
            <input type="text" placeholder="password" required />
          </div>
          <button>{currentState === "sign up" ? "create account" : "login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By coutinuing i am agreeing to term and policy </p>
          </div>
          {
            currentState === "login"? (
              <p onClick={()=>setCurrentState("sign up")}>create new account? <span>Register Here</span></p>
            ) : (
              <p onClick={()=>setCurrentState("login")}>already have an account? <span>Login here</span></p>
            )
          }
          
        </form>
      </div>
    </>
  );
}
export default Login;
