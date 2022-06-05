import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {  }

  constructor(params) {
    super(params)
    this._isInputValid = this._isInputValid.bind(this)
  }

  _isInputEmpty(input){
    let inputField = input.parentNode;
    if(input.value !== ""){
      inputField.classList.remove('error')
      return true;
    }else if(input.value === ""){
      inputField.classList.add('error')
      return false;
    }

  }

  _isValidEmail(params){
    let inputEmail = document.getElementById('email-input').parentNode;
    console.log(inputEmail.value);
    let regex = RegExp(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,3}/)
    if(inputEmail.firstChild.value.match(regex)){
      inputEmail.classList.remove('error');
      return true;
    }else if(inputEmail.value === ""){
      inputEmail.classList.add('error');
      return false;
    }else{
      inputEmail.classList.add('error');
      return false;
    }
  }
  
  _isInputValid(params){
    console.log(params);
    let form = params.target.parentNode;
    let emailValid = this._isValidEmail()
    let firstNameValid = this._isInputEmpty(document.getElementById("firstName-input"))
    let lastNameValid = this._isInputEmpty(document.getElementById("lastName-input"))
    let passwordValid = this._isInputEmpty(document.getElementById("password-input"))
    if(emailValid ===true && firstNameValid === true && lastNameValid === true && passwordValid === true) {
      form.submit();
    }
  }

  render() { 
    return (
      <div className="App">
        <div className="offer-info">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. 
          </p>
        </div>
        <div className="subscription-info">
          <p><span>Try it free 7 days&nbsp;</span>then $20/mo. thereafter</p>
          <div className="form-box">
            <form action='/' >
              <div className="input-container">
                <input type="text" name="FirstName" id="firstName-input" placeholder="First Name"/>
                <p>First Name cannot be empty</p>
              </div>
              <div className="input-container">
                <input type="text" name="LastName" id="lastName-input" placeholder="Last Name"/>
                <p>Last Name cannot be empty</p>
              </div>
              <div className="input-container">
                <input type="email" name="email" id="email-input" placeholder="Email Address"/>
                <p>Looks like this is not an email</p>
              </div>
              <div className="input-container">
                <input type="password" name="password" id="password-input" placeholder="Password"/>
                <p>Password cannot be empty</p>
              </div>
              <button type="button" onClick={this._isInputValid}>Claim your free trial </button>
            </form>
            <p>By clicking the button, you are agreeing to our <a href="/">Terms and Services</a></p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;