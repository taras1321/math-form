const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btn = document.querySelector('#btn-submit')
const result = document.querySelector('#result')
const select = document.querySelector('#select')

btn.addEventListener('click', (event) => {
  event.preventDefault()

  let res

  switch (select.value) {
    case 'plus':
      res = +num1.value + +num2.value
      break
    case 'minus':
      res = +num1.value - +num2.value
      break
    case 'multiply':
      res = +num1.value * +num2.value
      break
    case 'divide':
      res = Math.round(+num1.value / +num2.value)
      break
  }

  result.textContent = res
  num1.value = num2.value = ''
})
