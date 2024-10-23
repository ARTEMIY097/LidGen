import { FC } from "react";
import { ILeadCount } from "../../../services/partners/partners.interface";
import leadTotal from "../../../utils/leadTotal";

const PartnersCounter: FC<{ props: ILeadCount }> = ({ props }) => {
  return (
    <div className="flex gap-2 items-center text-sm">
      <div className="flex justify-center items-center rounded w-6 h-6 bg-warning">{props.newPartner}</div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-info">{props.inWorkPartner}</div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-success ">{props.dealPartner}</div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-error">{props.canceledPartner}</div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-neutral-content">{leadTotal(props)}</div>
    </div>
  );
};

export default PartnersCounter;
