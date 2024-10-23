export interface INewLeadDto {
  id: string;
  partners: string[];
  source: string;
  creationDate: string;
  comment: string;
}

export interface ILead {
  id: string;
  name: string;
  creationDate: string;
  editDate: string;
  partner: string;
  source: string;
  status: string;
  offer: string;
  totalSelling: string;
}