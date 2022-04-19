import React, { useState } from "react";
import Logo from "./logo.png";
import "./LoginPage.css";
import axios from 'axios'
const ClientRegisterPage = () => {
  const [username, processUserName] = useState("");
  const [password, processPassword] = useState("");
  const [mobile, processMobile] = useState("");
  const [email, processEmail] = useState("");


  const Register = () =>{
      axios.post("http://localhost:5000/register", {uname:username, password:password, mobile:mobile, email:email})
      .then((response =>{
          console.log(response)
      }))

      
  }

  return (
    <div className="container login_container">
      <div className="col-md-4">
        <img src={Logo} style={{ height: "60px", marginTop: "70px" }} />
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="right_div"></div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="loginpage_title">
            <h1>Register</h1>
            <div className="loginpage_bottom_bar text-center"></div>
            <p className="text-dark mt-4">
              Welcome back! Register to access the Sparklerpro CRM.
            </p>
            <p className="text-dark">
              Did You{" "}
              <span style={{ color: "#FED03C" }}>forgot your password ?</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="loginpage_input_field">
            <input
              type="text"
              className="form-control login_control"
              placeholder="Username"
              onChange={(e) => processUserName(e.target.value)}
            />
          </div>
          <div className="loginpage_input_field mt-4">
            <input
              type="text"
              className="form-control login_control"
              placeholder="Password"
              onChange={(e) => processPassword(e.target.value)}
            />
          </div>
          <div className="loginpage_input_field mt-4">
            <input
              type="text"
              className="form-control login_control"
              placeholder="Mobile No"
              onChange={(e) => processMobile(e.target.value)}
            />
          </div>
          <div className="loginpage_input_field mt-4">
            <input
              type="text"
              className="form-control login_control"
              placeholder="Email ID"
              onChange={(e) => processEmail(e.target.value)}
            />
          </div>
          <div className="loginpage_input_field mt-4">
            <button className="loginpage_button" onClick={Register}>
              {" "}
              <i class="fa-solid fa-circle-arrow-right"></i> CONTINUE
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="col-md-4">
        <div className="left_div"></div>
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default ClientRegisterPage;
