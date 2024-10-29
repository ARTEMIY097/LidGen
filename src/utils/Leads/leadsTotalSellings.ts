import { ILead } from "../../services/leads/leads.interface";

export const leadsTotalSellings = (leads: ILead[]): number => {
  return leads.reduce((sum, lead) => sum + parseInt(lead.totalSelling), 0);
};
