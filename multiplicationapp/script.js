//create a random number between 1 to 10
//create a random function
//from Math properly

const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const formEl = document.getElementById("form")
const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")

const scoreEl = document.getElementById('score')
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0
}
scoreEl.innerText = `score:${score}`

questionEl.innerText = `what is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2; 
//we need to get the answer from the user so we add the answer in the placeholder
//track the submission of the form and get the data from the input


//add eventlesiner to the formEl
formEl.addEventListener('submit', ()=>{
    //we activate if callback function 
    //the information we want to get is is whatever inside the input and we can get this 
    //by just bringing the input 
    //we will use .value method
    const userAns = +inputEl.value
    //we added + before the inputEl to convert from string type to number type
    //console.log(userAns, typeof userAns);

    if(userAns === correctAns){
         score++         
         updateLocalStorage()
   }else{
        score--
        updateLocalStorage()
    }


 })

 //we can store the score inside the local storage of the browser
 function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
 }