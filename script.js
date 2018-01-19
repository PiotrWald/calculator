// All buttons handling except for "C" and "="//
let buttons = document.querySelectorAll(".b");
let btns = Array.from(buttons);
btns.forEach( function(element) {
  element.addEventListener("click", function(){
    if (document.querySelector(".display").innerHTML.length >= 26) return;
    if (document.querySelector(".display").innerHTML == 0 || 
    document.querySelector(".display").innerHTML == "syntax error"  ) {
      document.querySelector(".display").innerHTML = element.innerHTML;
    } else document.querySelector(".display").innerHTML += element.innerHTML;
  })
});

// "C" button functionality //
document.querySelector(".clear").addEventListener("click", function(){
  if (document.querySelector(".display").innerHTML != "syntax error") {
    let string = document.querySelector(".display").innerHTML;
    let l = string.length-1;
    document.querySelector(".display").innerHTML = string.slice(0, l);
  } else {
    document.querySelector(".display").innerHTML = "0";
  }
})

// "CA" button functionality //
document.querySelector(".clearAll").addEventListener("click", function(){
  document.querySelector(".display").innerHTML = 0;
})

// "=" button event listener //
document.querySelector(".equal").addEventListener("click", function(){
  calculate();
})

// MAIN FUNCTION //

function calculate() {
  let equation = document.querySelector(".display").innerHTML;
  validateData(equation);
  if (document.querySelector(".display").innerHTML != "syntax error") {
  compute(equation);
  }
}


// Validation of input data //
function validateData(string) {

    //first validation check//
    if(isNaN(string[0]) || isNaN(string[string.length - 1])) {
      document.querySelector(".display").innerHTML = "syntax error";
    }

    //second validation check//
    for (var i = 0; i < string.length; i++) {
      if(string[i] == "*" || string[i] == "/" || string[i] == "+"
      || string[i] == "-") {
        if(string[i-1] == "*" || string[i-1] == "/" || string[i-1] == "+"
        || string[i-1] == "-") {
          document.querySelector(".display").innerHTML = "syntax error";
        }
      }
    }

    //third validation check//
    for (var i = 0; i < string.length; i++) {
      if(string[i] == ".") {
        if(string[i-1] == ".") {
          document.querySelector(".display").innerHTML = "syntax error";
        }
      }
    }

}

// the actual calculations//
function compute (string) {
  document.querySelector(".display").innerHTML = eval(string);
}