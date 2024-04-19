let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');

// Variable to keep track of whether the last button clicked was an operator
let lastClickedOperator = false;

for (item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }

        // Check if the clicked button is an operator
        if (isOperator(btntext)) {
            // If the last button clicked was also an operator, do nothing
            if (lastClickedOperator) {
                return;
            }
            // If the last character on the screen is an operator, replace it with the new operator
            if (isOperator(screen.value[screen.value.length - 1])) {
                screen.value = screen.value.slice(0, -1) + btntext;
            } else {
                let result = eval(screen.value);
                updateAnswer(result);
                screen.value += btntext;
            }
            lastClickedOperator = true;
        } else {
            screen.value += btntext;
            lastClickedOperator = false;
        }
    });
}

// Function to check if a character is an operator
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

// Mathematical functions

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = Math.PI;
}

function e() {
    screen.value = Math.E;
}

function fact() {
    let num = parseInt(screen.value);
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function calculate() {
    let result = eval(screen.value);
    updateAnswer(result);
    screen.value = result;
    document.getElementById('answer').value = '';
}

// Function to update the answer box
function updateAnswer(answer) {
    let answerElement = document.getElementById('answer');
    answerElement.value = `${answer}`;
}

// Function to clear the screen and the answer box
function clearScreen() {
    screen.value = '';
    document.getElementById('answer').value = '';
}
