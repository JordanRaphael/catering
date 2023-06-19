import { sides } from "./Sides";
import { StandardMenu } from "./StandardMenu";

export const WednesdayMenu = [
  {
    value: "Παστίτσιο",
    label: "Παστίτσιο",
    price: 5,
  },
  {
    value: "Γίγαντες με χόρτα",
    label: "Γίγαντες με χόρτα",
    price: 4.5,
  },
  {
    value: "Βακαλάο σκορδαλιά",
    label: "Βακαλάο σκορδαλιά",
    children: sides,
    price: 5,
  },
  {
    value: "Τηγανιά κοτόπουλο",
    label: "Τηγανιά κοτόπουλο",
    children: sides,
    price: 5,
  },
  {
    value: "Μπιφτέκια γεμιστά με φέτα",
    label: "Μπιφτέκια γεμιστά με φέτα",
    children: sides,
    price: 5,
  },
  {
    value: "Χοιρινά φιλετάκια αλα κρεμ με μανιτάρια",
    label: "Χοιρινά φιλετάκια αλα κρεμ με μανιτάρια",
    children: sides,
    price: 5,
  },
  {
    value: "Γεμιστά",
    label: "Γεμιστά",
    children: sides,
    price: 4.5,
  },
  {
    value: "Μελιτζάνες ιμάμ",
    label: "Μελιτζάνες ιμάμ",
    children: sides,
    price: 5,
  },
  {
    value: "Φακές",
    label: "Φακές",
    price: 4,
  },
  {
    value: "Βραστό Μοσχάρι",
    label: "Βραστό Μοσχάρι",
    children: sides,
    price: 5,
  },
  ...StandardMenu,
];
