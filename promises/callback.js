let stocks = {
  fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"]
};

const order = (fruitIndex, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruitIndex]} was selected!`);
  }, 2000);

  callProduction();
};

const production = () => {
  setTimeout(() => {
    console.log("Production has started!");
    setTimeout(() => {
      console.log("The fruit has been chopped!");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added!`);
        setTimeout(() => {
          console.log("Start the machine");
          setTimeout(() => {
            console.log(`Ice Cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("Serve Ice Cream")
              }, 2000)
            }, 3000)
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
