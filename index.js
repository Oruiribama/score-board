
let plusOne = document.getElementById("tt")
let guestId = document.getElementById("guest")

let count = 0
let num = 0

function increaseByOne(){
  let result = count + 1
  plusOne.textContent = result
}

function increaseByTwo(){
  let result = count + 2
  plusOne.textContent = result
}

function increaseByThree(){
  let result = count + 3
  plusOne.textContent = result
}

function guestByOne(){
  let result = num + 1
  guestId.textContent = result
}

function guestByTwo(){
  let result = num + 2
  guestId.textContent = result
}

function guestByThree(){
  let result = num + 3
  guestId.textContent = result
}

function refresh(){
  plusOne.textContent = 0
  guestId.textContent = 0
}
