import { FC } from "react";
import { ILead } from "../../../services/leads/leads.interface";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import LeadStatusCard from "../../ui/Leads/LeadStatusCard/LeadStatusCard";
import PaginationComponent from "../../ui/Pagination/PaginationComponent";

type TLeadEditModal = {
  lead: ILead;
  setSelectedLead: (lead: ILead | null) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const LeadEditModal: FC<TLeadEditModal> = ({
  lead,
  setSelectedLead,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Dialog
      key={lead.id}
      transition
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        setSelectedLead(null);
      }}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 backdrop-blur-lg" />
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel
          transition
          className="modal-box min-w-96 flex flex-col space-y-4"
        >
          <button
            onClick={() => {
              setIsOpen(false);
              setSelectedLead(null);
            }}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <DialogTitle className="font-bold text-2xl">{lead.name}</DialogTitle>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4>Дата создания:</h4>
              <div>{lead.creationDate}</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-ghost btn-circle">
                <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
              </button>
              <button className="btn btn-ghost btn-circle">
                <PencilSquareIcon className="size-6" />
              </button>
              <button className="btn btn-ghost btn-circle">
                <TrashIcon className="size-6" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <LeadStatusCard status={lead.status} />
              <button className="btn btn-ghost btn-circle">
                <PencilSquareIcon className="size-6" />
              </button>
              <button className="btn btn-ghost btn-circle">
                <ChartBarIcon className="size-6" />
              </button>
            </div>
            <div>{lead.totalSelling} р.</div>
          </div>
          <div className="flex justify-between items-center">
            <h3 className=" text-xl font-bold">Транзакции</h3>
            <button className="btn btn-primary">
              <PlusIcon className="size-6" />
              Добавить
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Дата</th>
                <th>ID транзакции</th>
                <th>Статус</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {lead.transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.id}</td>
                  <td>{transaction.status.name}</td>
                  <td>{transaction.amount} р.</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
            <PaginationComponent />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default LeadEditModal;
