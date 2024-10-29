import { ILeadCount } from "../../services/partners/partners.interface";

export const leadTotalCount = (leadCount: ILeadCount): number => {
  const total = Object.values(leadCount).reduce((acc, value) => {
    const numericValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return acc + numericValue;
  }, 0);

  return total;
}
