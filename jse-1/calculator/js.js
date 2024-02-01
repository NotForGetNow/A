const num1 = document.getElementById('input1')
const num2 = document.getElementById('input2')
const res = document.getElementById('result')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')

plus.addEventListener('click', calculate);
minus.addEventListener('click', calculate);
divide.addEventListener('click', calculate);
multiply.addEventListener('click', calculate);

function calculate() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);


    switch(this.id) {
        case 'plus':
            res.textContent = num1 + num2;
            break
            
        case 'minus':
            res.textContent = num1 - num2;
            break

        case 'divide':
            res.textContent = num1 / num2;
            break

        case 'multiply':
            res.textContent = num1 * num2;
            break

        default:
            break;
    }
}
// plus.onclick = function() {
//     let sum = Number(num1.value) + Number(num2.value)
//     res.textContent = sum
// }

// minus.onclick = function() {
//     let sum = Number(num1.value) - Number(num2.value)
//     res.textContent = sum
// }

// divide.onclick = function() {
//     let sum = Number(num1.value) / Number(num2.value)
//     res.textContent = sum
// }

// multiply.onclick = function() {
//     let sum = Number(num1.value) * Number(num2.value)
//     res.textContent = sum
// }

// console.log(num1.value, num2.value)

// let sum = Number(num1.value) + Number(num2.value)

// res.textContent = sum

// console.log(sum)
