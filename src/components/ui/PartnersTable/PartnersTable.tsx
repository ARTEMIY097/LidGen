import { useContext } from "react";
import { PartnersStoreContext } from "../../../store/PartnersStore";
import PartnersCounter from "../PartnersCounter/PartnersCounter";
import PartnerTotal from "../PartnerTotal/PartnerTotal";

const PartnersTable = () => {
  const partnersStore = useContext(PartnersStoreContext);
  return (
    <div className="overflow-x-auto border-2 border-neutral rounded">
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
          {partnersStore.getPartners()?.map((partner) => (
            <tr key={partner.id}>
              <td>{partner.name}</td>
              <td>{partner.date}</td>
              <td>
                <PartnersCounter props={partner.leadCount} />
              </td>
              <td>{partner.status}</td>
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
