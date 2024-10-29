import { FC } from "react";

interface IOfferListRowName {
  name: string;
  status: {
    name: string;
    value: string;
  };
}

const OfferListRowName: FC<IOfferListRowName> = ({ name, status }) => {
  const statusColor = (value: string) => {
    switch (value) {
      case "active":
        return "bg-success";
      case "stopped":
        return "bg-orange-600";
      default:
        return "bg-neutral-content";
    }
  };
  return (
    <div className="flex items-center gap-2">
      <span
        className={`${statusColor(status.value)} h-3 w-3 rounded-full`}
      />
      <div>{name}</div>
    </div>
  );
};

export default OfferListRowName;
