document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("add-cashOut-form").classList.add("hidden");
  });

document
  .getElementById("btn-show-add-cashOut")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("add-cashOut-form").classList.remove("hidden");
  });
