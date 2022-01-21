import "./index.css";
import Ak from "./index.json";
import React, { Component } from "react";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: ""
    };
  }
  validation = (event) => {
      
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    const cEmail = Ak.filter(
      (validationEmail) => validationEmail.Email === email
    );
    if (cEmail.length) {
      const cPassword = Ak.filter(
        (ValidationPassword) => ValidationPassword.Password === password
      );
      if (cPassword.length) {
        this.setState({
          status: "Welcome" + cPassword.map((name) => name.Name),
          name: cPassword.map((name) => name.Name),
          showComponent: true,
        });
        event.preventDefault();
      } else {
        this.setState({
          status: "Incorrect Password!!!",
        });
      }
      event.preventDefault();
    } else {
      this.setState({
        status: "User Not Found!!!",
      });
      event.preventDefault();
    }
  };
  render() {
    return (
      <div id="form">
        <form action="#" method="POST">
          <div className="heading">
            <label>AK GAMMING LOGIN FORM</label>
          </div>

          <div className="fillup">
            <table border="0">
              <tr>
                <td>
                  <label>E-mail</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ak_gamming_08@Email.com "
                    required
                  />
                  <div id="wom">Email is not valid</div>
                </td>
                <td>
                  <label>Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="enter a strong password"
                    required
                  />
                  <div id="wop">Password is not valid</div>
                </td>
                <td>
                  <button type="button" onClick={this.validation}>
                    SUBMIT
                  </button>

                </td>
              </tr>
            </table>
            {this.state.status}
            
            
          </div>
        </form>
      </div>
    );
  }
}

export default login;

/*
const validation = () => {

    let Email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    for (let index = 0; index < ak.length; index++) {
        if (Email !== "" || password !== "") 
        {
            if (ak[index]['Email'] === Email) {

                if (ak[index]['Password'] === password) {
                    document.getElementById("form").innerHTML = `<h1> ${ak[index]["name"]} </h1>`;

                    break;

                }
                else {
                    document.getElementById('wom').style.display = "none";
                    document.getElementById('wop').style.display = "block";
                    
                    break;
                }
            } else {
                document.getElementById('wom').style.display = "block";
                    document.getElementById('wop').style.display = "none";
                
            }
        } else{
            document.getElementById('wom').style.display = "block";
            document.getElementById('wop').style.display = "block";
            break;
        }
    }
};*/
