export interface IPartner {
  id: string | number;
  name: string;
  date: string;
  leadCount: ILeadCount;
  status: {
    name: string;
    value: string;
  };
  totalReward: string;
  balance: string;
}

export interface ILeadCount {
  newPartner: string | number;
  inWorkPartner: string | number;
  dealPartner: string | number;
  canceledPartner: string | number;
}
