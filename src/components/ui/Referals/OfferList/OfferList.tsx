import { ChevronDownIcon } from "@heroicons/react/20/solid";
import PaginationComponent from "../../Pagination/PaginationComponent";
import { memo } from "react";
import OfferListRow from "./OfferListRow/OfferListRow";

export type TOffer = {
  id: string;
  name: string;
  status: {
    name: string;
    value: string;
  };
  link: string;
  partners: string;
  convercations: string;
  totalBalance: string;
};

const OFFERS: TOffer[] = [
  {
    id: "0",
    name: "Лучшая ветклиника",
    status: {
      name: "Активно",
      value: "active",
    },
    link: "https://www.example.com/vetclinic",
    partners: "5",
    convercations: "123",
    totalBalance: "123 209",
  },
  {
    id: "1",
    name: "Лучшая ветренная клиника",
    status: {
      name: "Приостановлен",
      value: "stopped",
    },
    link: "https://www.example.com/vetclinic",
    partners: "3",
    convercations: "123",
    totalBalance: "123 209",
  },
  {
    id: "2",
    name: "Лучший медицинский центр",
    status: {
      name: "Подготовка",
      value: "preparation",
    },
    link: "https://www.example.com/vetclinic",
    partners: "2",
    convercations: "123",
    totalBalance: "123 209",
  },
  {
    id: "3",
    name: "Лучший диагностический центр",
    status: {
      name: "Активно",
      value: "active",
    },
    link: "https://www.example.com/vetclinic",
    partners: "1",
    convercations: "123",
    totalBalance: "123 209",
  },
];

const OfferList = () => {
  return (
    <div className="flex flex-col gap-8">
      <table className="table table-lg">
        {/* head */}
        <thead className="text-neutral text-lg">
          <tr>
            <th>
              <div className="flex items-center gap-1">
                Название оффера{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </th>
            <th>
              <div className="text-right">ID/extID</div>
            </th>
            <th>
              <div className="flex items-center gap-1">
                Статус <ChevronDownIcon className="size-6" />
              </div>
            </th>
            <th>
              <div>Посадочная страница</div>
            </th>
            <th className="text-center">Партнеры с активным оффером</th>
            <th className="text-center">Конверсии</th>
            <th>
              <div>Сумма</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {OFFERS.map((offer) => (
            <OfferListRow offer={offer} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default memo(OfferList);
