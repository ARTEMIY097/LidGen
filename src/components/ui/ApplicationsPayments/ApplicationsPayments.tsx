import PaginationComponent from "../Pagination/PaginationComponent";
import PaymentAction from "../PaymentAction/PaymentAction";

const Applications = [
  {
    id: "0",
    partner: "Партнер 1",
    withdrawalAmount: 1000,
    methodOfObtaining: "Банковская карта",
    comment: "Важный комментарий к выплате",
  },
  {
    id: "1",
    partner: "Партнер 2",
    withdrawalAmount: 2000,
    methodOfObtaining: "Банковская карта",
    comment: "Обычный комментарий к выплате",
  },
  {
    id: "2",
    partner: "Партнер 3",
    withdrawalAmount: 3000,
    methodOfObtaining: "Бонусы",
    comment: "Комментарий без важности",
  },
];

const ApplicationsPayments = () => {
  return (
    <div className="overflow-x-auto flex flex-col gap-8">
      <table className="table table-lg">
        {/* head */}
        <thead className="text-neutral text-lg">
          <tr>
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
                Действие{" "}
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
                Комментарий{" "}
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
          {Applications.map((item) => (
            <tr key={item.id}>
              <td>{item.partner}</td>
              <td>{item.withdrawalAmount}</td>
              <td>{item.methodOfObtaining}</td>
              <td>
                <PaymentAction />
              </td>
              <td>{item.comment}</td>
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

export default ApplicationsPayments;
