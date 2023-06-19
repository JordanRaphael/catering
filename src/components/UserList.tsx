import React from "react";
import { List } from "antd";
import { User } from "./App";
import "../css.css";
import { CateringTable } from "./columnDefs";
import { basicStructure } from "./types";

interface IProps {
  users: User[];
  selectedUser: User;
  setSelectedUser: React.Dispatch<React.SetStateAction<User>>;
}
export function UserList(props: IProps) {
  const onSelectUser = (user: User) => {
    props.setSelectedUser(user);
  };

  const structure = {
    food: { main: "", salad: "", desert: "", drink: "" },
    price: { main: null, salad: null, desert: null, drink: null },
  };

  const initialData: basicStructure[] = [
    {
      name: "Iordanis",
      Monday: structure,
      Tuesday: structure,
      Wednesday: structure,
      Thursday: structure,
      Friday: structure,
    },
    {
      name: "Kyriakos",
      Monday: structure,
      Tuesday: structure,
      Wednesday: structure,
      Thursday: structure,
      Friday: structure,
    },
    {
      name: "Fatjon",
      Monday: structure,
      Tuesday: structure,
      Wednesday: structure,
      Thursday: structure,
      Friday: structure,
    },
    {
      name: "Vaggelis",
      Monday: structure,
      Tuesday: structure,
      Wednesday: structure,
      Thursday: structure,
      Friday: structure,
    },
    {
      name: "Stathis",
      Monday: structure,
      Tuesday: structure,
      Wednesday: structure,
      Thursday: structure,
      Friday: structure,
    },
  ];

  return <CateringTable initialData={initialData} />;
}
