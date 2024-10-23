import PaginationComponent from "../components/ui/Pagination/PaginationComponent";
import PartnerFilters from "../components/ui/PartnerFilters/PartnerFilters";
import PartnersTable from "../components/ui/PartnersTable/PartnersTable";

const PartnerPage = () => {
  return (
    <div className="h-full text-neutral flex flex-col gap-4 p-4">
      <header className="p-4 border-2 border-neutral rounded">
        <h2 className="text-2xl font-bold">Партнёры</h2>
      </header>
      <PartnerFilters />
      <PartnersTable />
      <div className="flex justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default PartnerPage;
