import { DocumentDuplicateIcon } from "@heroicons/react/20/solid";
import copyToClipboard from "../../../../../utils/Referals/copyToClipboard";

const PromosListRowLink = ({ promo }: { promo: string }) => {
  return (
    <td className="flex items-center gap-2 text-primary">
      <div>{promo}</div>
      <button
        onClick={() => copyToClipboard(promo)}
        className="btn btn-sm btn-circle btn-ghost"
      >
        <DocumentDuplicateIcon className="size-6" />
      </button>
    </td>
  );
};

export default PromosListRowLink;
