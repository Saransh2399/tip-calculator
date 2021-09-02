// declaring

const tipSelector = document.querySelector("#tip-selector")
const incrementTip = document.querySelector("#increment-tip")
const decrementTip = document.querySelector("#decrement-tip")
let tip = 0
tipSelector.value = tip

const peopleSelector = document.querySelector("#people-selector")
const incrementPeople = document.querySelector("#increment-people")
const decrementPeople = document.querySelector("#decrement-people")
let people = 0
peopleSelector.value = people

const tipPerPerson = document.querySelector("#tip-per-person")
const totalPerPerson = document.querySelector("#total-per-person")
tipPerPerson.innerHTML = 0
totalPerPerson.innerHTML = 0

const bill = document.querySelector("#bill")
let amount = bill.value

// Function to change bill value on user input
bill.addEventListener("change", () => {
  amount = bill.value
  calculate()
})

/**
 * Functions to increment and decrement tips and people
 * based on whether plus of minus is clicked
 */
incrementTip.addEventListener("click", () => {
  if (tip >= 100) return
  tip += 1
  tipSelector.value = tip
  calculate()
})

decrementTip.addEventListener("click", () => {
  if (tip <= 0) return
  tip -= 1
  tipSelector.value = tip
  calculate()
})

incrementPeople.addEventListener("click", () => {
  people += 1
  peopleSelector.value = people
  calculate()
})

decrementPeople.addEventListener("click", () => {
  if (people <= 0) return
  people -= 1
  peopleSelector.value = people
  calculate()
})

// Calculate function to calculate tip percent and tip per person
const calculate = () => {
  const temp = amount * (tip / 100)
  const tpp = temp / people
  const temp2 = parseInt(amount) + parseInt(temp)
  console.log(temp2)
  totalPerPerson.innerHTML = (temp2 / people).toFixed(2)
  tipPerPerson.innerHTML = tpp.toFixed(2)
}
