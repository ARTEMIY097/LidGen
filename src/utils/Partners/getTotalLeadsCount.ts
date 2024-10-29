import {
  ILeadCount,
  IPartner,
} from "../../services/partners/partners.interface";

export const getTotalLeadsCount = (partners: IPartner[]): ILeadCount => {
  return partners.reduce(
    (total, partner) => {
      total.newPartner += Number(partner.leadCount.newPartner);
      total.inWorkPartner += Number(partner.leadCount.inWorkPartner);
      total.dealPartner += Number(partner.leadCount.dealPartner);
      total.canceledPartner += Number(partner.leadCount.canceledPartner);
      return total;
    },
    {
      newPartner: 0,
      inWorkPartner: 0,
      dealPartner: 0,
      canceledPartner: 0,
    }
  );
};
