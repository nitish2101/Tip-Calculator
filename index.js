function totalTip(tipPercent, bill) {
  document.querySelector(".totalTip").value = (bill * tipPercent) / 100;
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
      // let customInput = document.querySelector(".custom").value;
      totalTip(tipPercent, bill);
      tipPerPerson(numberOfPerson, tipPercent, bill);
      // this.classList.add("pressed");
      // buttonAnimation(e.value);
      // custom(customInput, bill);
      // buttonAnimation();
      // reset(bill, numberOfPerson, tipPerPerson, totalTip);
      // console.log(tipPerPerson(numberOfPerson, tipPercent, bill));
    });
}
function tipPerPerson(numberOfPerson, tipPercent, bill) {
  document.querySelector(".tipPerPerson").value =
    (bill * tipPercent) / (100 * numberOfPerson);
}

function reset() {
  document.querySelector(".billAmount").value = "0.00";
  document.querySelector(".custom").value = "";
  document.querySelector(".numberPerson").value = "1";
  document.querySelector(".totalTip").value = "0.00";
  document.querySelector(".tipPerPerson").value = "0.00";
}
// function buttonAnimation(currentKey) {
//   let activeButton = document.querySelectorAll(".b")[];

//   activeButton.classList.add("pressed");

//   setTimeout(function () {
//     activeButton.classList.remove("pressed");
//   }, 100);
// }
