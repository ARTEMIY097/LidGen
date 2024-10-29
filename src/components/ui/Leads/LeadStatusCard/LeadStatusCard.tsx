import { FC } from "react";

enum EStatus {
  "new" = "Новый",
  "inWork" = "В работе",
  "deal" = "Сделка",
  "canceled" = "Отменен",
}

interface ILeadStatusCard {
  status: string;
}

const LeadStatusCard: FC<ILeadStatusCard> = ({ status }) => {
  if (status in EStatus) {
    switch (status) {
      case "new":
        return (
          <div className="bg-warning/30 text-warning font-semibold px-4 py-2 rounded-xl text-center">
            {EStatus[status as keyof typeof EStatus]}
          </div>
        );
        break;

      case "inWork":
        return (
          <div className="bg-accent/30 text-accent font-semibold px-4 py-2 rounded-xl text-center">
            {EStatus[status as keyof typeof EStatus]}
          </div>
        );
        break;
      case "deal":
        return (
          <div className="bg-success/30 text-success font-semibold px-4 py-2 rounded-xl text-center">
            {EStatus[status as keyof typeof EStatus]}
          </div>
        );
        break;
      case "canceled":
        return (
          <div className="bg-error/30 text-error font-semibold px-4 py-2 rounded-xl text-center">
            {EStatus[status as keyof typeof EStatus]}
          </div>
        );
        break;
    }
  } else {
    return <div>Invalid status</div>;
  }
};

export default LeadStatusCard;
