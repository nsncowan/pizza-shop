function Menu {
  toppings = ['cheese', 'pepperoni', 'sausage', 'peppers', 'pineapple', 'ham', 'anchovies',]
  size = ['small', 'medium', 'large']
}


function Order(orderNumber, pizzaSize, [toppings], sides, drinks) {
  this.num = orderNumber;
  this.size = pizzaSize;
  this.toppings = [toppings];
  this.sides = sides;
  this.drinks = drinks;
}

