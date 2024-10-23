import PaginationComponent from "../Pagination/PaginationComponent";
import PaymentStatus from "../PaymentStatus/PaymentStatus";

const Payments = [
  {
    id: "0",
    date: "04.07.2024",
    partner: "Партнер 1",
    amount: "1 500",
    method: "Банковская карта",
    result: true,
  },
  {
    id: "1",
    date: "03.07.2024",
    partner: "Партнер 2",
    amount: "2 500",
    method: "Банковская карта",
    result: true,
  },
  {
    id: "2",
    date: "02.07.2024",
    partner: "Партнер 3",
    amount: "3 500",
    method: "Банковская карта",
    result: false,
  },
  {
    id: "3",
    date: "01.07.2024",
    partner: "Партнер 4",
    amount: "4 500",
    method: "Банковская карта",
    result: true,
  },
];

const PaymentHistory = () => {
  return (
    <div className="overflow-x-auto flex flex-col gap-8">
      <table className="table table-lg">
        {/* head */}
        <thead className="text-neutral text-lg">
          <tr>
            <th>
              <div className="flex items-center gap-1">
                Дата{" "}
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
                Партнёр{" "}
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
                Сумма вывода{" "}
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
                Способ получения{" "}
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
                Результат{" "}
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
          </tr>
        </thead>
        <tbody>
          {Payments.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.partner}</td>
              <td>{`${item.amount} р.`}</td>
              <td>{item.method}</td>
              <td>
                <PaymentStatus status={item.result} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default PaymentHistory;
