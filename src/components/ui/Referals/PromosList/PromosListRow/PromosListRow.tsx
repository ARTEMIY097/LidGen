import { FC } from "react";
import { TPromo } from "../PromosList";
import PromosListRowLink from "./PromosListRowLink";

interface IPromosListRow {
  promo: TPromo;
}

const PromosListRow: FC<IPromosListRow> = ({ promo }) => {
  return (
    <tr key={promo.id}>
      <td>{promo.name}</td>
      <td>{promo.partner}</td>
      <PromosListRowLink promo={promo.promocode} />
      <td className="text-center">
        <span className="px-4 py-2 bg-success/30 text-success rounded-lg">
          {promo.conversations}
        </span>
      </td>
      <td>{promo.expectationBalance} р.</td>
      <td>{promo.accuredBalance} р.</td>
    </tr>
  );
};

export default PromosListRow;
