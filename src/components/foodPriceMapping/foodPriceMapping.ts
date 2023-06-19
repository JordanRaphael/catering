import { FridayMenu } from "../Menu/FridayMenu";
import { deserts, drinks, salads } from "../Menu/Menu";
import { MondayMenu } from "../Menu/MondayMenu";
import { ThursdayMenu } from "../Menu/ThursdayMenu";
import { TuesdayMenu } from "../Menu/TuesdayMenu";
import { WednesdayMenu } from "../Menu/WednesdayMenu";
import { foodMappingStructure } from "../types";

const saladOptions = salads.map((item) => item.value);
const saladPrices = salads.map((item) => item.cost);
const desertOptions = deserts.map((item) => item.value);
const desertPrices = deserts.map((item) => item.cost);
const drinkOptions = drinks.map((item) => item.value);
const drinkPrices = drinks.map((item) => item.cost);

export const mapFood: foodMappingStructure = {
  Monday: {
    foods: {
      main: MondayMenu.map((item) => item.value),
      salad: saladOptions,
      desert: desertOptions,
      drink: drinkOptions,
    },
    price: {
      main: MondayMenu.map((item) => item.price),
      salad: saladPrices,
      desert: desertPrices,
      drink: drinkPrices,
    },
  },
  Tuesday: {
    foods: {
      main: TuesdayMenu.map((item) => item.value),
      salad: saladOptions,
      desert: desertOptions,
      drink: drinkOptions,
    },
    price: {
      main: TuesdayMenu.map((item) => item.price),
      salad: saladPrices,
      desert: desertPrices,
      drink: drinkPrices,
    },
  },
  Wednesday: {
    foods: {
      main: WednesdayMenu.map((item) => item.value),
      salad: saladOptions,
      desert: desertOptions,
      drink: drinkOptions,
    },
    price: {
      main: WednesdayMenu.map((item) => item.price),
      salad: saladPrices,
      desert: desertPrices,
      drink: drinkPrices,
    },
  },
  Thursday: {
    foods: {
      main: ThursdayMenu.map((item) => item.value),
      salad: saladOptions,
      desert: desertOptions,
      drink: drinkOptions,
    },
    price: {
      main: ThursdayMenu.map((item) => item.price),
      salad: saladPrices,
      desert: desertPrices,
      drink: drinkPrices,
    },
  },
  Friday: {
    foods: {
      main: FridayMenu.map((item) => item.value),
      salad: saladOptions,
      desert: desertOptions,
      drink: drinkOptions,
    },
    price: {
      main: FridayMenu.map((item) => item.price),
      salad: saladPrices,
      desert: desertPrices,
      drink: drinkPrices,
    },
  },
};
