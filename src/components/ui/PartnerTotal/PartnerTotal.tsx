import { useContext } from "react";
import { PartnersStoreContext } from "../../../store/PartnersStore";
import PartnersCounter from "../PartnersCounter/PartnersCounter";

const PartnerTotal = () => {
  const partnerStore = useContext(PartnersStoreContext);
  return (
    <tr>
      <td className=" text-xl font-bold">Итого</td>
      <td></td>
      <td>
        <PartnersCounter props={partnerStore.getTotalLeadCount()} />
      </td>
      <td></td>
      <td>{`${partnerStore.getTotalReward()} р.`}</td>
      <td>{`${partnerStore.getTotalBalance()} р.`}</td>
    </tr>
  );
};

export default PartnerTotal;
