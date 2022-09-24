// business logic

function Order() {
  this.order = {};
  this.orderNum = 0;
  this.orderCost = 0
}

Order.prototype.assignOrderNum = function() {
  this.orderNum += 1;
  return this.orderNum;
}

function Pizza([toppings], size, cost) {
  this.toppings = toppings;
  this.size = size;
  this.cost = cost
}

Pizza.prototype.cost = function() {
  let Cost = toppings.length * 1.5
  if (size === 'small') {
    Cost += 10;
  }
  else if (size === 'medium') {
    Cost += 14;
  }
  else {
    Cost += 18;
  }
  return Cost;
}

Order.prototype.addPizza = function(pizza) {

}

// UI
 
function handleFormSubmission(e) {
  e.preventDefault();
  //const size = 
  const toppings = document.querySelectorAll("input[name=topping]:checked");
  const toppingsArray = Array.from(toppings);
}
