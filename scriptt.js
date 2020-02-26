const boardscreen=document.querySelector(`.board-screen`)
const updatescreen=(number)=>{
  boardscreen.value=number
}
const numbers=document.querySelectorAll(".number");

numbers.forEach((number)=>{
  number.addEventListener("click",(event)=>{
    inputNumber(event.target.value)
    updatescreen(currentInput)
  })

})
let prevInt='0'
let calculationOperator=''
let currentInput='0'


const inputNumber=(number)=>{
  if(currentInput==='0'){
    currentInput=number
  }else{
  currentInput+=number
}
}
let m = 0;
for(let score=0;score<=5;score++)
{
    if(currentInput==="Programmers will start the count from zero and not one." ||
     currentInput==="Javascript is not compiled." ||
    currentInput==="The root is at the top of the tree." ||
   currentInput==="High level language is user-friendly." ||
   currentInput==="Low level language needs assembler for translation.")
      m+=1;
}
document.getElementById('Score').innerHTML = m
