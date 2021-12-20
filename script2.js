let product = prompt("Enter the product name: ");
let quantity = prompt("Enter the quantity: ");
let price = prompt("Enter the price: ");
let taxes = price * quantity * 1.0975 - price * quantity;
taxes = taxes.toFixed(2);

let total = price * quantity * 1.0975;
total = total.toFixed(2);

console.log(product, price, quantity, total);

if (total === isNaN) {
  alert("There was an Error in your code");
} else {
  document.write(
    `You're about to buy ${quantity} ${product}'s at a price of $${price}
      each. Uncle Sam needs you to pay him $${taxes} to allow you to make this purchase. The total for your order will be ${total}.`
  );
}
