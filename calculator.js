const buttonsEl = document.querySelectorAll("button");

const inputValue = document.getElementById("result");

console.log(buttonsEl);

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;

        if (buttonValue === "C") {
            clearResult();
        } else if(buttonValue==="Del"){
            deleteLastValue();
        }else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    })
}


function clearResult() {
    inputValue.value = "";
}

function deleteLastValue(){
    inputValue.value =inputValue.value.slice(0,-1);
}

function calculateResult() {
    inputValue.value = eval(inputValue.value);
}

function appendValue(buttonValue) {
    inputValue.value += buttonValue;
}