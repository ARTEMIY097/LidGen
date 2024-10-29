import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import PaginationComponent from "../../Pagination/PaginationComponent";
import PromosListRow from "./PromosListRow/PromosListRow";

export type TPromo = {
  id: string;
  name: string;
  partner: string;
  promocode: string;
  conversations: string;
  expectationBalance: string;
  accuredBalance: string;
};

const PROMOS: TPromo[] = [
  {
    id: "0",
    name: "Промокод 1",
    partner: "Продавец 1",
    promocode: "PROMO1",
    conversations: "12",
    expectationBalance: "1000",
    accuredBalance: "500",
  },
  {
    id: "1",
    name: "Промокод 2",
    partner: "Продавец 2",
    promocode: "PROMO2",
    conversations: "20",
    expectationBalance: "2000",
    accuredBalance: "1000",
  },
  {
    id: "2",
    name: "Промокод 3",
    partner: "Продавец 3",
    promocode: "PROMO3",
    conversations: "30",
    expectationBalance: "3000",
    accuredBalance: "1500",
  },
];

const PromosList = () => {
  return (
    <div className="relative flex flex-col gap-8">
      <div className="flex items-center gap-4 p-4">
        <h3 className="text-3xl font-bold">Список промокодов</h3>
        <button className="btn btn-ghost btn-circle">
          <Cog6ToothIcon className="size-6" />
        </button>
      </div>
      <table className="table table-lg">
        {/* head */}
        <thead className="text-neutral text-lg">
          <tr>
            <th>
              <div className="flex items-center gap-1">
                Название{" "}
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
            <th>Партнер</th>
            <th>Промокоды</th>
            <th className="text-center">Конверсии</th>
            <th>Сумма в ожидании</th>
            <th>Сумма начислено</th>
          </tr>
        </thead>
        <tbody>
          {PROMOS.map((promo) => (
            <PromosListRow promo={promo} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default PromosList;
