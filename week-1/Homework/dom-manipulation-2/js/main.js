//create function to change blue Button background

const createFuntionButtonBlue = () => {
  const jumbotron = document.querySelector(".jumbotron")
  const blueBtn = document.getElementById("blueBtn")
  const btnPrimary = document.querySelector(".btn-lrg")

  const btnSecondary = document.querySelector(".btn-secondary")
  blueBtn.addEventListener("click", () => changeColorsBlueBtn())


  function changeColorsBlueBtn() {
    jumbotron.style.backgroundColor = "#588fbd";
    btnPrimary.style.backgroundColor = "#ffa500";
    btnSecondary.style.backgroundColor = "black";
    btnSecondary.style.color = "white";

  }

  return blueBtn

}












createFuntionButtonBlue()