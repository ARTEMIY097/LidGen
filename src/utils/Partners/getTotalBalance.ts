import { IPartner } from "../../services/partners/partners.interface";

export const getTotalBalance = (
  partners: IPartner[]
): number | string | null | undefined => {
  return partners.reduce(
    (total, partner) => total + parseInt(partner.balance.replace(/\s/g, "")),
    0
  );
};
