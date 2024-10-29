import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PaymentStatistic from "../components/ui/Payment/PaymentStatistic/PaymentStatistic";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PaymentHistory from "../components/ui/Payment/PaymentHistory/PaymentHistory";
import ApplicationsPayments from "../components/ui/Payment/ApplicationsPayments/ApplicationsPayments";

const tabs = [
  {
    id: "0",
    name: "Статистика",
    panel: {
      id: "0",
      component: <PaymentStatistic />,
    },
  },
  {
    id: "1",
    name: "Заявки на выплаты",
    panel: {
      id: "1",
      component: <ApplicationsPayments />,
    },
  },
  {
    id: "2",
    name: "История выплат",
    panel: {
      id: "2",
      component: <PaymentHistory />,
    },
  },
];

const PaymentsPage = () => {
  const [parent] = useAutoAnimate();
  return (
    <div className="h-full text-neutral flex flex-col gap-4 p-4">
      <header className="p-4 border-2 border-neutral rounded">
        <h2 className=" text-2xl font-bold">Выплаты</h2>
      </header>
      <div className="w-full">
        <TabGroup>
          <TabList className="tabs tabs-lg tabs-bordered max-w-lg">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className="tab text-neutral font-bold text-nowrap outline-none data-[selected]:tab-active data-[selected]:text-primary focus:outline-none data-[focus]:outline-none duration-300"
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels ref={parent} className="mt-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-8 p-8">
                <h4 className="text-2xl font-semibold">Баланс партнеров</h4>
                <p className="text-4xl font-bold">12312312 р.</p>
                <div>
                  <button className="btn btn-sm btn-outline btn-ghost">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    обновить
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-8 p-8">
                <h4 className="text-2xl font-semibold">Выплачено</h4>
                <p className="text-4xl font-bold">12312312 р.</p>
                <div>
                  <button className="btn btn-sm btn-outline btn-ghost">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    обновить
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-8 p-8">
                <h4 className="text-2xl font-semibold">
                  Всего начислено партнерам
                </h4>
                <p className="text-4xl font-bold">12312312 р.</p>
                <div>
                  <button className="btn btn-sm btn-outline btn-ghost">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    обновить
                  </button>
                </div>
              </div>
            </div>
            {tabs.map(({ panel }) => (
              <TabPanel key={panel.id}>{panel.component}</TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default PaymentsPage;
