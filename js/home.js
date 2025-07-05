document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const amountNumber = parseFloat(amount);
    const pinNumber = document.getElementById("pin-number").value;

    // wrong way to validation
    if (pinNumber === "1234") {
      const balance = document.getElementById("balance").innerText;
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber + amountNumber;
      document.getElementById("balance").innerText = newBalance;
    }
  });
