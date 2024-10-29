import { useEffect, useState } from "react";
import LeadsTotal from "../LeadsTotal/LeadsTotal";
import LeadsTableRow from "./LeadsTableRow";
import LeadEditModal from "../../../modals/LeadEditModal/LeadEditModal";
import { ILead } from "../../../../services/leads/leads.interface";

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
    totalSelling: "150",
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
        amount: "50",
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
    totalSelling: "350",
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
        amount: "50",
        status: {
          name: "Отменено",
          value: "cancelled",
        },
      },
      {
        id: "3",
        date: "2022-01-03",
        amount: "200",
        status: {
          name: "Отменено",
          value: "cancelled",
        },
      },
    ],
  },
];

const LeadsTable = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLead, setSelectedLead] = useState<ILead | null>(null);
  useEffect(() => {
    if (selectedLead) setIsOpen(true);
  }, [selectedLead]);
  return (
    <>
      <div className="border-2 border-neutral rounded">
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
            {leads?.map((lead) => (
              <LeadsTableRow lead={lead} setSelectedLead={setSelectedLead} />
            ))}
            <LeadsTotal />
          </tbody>
        </table>
      </div>
      {isOpen && selectedLead && (
        <LeadEditModal
          lead={selectedLead}
          setSelectedLead={setSelectedLead}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default LeadsTable;
