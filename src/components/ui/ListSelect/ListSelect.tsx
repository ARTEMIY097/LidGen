import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FC, useState } from "react";

export type ListSelectOption = {
  id: number;
  name: string;
};

type ListSelectProps = {
  options: ListSelectOption[];
  selected: ListSelectOption | null;
  setSelected: (option: ListSelectOption | null) => void;
};

const ListSelect: FC<ListSelectProps> = ({
  options,
  selected,
  setSelected,
}) => {
  const [query, setQuery] = useState("");

  const filtered =
    query === ""
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selected}
      onChange={(value) => setSelected(value)}
      onClose={() => setQuery("")}
    >
      <div className="relative">
        <ComboboxInput
          className={clsx(
            "input input-bordered w-full py-1.5 pr-8 pl-3 text-sm/6"
          )}
          displayValue={(option: ListSelectOption | null) => option?.name || ""}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--input-width)] rounded-xl bg-neutral p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {filtered.map((option) => (
          <ComboboxOption
            key={option.id}
            value={option}
            className="flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm/6 text-white">{option.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default ListSelect;
