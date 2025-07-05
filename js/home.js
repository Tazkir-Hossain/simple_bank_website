document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const pinNumber = document.getElementById("pin-number").value;
  });
