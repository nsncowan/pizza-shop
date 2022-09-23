// business logic

function Order() {
  this.order = {}
  this.orderNum = 0
  this.orderCost = 0
}

function Pizza([toppings], size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  let toppingsCost = toppings.length * 1.5
  if (size === 'small') {
    toppingCost += 10;
  }
  else if (size === 'medium') {
    toppingCost += 14;
  }
  else {
    toppingCost += 18;
  }
}


// UI
 
function handleFormSubmission(e) {
  e.preventDefault();
  //const size = 
  const toppings = document.querySelectorAll("input[name=topping]:checked")
}
