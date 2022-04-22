/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// task 1.1
let allP = Array.from(document.querySelectorAll("p"));

if (allP.length = 6){
console.log(allP)
}
// task 1.2
let firstDiv = document.querySelector("div.site-header");

// task 1.3
let jumboTronText = document.querySelector('#jumbotron-text');
console.log(jumboTronText);

// task 1.4
let pElementsInside = document.querySelectorAll(".primary-content > p");
if(pElementsInside.length = 3){
    console.log(pElementsInside);
}
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let myAlertBtn = document.querySelector("#alertBtn");
myAlertBtn.addEventListener("click", () => alert("Thanks for visiting Bikes for Refugees!"));


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeBody =()=>{
 const myBody = document.querySelector("body")

    if(myBody.style.backgroundColor === "white"){
        myBody.style.backgroundColor = "red";
    }else {
        myBody.style.backgroundColor = "white";
    }
    };
let colorBtnClicked = document.querySelector("#bgrChangeBtn");
 colorBtnClicked.addEventListener("click", changeBody)

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
function createP () {
 const mainArticles = document.getElementById("mainArticles")
    let newParagraph = document.createElement("p")
    newParagraph.id = "newParagraph"
    mainArticles.appendChild(newParagraph)
    newParagraph.innerText = "LEARN MORE"
   
};
let addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.addEventListener("click", createP)


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

function largeLink  () {
     const getLargeLink = document.querySelectorAll("a")
     if(getLargeLink){
     for ( var i = 0; i < getLargeLink.length; i ++ ) {
    getLargeLink[i].style.fontSize = "2em";
     };
   }
}

let largerLinkButton = document.getElementById('largerLinksBtn');
largerLinkButton.addEventListener("click", largeLink)

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

   function getInputValue() {
       const inputValue = document.querySelector(".form-control").value;
      createP(newParagraph.innerText = inputValue)
   }
  


 let addBtn = document.querySelector("#addArticleBtn");
 addBtn.addEventListener("click", getInputValue)

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
let arrColors = ["red","green", "blue", "orange", "pink"];

// let myBodyColors = document.querySelector("body");
//  changeBody =()=>{myBody.style.backgroundColor = "red"};
// let colorBtnClick = document.querySelector("#bgrChangeBtn");
// colorBtnClick.addEventListener("click", changeBody)