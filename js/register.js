/*
Build the registration page for your case study app. After “registration”, it redirects them to a “dashboard” (this dashboard will be another page, and can be an empty page).

(If your Figma prototype doesn’t have a register section, use Google’s as an inspiration) 

Key features:

Don’t accept an empty input
The passwords match
the email is a valid email, design your logic using this idea (the emailRegex).
*/

function emailCheck() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let email = document.getElementById("emailInput").value;
  let emailError = document.getElementById("emailError");
  if (emailRegex.test(email) == false) {
    emailError.innerHTML = `Please enter a valid @ email address.`;
    emailError.style.color = "red";
    return false;
  }
  emailError.innerHTML = `Valid email address.`;
  emailError.style.color = "green";
  return true;
}

let pswCheck = {
  lowerCaseLetters: /[a-z]/g,
  upperCaseLetters: /[A-Z]/g,
  numbers: /[0-9]/g,
  eightCheck: function (psw) {
    if (psw.length >= 8) {
      document.getElementById("pswErrLength").innerHTML =
        "Password length is correct";
      document.getElementById("pswErrLength").style.color = "green";
    } else {
      document.getElementById("pswErrLength").innerHTML =
        "**Password length must be at least 8 characters";
      document.getElementById("pswErrLength").style.color = "red";
    }
  },
  numberCheck: function (psw) {
    if (psw.match(this.numbers)) {
      document.getElementById("pswErrNum").innerHTML =
        "Password contains a number";
      document.getElementById("pswErrNum").style.color = "green";
    } else {
      document.getElementById("pswErrNum").innerHTML =
        "Password does not contain a number";
      document.getElementById("pswErrNum").style.color = "red";
    }
  },
  lowerCheck: function (psw) {
    if (psw.match(this.lowerCaseLetters)) {
      document.getElementById("pswErrLowCase").innerHTML =
        "Password contains a lower case letter";
      document.getElementById("pswErrLowCase").style.color = "green";
    } else {
      document.getElementById("pswErrLowCase").innerHTML =
        "Password does not contain a lower case letter";
      document.getElementById("pswErrLowCase").style.color = "red";
    }
  },
  upperCheck: function (psw) {
    if (psw.match(this.upperCaseLetters)) {
      document.getElementById("pswErrUpCase").innerHTML =
        "Password contains an upper case letter";
      document.getElementById("pswErrUpCase").style.color = "green";
    } else {
      document.getElementById("pswErrUpCase").innerHTML =
        "Password does not contain an upper case letter";
      document.getElementById("pswErrUpCase").style.color = "red";
    }
  },
  clearErrors: function () {
    document.getElementById("pswErrLength").innerHTML = "";
    document.getElementById("pswErrNum").innerHTML = "";
    document.getElementById("pswErrLowCase").innerHTML = "";
    document.getElementById("pswErrUpCase").innerHTML = "";
  },
};

function pswVerification() {
  let psw = document.getElementById("psw").value;

  if (psw === "") {
    pswCheck.clearErrors();
    document.getElementById("pswErrorBlank").innerHTML =
      "**Fill the password please!";
  } else {
    document.getElementById("pswErrorBlank").innerHTML = "";
    pswCheck.lowerCheck(psw);
    pswCheck.upperCheck(psw);
    pswCheck.numberCheck(psw);
    pswCheck.eightCheck(psw);
  }
}

function pswMatch() {
  let psw = document.getElementById("psw").value;
  let pswConfirm = document.getElementById("pswConfirm").value;
  if (psw !== pswConfirm) {
    document.getElementById("pswMatchError").innerHTML =
      "Passwords do not match!";
    document.getElementById("pswMatchError").style.color = "red";
  } else {
    document.getElementById("pswMatchError").innerHTML = "Passwords match!";
    document.getElementById("pswMatchError").style.color = "green";
  }
}
