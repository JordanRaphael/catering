import { FridayMenu } from "./FridayMenu";
import { MondayMenu } from "./MondayMenu";
import { ThursdayMenu } from "./ThursdayMenu";
import { TuesdayMenu } from "./TuesdayMenu";
import { WednesdayMenu } from "./WednesdayMenu";

export const softDrinks = [
  {
    value: "Coca Cola",
    label: "Coca Cola",
  },
  {
    value: "Πορτοκαλαδα",
    label: "Πορτοκαλαδα",
  },
  {
    value: "Λεμονανδα",
    label: "Λεμονανδα",
  },
  {
    value: "Sprite",
    label: "Sprite",
  },
];

export const beers = [
  {
    value: "Heineken",
    label: "Heineken",
  },
  {
    value: "Amstel",
    label: "Amstel",
  },
  {
    value: "Αλφα",
    label: "Αλφα",
  },
  {
    value: "Fix",
    label: "Fix",
  },
];

export const mainMenu = {
  Monday: MondayMenu,
  Tuesday: TuesdayMenu,
  Wednesday: WednesdayMenu,
  Thursday: ThursdayMenu,
  Friday: FridayMenu,
};

export const salads = [
  {
    value: "Αγγουροντοματα",
    label: "Αγγουροντοματα",
    cost: 2.5,
  },
  {
    value: "Χωριατικη",
    label: "Χωριατικη",
    cost: 4,
  },
  {
    value: "Caesar's",
    label: "Caesar's",
    cost: 4,
  },
  {
    value: "Μαρουλι",
    label: "Μαρουλι",
    cost: 2.5,
  },
  {
    value: "Λαχανο Καροτο",
    label: "Λαχανο Καροτο",
    cost: 2.5,
  },
  {
    value: "Βραστα Λαχανικα",
    label: "Βραστα Λαχανικα",
    cost: 3,
  },
  {
    value: "Πατατοσαλατα",
    label: "Πατατοσαλατα",
    cost: 2.5,
  },
];

export const deserts = [
  {
    value: "Σοκολατοπιτα",
    label: "Σοκολατοπιτα",
    cost: 1.8,
  },
  {
    value: "Πορτοκαλοπιτα",
    label: "Πορτοκαλοπιτα",
    cost: 1.8,
  },
  {
    value: "Καρυδοπιτα",
    label: "Καρυδοπιτα",
    cost: 1.8,
  },
];

export const drinks = [
  {
    value: "Αναψυκτικα",
    label: "Αναψυκτικα",
    children: softDrinks,
    cost: 1,
  },
  {
    value: "Νερο μικρο",
    label: "Νερο μικρο",
    cost: 0.3,
  },
  {
    value: "Νερο μεγαλο",
    label: "Νερο μεγαλο",
    cost: 0.6,
  },
  {
    value: "Μπυρες 330ml",
    label: "Μπυρες 330ml",
    children: beers,
    cost: 1.3,
  },
];
