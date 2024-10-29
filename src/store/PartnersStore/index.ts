// import { createContext } from "react";
// import {
//   ILeadCount,
//   IPartner,
// } from "../../services/partners/partners.interface";
// import { makeAutoObservable } from "mobx";
// import { clearPersistedStore, makePersistable, startPersisting, stopPersisting } from "mobx-persist-store";

// class PartnersStore {
//   partners: IPartner[] | null = [
//     {
//       id: 0,
//       name: "Иван Алексеев",
//       date: "12.06.2024",
//       leadCount: {
//         newPartner: "3",
//         inWorkPartner: "5",
//         dealPartner: "2",
//         canceledPartner: "1",
//       },
//       status: "Silver",
//       totalReward: "10 600",
//       balance: "0",
//     },
//     {
//       id: 1,
//       name: "Петр Иванов",
//       date: "15.07.2024",
//       leadCount: {
//         newPartner: "2",
//         inWorkPartner: "4",
//         dealPartner: "3",
//         canceledPartner: "0",
//       },
//       status: "Bronze",
//       totalReward: "5 200",
//       balance: "1 000",
//     },
//     {
//       id: 2,
//       name: "Александр Сергеев",
//       date: "20.08.2024",
//       leadCount: {
//         newPartner: "1",
//         inWorkPartner: "3",
//         dealPartner: "1",
//         canceledPartner: "2",
//       },
//       status: "Gold",
//       totalReward: "20 000",
//       balance: "5 000",
//     },
//     {
//       id: 3,
//       name: "Михаил Михайлов",
//       date: "25.09.2024",
//       leadCount: {
//         newPartner: "4",
//         inWorkPartner: "6",
//         dealPartner: "2",
//         canceledPartner: "1",
//       },
//       status: "Silver",
//       totalReward: "12 000",
//       balance: "2 000",
//     },
//     {
//       id: 4,
//       name: "Николай Николаев",
//       date: "30.10.2024",
//       leadCount: {
//         newPartner: "3",
//         inWorkPartner: "5",
//         dealPartner: "1",
//         canceledPartner: "0",
//       },
//       status: "Bronze",
//       totalReward: "6 000",
//       balance: "1 500",
//     },
//     {
//       id: 5,
//       name: "Дмитрий Дмитриев",
//       date: "05.11.2024",
//       leadCount: {
//         newPartner: "2",
//         inWorkPartner: "4",
//         dealPartner: "3",
//         canceledPartner: "1",
//       },
//       status: "Gold",
//       totalReward: "25 000",
//       balance: "6 000",
//     },
//     {
//       id: 6,
//       name: "Сергей Сергеевич",
//       date: "10.12.2024",
//       leadCount: {
//         newPartner: "5",
//         inWorkPartner: "7",
//         dealPartner: "2",
//         canceledPartner: "0",
//       },
//       status: "Silver",
//       totalReward: "15 000",
//       balance: "3 000",
//     },
//     {
//       id: 7,
//       name: "Алексей Алексеев",
//       date: "15.01.2025",
//       leadCount: {
//         newPartner: "4",
//         inWorkPartner: "6",
//         dealPartner: "1",
//         canceledPartner: "1",
//       },
//       status: "Bronze",
//       totalReward: "8 000",
//       balance: "2 000",
//     },
//   ];

//   constructor() {
//     makeAutoObservable(this);

//     makePersistable(this, {
//       name: "PartnersStore",
//       properties: ["partners"],
//       storage: window.localStorage,
//     });
//   }

//   setPartners(newPartners: IPartner[] | null): void {
//     this.partners = newPartners;
//   }
//   updatePartner(updatedPartner: IPartner): void {
//     const partnerIndex = this.partners?.findIndex(
//       (partner) => partner.id === updatedPartner.id
//     );
//     if (partnerIndex && partnerIndex !== -1) {
//       this.partners![partnerIndex] = updatedPartner;
//     }
//   }

//   addPartner(newPartners: IPartner): void {
//     this.partners?.push(newPartners);
//   }

//   getPartnersById(id: number): IPartner | undefined {
//     return this.partners?.find((partner) => partner.id === id);
//   }

//   getPartners(): IPartner[] | null {
//     return this.partners;
//   }

//   async clearStore() {
//     await clearPersistedStore(this);
//   }

//   stopPersist() {
//     stopPersisting(this);
//   }

//   startPersist() {
//     startPersisting(this);
//   }
// }

// export const partnersStore = new PartnersStore();
// export const PartnersStoreContext = createContext(partnersStore);
