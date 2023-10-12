console.log("Access granted")

const button = document.querySelector("#doSomething")
button.addEventListener("click", printButtonText)

function printButtonText(e) {
    console.log(e.target.innerText)
}

const operand1 = 0
const operand2 = null
const operatie = null
const display = 0 
const eroare = null

var buttons = document.querySelectorAll(".buttons");
var expression = document.getElementById("expression");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if(operatie == null) {
            if(button.innerText == "C") {
                expression.innerHTML = null
            }
        }
        expression.innerHTML = expression.innerHTML + button.innerText
    });
})