document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = document.getElementById("phone-number").value;

  const pinnumber = document.getElementById("pin-number").value;
  // bad way to validation just a sample use
  if (phoneNumber === "5" && pinnumber === "1234") {
    console.log("you are logged in");
    window.location.href = "/home.html";
  } else {
    console.log("Wrong Phone Number or Pin Number");
  }
});
