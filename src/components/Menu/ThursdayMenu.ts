import { sides } from "./Sides";
import { StandardMenu } from "./StandardMenu";

export const ThursdayMenu = [
  {
    value: "Κανελόνια με κιμά",
    label: "Κανελόνια με κιμά",
    price: 5,
  },
  {
    value: "Κοτόπουλο κάρυ",
    label: "Κοτόπουλο κάρυ",
    price: 5,
  },
  {
    value: "Ρολάκια μελιτζάνας με κιμά",
    label: "Ρολάκια μελιτζάνας με κιμά",
    children: sides,
    price: 5,
  },
  {
    value: "Μπιφτέκι κοτόπουλο",
    label: "Μπιφτέκι κοτόπουλο",
    children: sides,
    price: 5,
  },
  {
    value: "Μοσχάρι λεμονάτο",
    label: "Μοσχάρι λεμονάτο",
    children: sides,
    price: 5,
  },
  {
    value: "Μπριζόλα χοιρινή",
    label: "Μπριζόλα χοιρινή",
    children: sides,
    price: 4.5,
  },
  {
    value: "Γιουβαρλάκια",
    label: "Γιουβαρλάκια",
    price: 4.5,
  },
  {
    value: "Φιλέτο ψαριού",
    label: "Φιλέτο ψαριού",
    children: sides,
    price: 5,
  },
  {
    value: "Αρακάς",
    label: "Αρακάς",
    price: 4,
  },
  {
    value: "Χταπόδι κοκκινιστό",
    label: "Χταπόδι κοκκινιστό",
    children: sides,
    price: 5,
  },
  ...StandardMenu,
];
