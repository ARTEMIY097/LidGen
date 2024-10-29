import PaginationComponent from "../../Pagination/PaginationComponent";
import LinksListRow from "./LinksListRow/LinksListRow";

export type TLink = {
  id: string;
  name: string;
  partner: string;
  link: string;
  transitions: string;
  conversations: string;
  expectationBalance: string;
  accruedBalance: string;
};

const LINKS: TLink[] = [
  {
    id: "0",
    name: "Для Вк",
    partner: "Партнер 1",
    link: "https://vk.com/partner1",
    transitions: "12",
    conversations: "34",
    expectationBalance: "10 000",
    accruedBalance: "1 500",
  },
  {
    id: "1",
    name: "Для Инсты",
    partner: "Партнер 2",
    link: "https://vk.com/partner2",
    transitions: "15",
    conversations: "45",
    expectationBalance: "15 000",
    accruedBalance: "2 500",
  },
  {
    id: "2",
    name: "Для Телеграма",
    partner: "Партнер 3",
    link: "https://vk.com/partner3",
    transitions: "20",
    conversations: "50",
    expectationBalance: "20 000",
    accruedBalance: "3 000",
  },
];

const LinksList = () => {
  return (
    <div className="flex flex-col gap-8">
      <table className="table table-lg">
        {/* head */}
        <thead className="text-neutral text-lg">
          <tr>
            <th>
              <div className="flex items-center gap-1">
                ID{" "}
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
            <th>
              <div className="flex items-center gap-1">
                Партнер{" "}
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
            <th>Ссылка</th>
            <th className="text-center">Переходы</th>
            <th className="text-center">Конверсии</th>
            <th>Сумма в ожидании</th>
            <th>Сумма начислено</th>
          </tr>
        </thead>
        <tbody>
          {LINKS.map((link) => (
            <LinksListRow link={link} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default LinksList;
