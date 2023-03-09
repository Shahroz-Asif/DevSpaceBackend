let isShopOpen = true;

let stocks = {
  fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"]
};

async function time(ms) {
  return new Promise((res, rej) => {
    if (isShopOpen) {
      setTimeout(res, ms);
    } else {
      rej(console.log("Shop is closed!"));
    }
  })
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected!`);

    await time(0);
    console.log("Production has started!");

    await time(2000)
    console.log("Fruit has been chopped!")

    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added!`)

    await time(1000)
    console.log("Started the machine!")

    await time(2000)
    console.log(`Ice Cream placed on ${stocks.holder[1]}`)

    await time(3000)
    console.log(`${stocks.toppings[0]} as toppings`)

    await time(2000)
    console.log("Serving Ice Cream")
  } catch(error) {
    console.log("Customer left!")
  }
}

kitchen();

