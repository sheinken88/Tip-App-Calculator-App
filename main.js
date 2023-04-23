let inputBill = document.getElementById("billAmount");
let tipPercBtns = document.querySelectorAll(".btn");
let customTip = document.getElementById("custom");
let inputPeople = document.getElementById("peopleCount");
let tipAmount = document.getElementById("tipAmount");
let total = document.getElementById("total");
let reset = document.getElementById("resetBtn");

let billValue = null;
let selectedTip = null;
let personAmount = null;

inputBill.addEventListener("input", (e) => {
  let value = Number(e.target.value);
  billValue = value;
  calculate();
  console.log(billValue);
});
tipPercBtns.forEach((button) => {
  button.addEventListener("click", (btn) => {
    customTip.value = "";
    tipPercBtns.forEach((b) => b.classList.remove("active"));
    btn.target.classList.add("active");

    let value = Number(btn.target.value);
    selectedTip = value;
    calculate();
    console.log(selectedTip);
  });
});
inputPeople.addEventListener("input", (e) => {
  let value = Number(e.target.value);
  personAmount = value;
  calculate();
  console.log(personAmount);
});

customTip.addEventListener("input", (e) => {
  tipPercBtns.forEach((btn) => btn.classList.remove("active"));
  let value = Number(e.target.value);
  selectedTip = value;
  calculate();
  console.log(selectedTip);
});

reset.addEventListener("click", resetBtn);

function calculate() {
  if (billValue && personAmount && selectedTip) {
    let billPerPerson = billValue / personAmount;
    let tipAmountPerPerson = billPerPerson * (selectedTip / 100);
    let totalPerPerson = billPerPerson + tipAmountPerPerson;

    tipAmount.innerHTML = `$${tipAmountPerPerson.toFixed(2)}`;
    total.innerHTML = `$${totalPerPerson.toFixed(2)}`;
  }
}

function resetBtn() {
  inputBill.value = "";
  inputPeople.value = "";
  inputPeople.value = "1";
  customTip.value = "";
  tipAmount.innerHTML = "";
  total.innerHTML = "";
  tipPercBtns.forEach((btn) => btn.classList.remove("active"));
}
