import { FC } from "react";
import { ILeadCount } from "../../../../services/partners/partners.interface";
import { leadTotalCount } from "../../../../utils/Leads/leadTotalCount";

const PartnersCounter: FC<{ props: ILeadCount }> = ({ props }) => {
  return (
    <div className="flex gap-2 items-center text-sm">
      <div className="flex justify-center items-center rounded w-6 h-6 bg-warning/30 text-warning font-semibold">
        {props.newPartner}
      </div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-info/30 text-info font-semibold">
        {props.inWorkPartner}
      </div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-success/30 text-success font-semibold">
        {props.dealPartner}
      </div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-error/30 text-error font-semibold">
        {props.canceledPartner}
      </div>
      <div className="flex justify-center items-center rounded w-6 h-6 bg-neutral-content/30 text-neutral-content font-semibold">
        {leadTotalCount(props)}
      </div>
    </div>
  );
};

export default PartnersCounter;
