import PartnersCounter from "../PartnersCounter/PartnersCounter";
import PartnerTotal from "../PartnerTotal/PartnerTotal";
import { IPartner } from "../../../../services/partners/partners.interface";

const partners: IPartner[] | null = [
  {
    id: 0,
    name: "Иван Алексеев",
    date: "12.06.2024",
    leadCount: {
      newPartner: "3",
      inWorkPartner: "5",
      dealPartner: "2",
      canceledPartner: "1",
    },
    status: {
      name: "Активный",
      value: "active",
    },
    totalReward: "10 600",
    balance: "0",
  },
  {
    id: 1,
    name: "Петр Иванов",
    date: "15.07.2024",
    leadCount: {
      newPartner: "2",
      inWorkPartner: "4",
      dealPartner: "3",
      canceledPartner: "0",
    },
    status: {
      name: "Активный",
      value: "active",
    },
    totalReward: "5 200",
    balance: "1 000",
  },
  {
    id: 2,
    name: "Александр Сергеев",
    date: "20.08.2024",
    leadCount: {
      newPartner: "1",
      inWorkPartner: "3",
      dealPartner: "1",
      canceledPartner: "2",
    },
    status: {
      name: "Активный",
      value: "active",
    },
    totalReward: "20 000",
    balance: "5 000",
  },
  {
    id: 3,
    name: "Михаил Михайлов",
    date: "25.09.2024",
    leadCount: {
      newPartner: "4",
      inWorkPartner: "6",
      dealPartner: "2",
      canceledPartner: "1",
    },
    status: {
      name: "Активный",
      value: "active",
    },
    totalReward: "12 000",
    balance: "2 000",
  },
  {
    id: 4,
    name: "Николай Николаев",
    date: "30.10.2024",
    leadCount: {
      newPartner: "3",
      inWorkPartner: "5",
      dealPartner: "1",
      canceledPartner: "0",
    },
    status: {
      name: "Активный",
      value: "active",
    },
    totalReward: "6 000",
    balance: "1 500",
  },
  {
    id: 5,
    name: "Дмитрий Дмитриев",
    date: "05.11.2024",
    leadCount: {
      newPartner: "2",
      inWorkPartner: "4",
      dealPartner: "3",
      canceledPartner: "1",
    },
    status: {
      name: "Активный",
      value: "active",
    },
    totalReward: "25 000",
    balance: "6 000",
  },
  {
    id: 6,
    name: "Сергей Сергеевич",
    date: "10.12.2024",
    leadCount: {
      newPartner: "5",
      inWorkPartner: "7",
      dealPartner: "2",
      canceledPartner: "0",
    },
    status: {
      name: "Заблокированный",
      value: "blocked",
    },
    totalReward: "15 000",
    balance: "3 000",
  },
  {
    id: 7,
    name: "Алексей Алексеев",
    date: "15.01.2025",
    leadCount: {
      newPartner: "4",
      inWorkPartner: "6",
      dealPartner: "1",
      canceledPartner: "1",
    },
    status: {
      name: "Активный",
      value: "active",
    },
    totalReward: "8 000",
    balance: "2 000",
  },
];

const PartnersTable = () => {
  return (
    <div className="border-2 border-neutral rounded">
      <table className="table table-lg">
        {/* head */}
        <thead className="text-neutral">
          <tr>
            <th>Партнёр</th>
            <th>Дата регистрации</th>
            <th>Количество лидов</th>
            <th>Статус</th>
            <th>Общее вознаграждение</th>
            <th>Баланс</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner.id}>
              <td>{partner.name}</td>
              <td>{partner.date}</td>
              <td>
                <PartnersCounter props={partner.leadCount} />
              </td>
              <td>{partner.status.name}</td>
              <td>{`${partner.totalReward} р.`}</td>
              <td>{`${partner.balance} р.`}</td>
            </tr>
          ))}
          <PartnerTotal />
        </tbody>
      </table>
    </div>
  );
};

export default PartnersTable;
