import { FC } from "react";
import { TOffer } from "../OfferList";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import OfferListRowName from "./OfferListRowName";

interface IOfferListRow {
  offer: TOffer;
}

const OfferListRow: FC<IOfferListRow> = ({ offer }) => {
  return (
    <tr
      className={`${offer.status.value === "preparation" && " opacity-50"}`}
      key={offer.id}
    >
      <td>
        <OfferListRowName name={offer.name} status={offer.status} />
      </td>
      <td className="text-right">{offer.id}</td>
      <td>{offer.status.name}</td>
      <td className="text-primary">
        <a href={offer.link} target="_blank" rel="noopener noreferrer">
          {offer.link.slice(0, 20)}...
        </a>
      </td>
      <td className="text-center">
        <span className="px-4 py-2 bg-success/30 text-success rounded-lg">
          {offer.partners}
        </span>
      </td>
      <td className="text-center">
        <span className="px-4 py-2 bg-success/30 text-success rounded-lg">
          {offer.convercations}{" "}
        </span>
      </td>
      <td className="flex gap-2 items-center">
        <div>{offer.totalBalance} р.</div>
        <div className="dropdown drop-shadow-sm dropdown-bottom dropdown-end">
          <div
            role="button"
            tabIndex={0}
            className="btn btn-ghost btn-sm btn-circle m-1"
          >
            <EllipsisHorizontalIcon className="size-6" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-neutral rounded-box z-10 p-2 shadow"
          >
            <li>
              <button className="btn btn-sm btn-ghost text-error">
                Удалено
              </button>
            </li>
            <li>
              <button className="btn btn-sm btn-ghost text-neutral-content">
                Подготовка
              </button>
            </li>
            <li>
              <button className="btn btn-sm btn-ghost text-neutral-content">
                Приостановлено
              </button>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default OfferListRow;
