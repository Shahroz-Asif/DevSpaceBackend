let isShopOpen = true;

let stocks = {
  fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"]
};

const order = (time, work) => {
  return new Promise((res, rej) => {
    if (isShopOpen) {
      setTimeout(() => res(work()), time);
    } else {
      rej(console.log("Our shop is closed!"));
    }
  })
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected!`))
  .then(() => order(0, () => console.log("Production has started")))
  .then(() => order(2000, () => console.log("Fruit has been chopped")))
  .then(() => order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added!`)))
  .then(() => order(1000, () => console.log("Started the machine")))
  .then(() => order(2000, () => console.log(`Ice Cream placed on ${stocks.holder[1]}`)))
  .then(() => order(3000, () => console.log(`${stocks.toppings[0]} as toppings`)))
  .then(() => order(2000, () => console.log("Serving Ice Cream")))
  .catch(() => console.log("Customer left!"))
  .finally(() => console.log("Day has ended!"));
