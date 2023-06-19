import { sides } from "./Sides";
import { StandardMenu } from "./StandardMenu";

export const FridayMenu = [
  {
    value: "Βακαλάο σκορδαλιά",
    label: "Βακαλάο σκορδαλιά",
    children: sides,
    price: 5,
  },
  {
    value: "Μουσακάς",
    label: "Μουσακάς",
    price: 5,
  },
  {
    value: "Μπιφτέκια γεμιστά με φέτα",
    label: "Μπιφτέκια γεμιστά με φέτα",
    children: sides,
    price: 5,
  },
  {
    value: "Κοτόπουλο φούρνου",
    label: "Κοτόπουλο φούρνου",
    children: sides,
    price: 4.5,
  },
  {
    value: "Λαζάνια με κιμά",
    label: "Λαζάνια με κιμά",
    price: 5,
  },
  {
    value: "Σουφλέ αλαντικών",
    label: "Σουφλέ αλαντικών",
    price: 5,
  },
  {
    value: "Φιλέτο κοτόπουλο αλα κρεμ",
    label: "Φιλέτο κοτόπουλο αλα κρεμ",
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
    value: "Φακές",
    label: "Φακές",
    price: 4.5,
  },
  {
    value: "Φασολάδα",
    label: "Φασολάδα",
    price: 4,
  },
  ...StandardMenu,
];
