const spinner = document.querySelector('#spinner-text')
const body = document.querySelector('body')
const bkgdInput = document.querySelectorAll('.bkgd-input')
const spinnerInput = document.querySelector('#text-input')
const spinnerText = document.querySelector('#spinner-text')

function changeBackground() {
  let bkgdR = document.querySelector('#background-r').value
  let bkgdG = document.querySelector('#background-g').value
  let bkgdB = document.querySelector('#background-b').value
  body.style.backgroundColor = `rgb(${bkgdR},${bkgdG},${bkgdB})`
}

function changeText() {
  spinnerText.innerText = spinnerInput.value
}

bkgdInput.forEach((input) => input.addEventListener('input', changeBackground))
spinnerInput.addEventListener('input', changeText)