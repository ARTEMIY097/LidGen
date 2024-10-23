import { makeAutoObservable } from "mobx";
import { ILead } from "../../services/leads/leads.interface";
import { clearPersistedStore, makePersistable, startPersisting, stopPersisting } from "mobx-persist-store";
import { createContext } from "react";

class LeadsStore {
  leads: ILead[] | null = [
    {
      id: "1",
      name: "John Doe",
      creationDate: "2022-01-01",
      editDate: "2022-01-05",
      partner: "Company A",
      source: "Прямое добавление",
      status: "new",
      offer: "10% discount",
      totalSelling: "1000",
    },
    {
      id: "2",
      name: "Jane Smith",
      creationDate: "2022-01-02",
      editDate: "2022-01-07",
      partner: "Company B",
      source: "Реферальные ссылки",
      status: "inWork",
      offer: "5% discount",
      totalSelling: "2000",
    },
  ];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "LeadsStore",
      properties: ["leads"],
      storage: window.localStorage,
    });
  }

  setLeads(newLeads: ILead[] | null): void {
    this.leads = newLeads;
  }
  addLead(lead: ILead): void {
    this.leads?.push(lead);
  }
  getLeads(): ILead[] | null {
    return this.leads;
  }
  getTotalSelling(): number {
    return this.leads?.reduce(
      (sum, lead) => sum + parseInt(lead.totalSelling),
      0
    );
  }

  async clearStore() {
    await clearPersistedStore(this);
  }

  stopPersist() {
    stopPersisting(this);
  }

  startPersist() {
    startPersisting(this);
  }
}

export const leadsStore = new LeadsStore();
export const LeadsStoreContext = createContext(leadsStore);
