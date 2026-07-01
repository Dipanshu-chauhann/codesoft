const buttons = document.querySelectorAll("button");

const resultfield = document.getElementById("result");


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
});


function clearResult() {
  resultfield.value = "";    //empty
}

function calculateResult() {
  resultfield.value = eval(resultfield.value);      //eval() JavaScript ka built-in function hai jo string ko JavaScript code ki tarah execute karta hai.
}                                                   //Yahan string ke andar jo JavaScript expression hoga, eval() usse execute karke result return karega.

function appendValue(buttonValue) {
  resultfield.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}