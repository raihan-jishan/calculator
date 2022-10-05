/* 
    title: simple calculator making. J S file. 
    descriptiom: this is a js file to making all functionality for a functional calculator. 
    date: 05 10 2022
    mood:  🙂 

*/
//  todos for M ak e M+ , M- functional ==
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})