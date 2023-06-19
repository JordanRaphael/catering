export interface basicStructure {
  [key: string]: any;
  name: string;
  Monday: dayStructure;
  Tuesday: dayStructure;
  Wednesday: dayStructure;
  Thursday: dayStructure;
  Friday: dayStructure;
}

export interface dayStructure {
  food: foodTypes;
  price: priceTypes;
}

export interface foodTypes {
  main: string;
  salad: string;
  desert: string;
  drink: string;
}

export interface priceTypes {
  main: number | null;
  salad: number | null;
  desert: number | null;
  drink: number | null;
}

export interface columnStructure {
  title: string;
  key: string;
  dataIndex: string;
  width?: number;
  children?: columnStructure[];
}

export interface foodMappingStructure {
  [key: string]: any;
  Monday: foodAndPriceStructure;
  Tuesday: foodAndPriceStructure;
  Wednesday: foodAndPriceStructure;
  Thursday: foodAndPriceStructure;
  Friday: foodAndPriceStructure;
}

export interface foodAndPriceStructure {
  foods: foods;
  price: prices;
}

export interface foods {
  [key: string]: any;
  main: string[];
  salad: string[];
  desert: string[];
  drink: string[];
}

export interface prices {
  [key: string]: any;
  main: number[] | null;
  salad: number[] | null;
  desert: number[] | null;
  drink: number[] | null;
}
