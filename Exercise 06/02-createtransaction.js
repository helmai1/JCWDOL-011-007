class Product {
  static productList = [];
  constructor() {
    this.name = '';
    this.price = 0;
  }
  get getProductName() {
    // get value from constructor () {name}
    return this.name;
  }
  set setProductName(name) {
    // example value : name = Red Dead Redemption 2
    this.name = name;
  }
  set setPrice(price) {
    // example value : price = 3000000
    this.price = price;
  }
}
class Transaction {
  constructor() {
    this.total = 0;
    this.productCart = [];
  }
  get showTotal() {
    return this.total;
  }
  get checkout() {
    return this;
  }
  addToCart(product, qty) {
    for (let item of Product.productList) {
      // looping value from array productList
      if (product == item.name) {
        // item.name EQ product | product from setProductName
        let priceTotal = item.price * qty;
        let itemOrder = {
          // [name, price, quantity, total]
          ...item, // value [name, price]
          quantity: qty,
          total: priceTotal,
        };
        this.productCart.push(itemOrder);
        this.total = this.total + priceTotal;
        return;
      }
    }
    console.log('Product not found!');
  }
}

/* setProduct and setPrice */
let product1 = new Product();
product1.setProductName = 'Red Dead Redemption 2';
product1.setPrice = 3000000;

let product2 = new Product();
product2.setProductName = 'Blazblue';
product2.setPrice = 500000;

let product3 = new Product();
product3.setProductName = 'Grand Theft Auto V';
product3.setPrice = 200000;

Product.productList.push(product1, product2, product3);

/* Print transaction */
let transaction = new Transaction();
transaction.addToCart('Blazblue', 2);
console.log(' Transaction 1 : ', transaction);

let transaction2 = new Transaction();
transaction2.addToCart('Grand Theft Auto V', 1);
transaction2.addToCart('Red Dead Redemption 2', 2);

console.log(' Transaction 2 : ', transaction2);
