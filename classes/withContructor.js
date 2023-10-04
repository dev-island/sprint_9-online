class Product {
  name = ''
  price = 0
  inventory = 0
  totalSales = 0
  constructor(name, price, inventory) {
    this.name = name
    this.price = price
    this.inventory = inventory
    console.log('New product created', this)
  }

  showTotalSales() {
    console.log(`Total Sold ${this.totalSales}`)
  }

  sell() {
    if (this.inventory > 0) {
      this.inventory--
      this.totalSales += this.price
      console.log(`Sold one ${this.name}. ${this.inventory} left in stock`)
    } else {
      console.log(`Sorry, ${this.name} is out of stock`)
    }
  }

  restock(amount) {
    this.inventory += amount
    console.log(`Restocked ${this.name}. ${this.inventory} left in stock`)
  }

  changePrice(newPrice) {
    this.price = newPrice
    console.log(`Changed price of ${this.name} to ${this.price}`)
  }
}

const myProduct = new Product('Phone', 10, 10)
myProduct.sell()
myProduct.sell()
myProduct.restock(10)
myProduct.showTotalSales()
myProduct.changePrice(200)
myProduct.sell()
myProduct.showTotalSales();


