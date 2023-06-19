import { sides } from "./Sides";
import { StandardMenu } from "./StandardMenu";

export const MondayMenu = [
  {
    value: "Λαζανια με κιμα",
    label: "Λαζανια με κιμα",
    price: 5,
  },
  {
    value: "Κοτοπουλο Φουρνου",
    label: "Κοτοπουλο Φουρνου",
    children: sides,
    price: 4.5,
  },
  {
    value: "Γεμιστα με κιμα",
    label: "Γεμιστα με κιμα",
    price: 5,
  },
  {
    value: "Σουτζουκακια",
    label: "Σουτζουκακια",
    children: sides,
    price: 4.5,
  },
  {
    value: "Γλυκοξινο Κοτοπουλο",
    label: "Γλυκοξινο Κοτοπουλο",
    children: sides,
    price: 5,
  },
  {
    value: "Μπιφτεκια Φουρνου",
    label: "Μπιφτεκια Φουρνου",
    children: sides,
    price: 5,
  },
  {
    value: "Τηγανια Χοιρινη",
    label: "Τηγανια Χοιρινη",
    children: sides,
    price: 4.5,
  },
  {
    value: "Γιουβαρλακια",
    label: "Γιουβαρλακια",
    price: 4.5,
  },
  {
    value: "Φασολαδα",
    label: "Φασολαδα",
    price: 4,
  },
  {
    value: "Θραψαλα",
    label: "Θραψαλα",
    price: 5,
  },
  ...StandardMenu,
];

const lala = MondayMenu.map((item) => item.value);
console.log(lala);
