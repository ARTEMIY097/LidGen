import { FC } from "react";
import { TLink } from "../LinksList";
import LinkListRowLink from "./LinkListRowLink";

interface ILinksListRow {
  link: TLink;
}

const LinksListRow: FC<ILinksListRow> = ({ link }) => {
  return (
    <tr key={link.id}>
      <td>{link.id}</td>
      <td>{link.name}</td>
      <td>{link.partner}</td>
      <LinkListRowLink link={link.link} />
      <td className="text-center">{link.transitions}</td>
      <td className="text-center">
        <span className="px-4 py-2 bg-success/30 text-success rounded-lg">
          {link.conversations}
        </span>
      </td>
      <td>{link.expectationBalance} р.</td>
      <td>{link.accruedBalance} р.</td>
    </tr>
  );
};

export default LinksListRow;
