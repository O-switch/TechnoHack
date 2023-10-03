// declaring variables
let display = document.querySelector('#display')
let btn = document.querySelectorAll('button')
let result = ''

let arr = Array.from(btn)
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') { //evaluating the reult
            result = eval(result)
            display.innerText = result
        } else if (e.target.innerText == 'C') { //clearing the screen 
            result = ''
            display.innerText = result
        } else if (e.target.innerText == 'D') { //deleting number by -1
            result = result.substring(0, result.length - 1)
            display.innerText = result
        } else if (e.target.innerText == '%') {
            result = eval(result / 100)
            display.innerText = result
        }
         else {
            result += e.target.innerText
            display.innerText = result
        }
    })
});