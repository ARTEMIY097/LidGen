import { useEffect, useState } from "react";
import SelectComponent from "../../SelectComponent/SelectComponent";

const DATAFILTERS = [
  {
    id: 0,
    name: "Сначала новые",
    value: "new",
  },
  {
    id: 1,
    name: "Сначала старые",
    value: "old",
  },
];

const LEADSTATUSFILTER = [
  {
    id: 0,
    name: "В работе",
    value: "inWorkPartner",
  },
  {
    id: 1,
    name: "Новый",
    value: "newPartner",
  },
  {
    id: 2,
    name: "Сделка",
    value: "dealPartner",
  },
  {
    id: 3,
    name: "Отмена",
    value: "canceledPartner",
  },
];

const SOURCEFILTER = [
  {
    id: 0,
    name: "Прямое добавление",
    value: "directAddition",
  },
  {
    id: 1,
    name: "Реферальные ссылки",
    value: "referalLink",
  },
];

const OFFERFILTER = [
  {
    id: 0,
    name: "Скидка 10%",
    value: "discount10",
  },
  {
    id: 1,
    name: "Скидка 20%",
    value: "discount20",
  },
  {
    id: 2,
    name: "Бесплатная доставка",
    value: "freeDelivery",
  },
];

const PRICEFILTER = [
  {
    id: 0,
    name: "По убыванию",
    value: "from",
  },
  {
    id: 1,
    name: "По возрастанию",
    value: "to",
  },
];

const LeadsFilters = () => {
  const [currentDateFilter, setCurrentDateFilter] = useState<{
    id: string | number;
    name: string;
    value: string;
  }>(DATAFILTERS[0]);

  const [currentLeadStatusFilter, setCurrentLeadStatusFilter] = useState<{
    id: string | number;
    name: string;
    value: string;
  }>(LEADSTATUSFILTER[0]);

  const [currentSourceFilter, setCurrentSourceFilter] = useState<{
    id: string | number;
    name: string;
    value: string;
  }>(SOURCEFILTER[0]);

  const [currentOfferFilter, setCurrentOfferFilter] = useState<{
    id: string | number;
    name: string;
    value: string;
  }>(OFFERFILTER[0]);

  const [currentPriceFilter, setCurrentPriceFilter] = useState<{
    id: string | number;
    name: string;
    value: string;
  }>(PRICEFILTER[0]);

  // Затычка на время для отслеживания изменений фильтров
  useEffect(() => {}, [
    currentDateFilter,
    currentLeadStatusFilter,
    currentSourceFilter,
    currentOfferFilter,
    currentPriceFilter,
  ]);
  return (
    <div className="flex justify-between gap-2 p-4 border-2 border-neutral rounded">
      <label className="input input-ghost input-bordered flex items-center gap-2 shadow-lg w-full max-w-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="text" className="grow" placeholder="Search" />
      </label>
      <SelectComponent
        setValue={setCurrentDateFilter}
        array={DATAFILTERS}
        title="По дате"
      />
      <SelectComponent
        setValue={setCurrentSourceFilter}
        array={SOURCEFILTER}
        title="По источнику"
      />
      <SelectComponent
        setValue={setCurrentLeadStatusFilter}
        array={LEADSTATUSFILTER}
        title="По статусу"
      />
      <SelectComponent
        setValue={setCurrentOfferFilter}
        array={OFFERFILTER}
        title="По офферу"
      />
      <SelectComponent
        setValue={setCurrentPriceFilter}
        array={PRICEFILTER}
        title="По цене"
      />
    </div>
  );
};

export default LeadsFilters;
