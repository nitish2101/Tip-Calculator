function totalTip(tipPercent, bill) {
  document.querySelector(".totalTip").value =
    "$ " + Math.round((bill * tipPercent) / 100);
}
for (let i = 0; i < document.querySelectorAll(".b").length; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (e) {
      let tipPercent = this.innerHTML;
      console.log(e.value);
      console.log(tipPercent);
      let bill = document.querySelector(".billAmount").value;
      let numberOfPerson = document.querySelector(".numberPerson").value;
      totalTip(tipPercent, bill);
      tipPerPerson(numberOfPerson, tipPercent, bill);
    });
}
function tipPerPerson(numberOfPerson, tipPercent, bill) {
  document.querySelector(".tipPerPerson").value =
    "$ " + Math.round((bill * tipPercent) / (100 * numberOfPerson));
}

function reset() {
  document.querySelector(".billAmount").value = "";
  // document.querySelector(".custom").value = "";
  document.querySelector(".numberPerson").value = "1";
  document.querySelector(".totalTip").value = "$ 0.00";
  document.querySelector(".tipPerPerson").value = "$ 0.00";
}
