import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import OfferList from "../components/ui/Referals/OfferList/OfferList";
import LinksList from "../components/ui/Referals/LinksList/LinksList";
import { LinkIcon } from "@heroicons/react/20/solid";
import PromosList from "../components/ui/Referals/PromosList/PromosList";

const tabs = [
  {
    id: "0",
    name: "Список офферов",
    panel: {
      id: "0",
      component: <OfferList />,
    },
  },
  {
    id: "1",
    name: "Ссылки",
    panel: {
      id: "1",
      component: <LinksList />,
    },
  },
  {
    id: "2",
    name: "Промокоды",
    panel: {
      id: "2",
      component: <PromosList />,
    },
  },
];

const ReferalPage = () => {
  const [parent] = useAutoAnimate();
  return (
    <div className="h-full text-neutral flex flex-col gap-4 p-4">
      <header className="p-4 border-2 border-neutral rounded">
        <h2 className=" text-2xl font-bold">Реферальная программа</h2>
      </header>
      <div className="relative w-full">
        <button className="btn btn-outline btn-primary absolute top-0 right-0">
          <LinkIcon className="size-4" /> Добавить оффер
        </button>
        <TabGroup>
          <TabList className="tabs tabs-lg tabs-bordered max-w-lg">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className="tab text-neutral outline-none font-bold data-[selected]:tab-active data-[selected]:text-primary focus:outline-none data-[focus]:outline-none duration-300"
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels ref={parent} className="mt-3">
            {tabs.map(({ panel }) => (
              <TabPanel key={panel.id}>{panel.component}</TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default ReferalPage;
