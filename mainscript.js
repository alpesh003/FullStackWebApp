console.log("Hello World!");
const openFormButton = document.querySelector(".btn-fact-open"); // query with css class of the html
const factForm = document.querySelector(".fact-form");
openFormButton.addEventListener("click", function () {
  console.log("Button click");
  if (factForm.classList.contains("hidden-fact-form")) {
    factForm.classList.remove("hidden-fact-form");
    openFormButton.textContent = "Close";
  } else {
    factForm.classList.add("hidden-fact-form");
    openFormButton.textContent = "Share a Fact!";
  }
});
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return currentYear - year;
}

console.log(calcFactAge(2015));

const votesInteresting = 25;
const votesNotIntersting = 20;
if (votesInteresting > votesNotIntersting) {
  console.log("Success!!");
} else {
  console.log("Failure!");
}

// javascript falsy values: 0, '', null, undefined
// javascript truthy values: !falsy

const falsyVar = 0;
const truthyVal = 12;
if (truthyVal) {
  console.log("Check trueness of values like this");
}
if (falsyVar) {
  console.log("no luck");
} else {
  console.log("Falsy values check");
}
