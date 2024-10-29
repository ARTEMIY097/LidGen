import { FC } from "react";
import { ILead } from "../../../../services/leads/leads.interface";
import LeadStatusCard from "../LeadStatusCard/LeadStatusCard";

type TLeadsTableRow = {
  lead: ILead
  setSelectedLead: (lead: ILead) => void;
}

const LeadsTableRow:FC<TLeadsTableRow> = ({lead, setSelectedLead}) => {
  return (
    <tr key={lead.id}>
      <td className="cursor-pointer" onClick={() => setSelectedLead(lead)}>{lead.name}</td>
      <td>{lead.creationDate}</td>
      <td>{lead.editDate}</td>
      <td>{lead.partner}</td>
      <td>{lead.source}</td>
      <td>{<LeadStatusCard status={lead.status} />}</td>
      <td>{lead.offer}</td>
      <td>{`${lead.totalSelling} р.`}</td>
    </tr>
  );
};

export default LeadsTableRow;
