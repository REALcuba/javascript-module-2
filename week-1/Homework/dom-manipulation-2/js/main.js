//create function to change blue Button background

const createFuntionButtonBlue = () => {
const jumbotron = document.querySelector(".jumbotron")
 const blueBtn = document.getElementById("blueBtn")
blueBtn.addEventListener("click", () => changeBackgrounColor() )


function changeBackgrounColor() {
     jumbotron.style.backgroundColor= "red"
//    blueBtn.style.backgroundColor = `#583fbd`;
//     console.log("potato")
//     return jumbotron
}

return blueBtn

}












createFuntionButtonBlue()