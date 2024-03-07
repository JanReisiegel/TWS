var urlParams = new URLSearchParams(window.location.search);
//import crypto-js pro hashování hesel
//import * as CryptoJS from "crypto-js";
window.addEventListener("DOMContentLoaded", () => {
  let type = urlParams.get("type");
  let checkbox = document.getElementById("form-type");
  let login = document.getElementById("card-login");
  let signup = document.getElementById("card-signup");
  let logButton = document.getElementById("loginButton");
  let signButton = document.getElementById("signupButton");
  let toClass = [checkbox, login, signup, logButton, signButton, type];
  let form = new Form(...toClass);
});
class Form {
  constructor(checkbox, login, signup, logButton, signButton, initType) {
    this.checkbox = checkbox;
    this.login = login;
    this.signup = signup;
    this.logButton = logButton;
    this.signButton = signButton;
    this.initType = initType;
    checkbox.addEventListener("click", this.chackboxClick);
    logButton.addEventListener("click", this.logIn);
    signButton.addEventListener("click", this.signUp);
    this.initialize();
  }
  initialize = () => {
    if (this.initType == "login") {
      this.signup.style.display = "none";
      this.login.style.display = "block";
      this.checkbox.checked = false;
      let navLog = document.getElementById("navLog");
      navLog.classList.add("this_page");
    } else if (this.initType == "signup") {
      this.login.style.display = "none";
      this.signup.style.display = "block";
      this.checkbox.checked = true;
      let navSign = document.getElementById("navSign");
      navSign.classList.add("this_page");
    } else {
      alert("Jak jsi se sem dostal?");
    }
  };
  chackboxClick = () => {
    if (this.checkbox.checked) {
      this.login.style.display = "none";
      this.signup.style.display = "block";
      let navLog = document.getElementById("navLog");
      let navSign = document.getElementById("navSign");
      navSign.classList.add("this_page");
      navLog.classList.remove("this_page");
      urlParams.set("type", "signup");
    } else {
      this.signup.style.display = "none";
      this.login.style.display = "block";
      let navLog = document.getElementById("navLog");
      let navSign = document.getElementById("navSign");
      navSign.classList.remove("this_page");
      navLog.classList.add("this_page");
      urlParams.set("type", "login");
    }
    history.replaceState(null, null, "?" + urlParams.toString());
  };
  logIn = () => {
    let email = document.getElementById("logEmail").value;
    let password = document.getElementById("logPassword").value;
    let hashedPassword = btoa(password);
    let userInformation = {
      email: email,
      password: hashedPassword,
    };
    console.log(userInformation);
  };
  signUp = () => {
    let email = document.getElementById("signEmail").value;
    let password = document.getElementById("signPassword").value;
    let fullName = document.getElementById("fullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let hashedPassword = btoa(password);
    let userInformation = {
      email: email,
      password: hashedPassword,
      fullName: fullName,
      phoneNumber: phoneNumber,
    };
    console.log(userInformation);
  };
  createCookie = (usermail) => {
    var date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = "usermail=" + usermail + expires + "; path=/";
  }
}
