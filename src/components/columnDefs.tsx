import { Cascader, Table } from "antd";
import { useState } from "react";
import "./styleTable.css";
import { basicStructure, foodAndPriceStructure } from "./types";
import { mapFood } from "./foodPriceMapping/foodPriceMapping";
import { deserts, drinks, mainMenu, salads } from "./Menu/Menu";

interface IProps {
  initialData: basicStructure[];
}

export const CateringTable = (props: IProps) => {
  const [data, setData] = useState(props.initialData);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const dayOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];
  const findIfIordanisIsGay = () => {
    return true;
  };

  const generateChildColumn = (
    title: string,
    day: string,
    render: (record: basicStructure) => React.ReactNode
  ) => {
    const dataIndex = `${day.toLowerCase()}${title}`;
    return {
      title: title,
      dataIndex: dataIndex,
      key: dataIndex,
      render: (_: any, record: basicStructure) => render(record),
    };
  };

  const generateChildrenColumns = (day: string) => [
    generateChildColumn("Food", day, (record) => (
      <Cascader
        options={mainMenu[day]}
        onChange={(selectedValue) =>
          handleFoodChange(day, "main", selectedValue, record)
        }
      />
    )),
    generateChildColumn("Salad", day, (record) => (
      <Cascader
        options={salads}
        onChange={(selectedValue) =>
          handleFoodChange(day, "salad", selectedValue, record)
        }
      />
    )),
    generateChildColumn("Desert", day, (record) => (
      <Cascader
        options={deserts}
        value={record[day]["food"]["desert"]}
        onChange={(selectedValue) =>
          handleFoodChange(day, "desert", selectedValue, record)
        }
      />
    )),
    generateChildColumn("Drink", day, (record) => (
      <Cascader
        options={drinks}
        onChange={(selectedValue) =>
          handleFoodChange(day, "drink", selectedValue, record)
        }
      />
    )),
    generateChildColumn("Price", day, (record) => (
      <div>{calculateSumOfDay(record, day)}€</div>
    )),
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 70,
    },
    {
      title: (
        <Cascader
          options={dayOptions}
          value={selectedDay}
          onChange={(selectedValue) => setSelectedDay(selectedValue[0])}
        />
      ),
      dataIndex: selectedDay.toLowerCase(),
      key: selectedDay,
      children: generateChildrenColumns(selectedDay),
    },
    {
      title: "Sum",
      key: "sum",
      render: (_: any, record: basicStructure) => calculateSumOfWeek(record),
    },
  ];

  const handleFoodChange = (
    day: string,
    course: string,
    selectedValue: any,
    record: basicStructure
  ) => {
    const newData: basicStructure[] = JSON.parse(JSON.stringify(data));
    const rowIndex = newData.findIndex((r) => r.name === record.name);
    if (rowIndex !== -1 && selectedValue) {
      const price = getFoodPrice(day, selectedValue[0], course);
      selectedValue = selectedValue.join("%");
      newData[rowIndex][day]["food"][course] = selectedValue;
      newData[rowIndex][day]["price"][course] = price;
      setData(newData);
    } else {
      newData[rowIndex][day].price[course] -= getFoodPrice(
        day,
        newData[rowIndex][day]["food"][course].split("%")[0],
        course
      );
      newData[rowIndex][day]["food"][course] = "";
      setData(newData);
    }
  };

  const getFoodPrice = (day: string, food: string, course: string): number => {
    if (mapFood.hasOwnProperty(day)) {
      const dayData: foodAndPriceStructure = mapFood[day];
      const index: number = dayData.foods[course].indexOf(food);
      if (index !== -1) {
        return dayData.price[course][index];
      }
    }
    return 0;
  };

  const calculateSumOfDay = (record: basicStructure, day: string) => {
    let sumOfDay = 0;
    const allPrices = Object.keys(record[day].price);
    allPrices.forEach((price) => (sumOfDay += record[day]["price"][price]));
    return sumOfDay;
  };

  const calculateSumOfWeek = (record: basicStructure) => {
    const keys = Object.keys(record);
    const days = keys.filter((element) => element !== "name");
    const allPrices = Object.keys(record.Monday.price);
    let finalSum = 0;
    days.forEach((key) =>
      allPrices.forEach((price) => (finalSum += record[key]["price"][price]))
    );
    return <div>{finalSum}€</div>;
  };

  const isCurrentUser = (name: string) => {
    //TODO Kapws na kanoume match users an 8eloume sugkekrimeno edit
    return true;
  };

  const rowClassName = (record: any, index: number, indent: number) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Table columns={columns} dataSource={data} rowClassName={rowClassName} />
    </div>
  );
};
