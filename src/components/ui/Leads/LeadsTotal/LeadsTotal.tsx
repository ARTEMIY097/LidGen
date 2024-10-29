import { ILead } from "../../../../services/leads/leads.interface";
import { leadsTotalSellings } from "../../../../utils/Leads/leadsTotalSellings";

const leads: ILead[] | null = [
  {
    id: "1",
    name: "John Doe",
    creationDate: "2022-01-01",
    editDate: "2022-01-05",
    partner: "Company A",
    source: "Прямое добавление",
    status: "new",
    offer: "10% discount",
    totalSelling: "1000",
    transactions: [
      {
        id: "1",
        date: "2022-01-01",
        amount: "100",
        status: {
          name: "Успешно",
          value: "success",
        },
      },
      {
        id: "2",
        date: "2022-01-02",
        amount: "200",
        status: {
          name: "Отменено",
          value: "cancelled",
        },
      },
      {
        id: "3",
        date: "2022-01-03",
        amount: "300",
        status: {
          name: "Отменено",
          value: "cancelled",
        },
      },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    creationDate: "2022-01-02",
    editDate: "2022-01-07",
    partner: "Company B",
    source: "Реферальные ссылки",
    status: "inWork",
    offer: "5% discount",
    totalSelling: "2000",
    transactions:[
      {
        id: "1",
        date: "2022-01-01",
        amount: "2000",
        status: {
          name: "Успешно",
          value: "success",
        },
      }
    ]
  },
];

const LeadsTotal = () => {
  return (
    <tr>
      <td className=" text-xl font-bold">Итого</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{`${leadsTotalSellings(leads)} р.`}</td>
    </tr>
  );
};

export default LeadsTotal;
