//create function to change blue Button background

const createFuntionColorsButton = () => {
  const jumbotron = document.querySelector(".jumbotron")
  const orangeBtn = document.getElementById("orangeBtn")
  const greenBtn = document.getElementById("greenBtn")

  const btnPrimary = document.querySelector(".btn-lrg")
  const btnSecondary = document.querySelector(".btn-secondary")
  blueBtn.addEventListener("click", () => changeColorsBlueBtn())
  orangeBtn.addEventListener("click", () => changeColorsOrangeBtn())
  greenBtn.addEventListener("click", () => changeColorsGreenBtn())




  function changeColorsBlueBtn() {
    jumbotron.style.backgroundColor = "#588fbd";
    btnPrimary.style.backgroundColor = "#ffa500";
    btnSecondary.style.backgroundColor = "black";
    btnSecondary.style.color = "white";

  }

  function changeColorsOrangeBtn() {
    jumbotron.style.backgroundColor = "#f0ad4e";
    btnPrimary.style.backgroundColor = "#5751fd";
    btnSecondary.style.backgroundColor = "#31b0d5";
    btnSecondary.style.color = "white";

  } function changeColorsGreenBtn() {
    jumbotron.style.backgroundColor = "#87ca8a";
    btnPrimary.style.backgroundColor = "black";
    btnSecondary.style.backgroundColor = "#8c9c08";
    // btnSecondary.style.color = "white";

  }
}


//part 2

function validateSubmit() {
  const submitBtn = document.getElementById("submitBtn")

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const inputEl = document.querySelectorAll(".form-control")
    inputEl.forEach(inputEl => {
      const inputValue = inputEl.value
      if (!inputValue) {
        console.log(inputValue);
        inputEl.style.backgroundColor = "red";
      }
      console.log(inputValue);





    })





  })



}








validateSubmit()
createFuntionColorsButton()