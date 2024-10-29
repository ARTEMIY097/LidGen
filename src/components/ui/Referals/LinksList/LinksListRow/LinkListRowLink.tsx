import { DocumentDuplicateIcon, QrCodeIcon } from "@heroicons/react/20/solid";
import copyToClipboard from "../../../../../utils/Referals/copyToClipboard";

const LinkListRowLink = ({ link }: { link: string }) => {
  return (
    <td className="flex items-center gap-2 text-primary">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link.slice(0, 20)}...
      </a>
      <button
        onClick={() => copyToClipboard(link)}
        className="btn btn-sm btn-circle btn-ghost"
      >
        <DocumentDuplicateIcon className="size-6" />
      </button>
      <button
        onClick={() => copyToClipboard(link)}
        className="btn btn-sm btn-circle btn-ghost"
      >
        <QrCodeIcon className="size-6" />
      </button>
    </td>
  );
};

export default LinkListRowLink;
