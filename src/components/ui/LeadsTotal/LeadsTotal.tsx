import { useContext } from "react";
import { LeadsStoreContext } from "../../../store/LeadsStore";

const LeadsTotal = () => {
  const leadsStore = useContext(LeadsStoreContext);
  return (
    <tr>
      <td className=" text-xl font-bold">Итого</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{`${leadsStore.getTotalSelling()} р.`}</td>
    </tr>
  );
};

export default LeadsTotal;
