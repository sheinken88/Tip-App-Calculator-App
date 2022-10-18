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

//Control Events
inputBill.addEventListener("input", (e) => {
  let value = Number(e.target.value);
  billValue = value;
  calculate();
  console.log(billValue);
});
tipPercBtns.forEach((button) => {
  button.addEventListener("click", (btn) => {
    if (btn.target.classList.contains("active")) {
      btn.target.classList.remove("active");
    } else {
      btn.target.classList.add("active");
    }

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
// customTip.addEventListener("input", (e) => {
//   let selectedTip = Number(e.target.value);
//   calculate();
//   console.log(customTip);
// });

reset.addEventListener("click", resetBtn);

//Functions
function calculate() {
  let billPerPerson = billValue / personAmount;
  let tipAmountPerPerson = billPerPerson * (selectedTip / 100);
  let totalPerPerson = billPerPerson + tipAmountPerPerson;

  tipAmount.innerHTML = `$${tipAmountPerPerson.toFixed(2)}`;
  total.innerHTML = `$${totalPerPerson.toFixed(2)}`;
  return;
}

function resetBtn() {
  inputBill.value = "";
  inputPeople.value = "";
  inputPeople.value = "1";
  tipAmount.innerHTML = "";
  total.innerHTML = "";
  tipPercBtns.forEach((btn) => btn.classList.remove("active"));
  //   customTip.textContent = "Custom";
}
