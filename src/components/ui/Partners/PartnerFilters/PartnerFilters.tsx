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

const STATUSFILTER = [
  {
    id: 0,
    name: "Активный",
    value: "active",
  },
  {
    id: 1,
    name: "Заблокированный",
    value: "blocked",
  },
];

const PartnerFilters = () => {
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

  const [currentStatusFilter, setCurrentStatusFilter] = useState<{
    id: string | number;
    name: string;
    value: string;
  }>(STATUSFILTER[0]);

  // затычка на время
  useEffect(() => {}, [
    currentDateFilter,
    currentLeadStatusFilter,
    currentStatusFilter,
  ]);
  return (
    <div className="flex justify-between gap-2 p-4 border-2 border-neutral rounded">
      <label className="input input-ghost input-bordered flex items-center gap-2 shadow-lg">
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
        setValue={setCurrentLeadStatusFilter}
        array={LEADSTATUSFILTER}
        title="По статусу лидов (в работе, новый, сделка)"
      />
      <SelectComponent
        setValue={setCurrentStatusFilter}
        array={STATUSFILTER}
        title="По статусу"
      />
      <div className="flex gap-4 items-center p-2 rounded-xl shadow-lg">
        <div className="flex items-center rounded-lg bg-warning/30 text-warning font-semibold btn-sm">
          Новый
        </div>
        <div className="flex items-center rounded-lg bg-accent/30 text-accent font-semibold btn-sm">
          В работе
        </div>
        <div className="flex items-center rounded-lg bg-success/30 text-success font-semibold btn-sm">
          Сделка
        </div>
        <div className="flex items-center rounded-lg bg-error/30 text-error font-semibold btn-sm">
          Отмена
        </div>
      </div>
    </div>
  );
};

export default PartnerFilters;
