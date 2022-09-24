// business logic
/*
function Order() {
  this.order = {};
  //this.orderNum = 0;
  this.orderCost = 0
}

Order.prototype.assignOrderNum = function() {
  this.orderNum += 1;
  return this.orderNum;
}
*/
function Pizza([toppings], size,) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0
}

Pizza.prototype.cost = function() {
  let cost = toppings.length * 1.5
  if (size === 'small') {
    cost += 10;
  }
  else if (size === 'medium') {
    cost += 14;
  }
  else {
    cost += 18;
  }
  this.cost = cost;
} 
/*
Order.prototype.addPizza = function(pizza) {

}
*/
// UI

// make variable for size form
// make var for topping form
// make variable for new Pizza with size var and topping var as arguments


function handleFormSubmission(e) {
  e.preventDefault();
  const order = new Pizza(size, toppingsArray)
  const size = document.querySelector("input[name=pizzaSize]:checked");
  const toppings = document.querySelectorAll("input[name=topping]:checked");
  const toppingsArray = Array.from(toppings);
  return toppingsArray;
  const pizzaPrice = order.cost;
  return pizzaPrice; 

}


window.addEventListener('load', function() {
  const orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', handleFormSubmission);
})

