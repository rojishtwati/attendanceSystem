const welcomeParagraph = document.querySelector("p");

const buttonElements = document.getElementsByClassName("btn-check");
const buttonArray = Array.from(buttonElements);

const recordsContainer = document.querySelector(".container-records");

setTimeout(() => {
  welcomeParagraph.style.display = "none";
}, 2000);

buttonArray.forEach((button) => {
  console.log(button);
});

buttonArray[0].addEventListener("click", () => {
  buttonArray[0].disabled = true;
  buttonArray[1].disabled = false;
  recordsContainer.style.display = "block";
});

buttonArray[1].addEventListener("click", () => {
  buttonArray[1].disabled = true;
  buttonArray[0].disabled = false;
  recordsContainer.style.display = "none";
});
