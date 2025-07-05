document.getElementById("btn-cashout").addEventListener("click", function (e) {
  e.preventDefault();
  const amountCash = document.getElementById("amount-cash").value;
  const cashPinNumber = document.getElementById("cash-pin-number").value;

  if (cashPinNumber === "1234") {
    const amountCashNumber = parseFloat(amountCash);
    const balance = document.getElementById("balance").innerText;
    const balanceNumber = parseFloat(balance);
    const newBalanceCashOut = balanceNumber - amountCashNumber;
    document.getElementById("balance").innerText = newBalanceCashOut;
  } else {
    alert("Failed to cash out");
  }
});
