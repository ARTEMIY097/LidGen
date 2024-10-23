import { Dispatch, FC, SetStateAction } from "react";

interface ISelectComponent {
  setValue: Dispatch<
    SetStateAction<{ id: number | string; name: string; value: string }>
  >;
  array: { id: number | string; name: string; value: string }[];
  title: string;
}

const SelectComponent: FC<ISelectComponent> = ({ setValue, array, title }) => {
  return (
    <select className="select select-ghost select-bordered shadow-lg">
      <option disabled selected>
        {title}
      </option>
      {array.map((item) => (
        <option onClick={() => setValue(item)} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
