import { sides } from "./Sides";
import { StandardMenu } from "./StandardMenu";

export const TuesdayMenu = [
  {
    value: "Μουσακάς",
    label: "Μουσακάς",
    price: 5,
  },
  {
    value: "Λαχανοντολμάδες",
    label: "Λαχανοντολμάδες",
    price: 5,
    children: sides,
  },
  {
    value: "Πέννες κοτόπουλο με σάλτσα τυριών",
    label: "Πέννες κοτόπουλο με σάλτσα τυριών",
    price: 5,
  },
  {
    value: "Χοιρινό κρασάτο με πιπεριές",
    label: "Χοιρινό κρασάτο με πιπεριές",
    price: 5,
    children: sides,
  },
  {
    value: "Μοσχάρι Κοκκινιστό",
    label: "Μοσχάρι Κοκκινιστό",
    price: 5,
    children: sides,
  },
  {
    value: "Κεφτεδάκια τηγανητά",
    label: "Κεφτεδάκια τηγανητά",
    price: 5,
    children: sides,
  },
  {
    value: "Φιλέτο ψαριού",
    label: "Φιλέτο ψαριού",
    price: 5,
    children: sides,
  },
  {
    value: "Κοτόσουπα",
    label: "Κοτόσουπα",
    price: 4.5,
  },
  {
    value: "Φασολάκια",
    label: "Φασολάκια",
    price: 4,
  },
  {
    value: "Γίγαντες πλακί",
    label: "Γίγαντες πλακί",
    price: 4.5,
  },
  ...StandardMenu,
];
