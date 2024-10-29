import { IPartner } from "../../services/partners/partners.interface";

export const getTotalReward = (
  partners: IPartner[]
): number | string | null | undefined => {
  return partners.reduce(
    (total, partner) =>
      total + parseInt(partner.totalReward.replace(/\s/g, "")),
    0
  );
};
