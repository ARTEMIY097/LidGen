import { useContext } from "react";
import { LeadsStoreContext } from "../../../store/LeadsStore";
import LeadsTotal from "../LeadsTotal/LeadsTotal";
import LeadStatusCard from "../LeadStatusCard/LeadStatusCard";

const LeadsTable = () => {
  const leadsStore = useContext(LeadsStoreContext);
  return (
    <div className="overflow-x-auto border-2 border-neutral rounded">
      <table className="table table-lg">
        {/* head */}
        <thead className="text-neutral">
          <tr>
            <th>Клиент</th>
            <th>Дата создания</th>
            <th>Дата изменения</th>
            <th>Партнер</th>
            <th>Источник</th>
            <th>Статус</th>
            <th>Оффер</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {leadsStore.getLeads()?.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.creationDate}</td>
              <td>{lead.editDate}</td>
              <td>{lead.partner}</td>
              <td>{lead.source}</td>
              <td>{<LeadStatusCard status={lead.status} />}</td>
              <td>{lead.offer}</td>
              <td>{`${lead.totalSelling} р.`}</td>
            </tr>
          ))}
          <LeadsTotal />
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
