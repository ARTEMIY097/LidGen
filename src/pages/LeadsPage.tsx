import AddNewLeadModal from "../components/modals/AddNewLeadModal/AddNewLeadModal";
import LeadsFilters from "../components/ui/Leads/LeadsFilters/LeadsFilters";
import LeadsTable from "../components/ui/Leads/LeadsTable/LeadsTable";
import PaginationComponent from "../components/ui/Pagination/PaginationComponent";

const LeadsPage = () => {
  return (
    <div className="h-full text-neutral flex flex-col gap-4 p-4">
      <header className="flex justify-between items-center p-4 border-2 border-neutral rounded">
        <h2 className=" text-2xl font-bold">Лиды и продажи</h2>
        <AddNewLeadModal />
      </header>
      <LeadsFilters />
      <LeadsTable />
      <div className="flex justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default LeadsPage;
