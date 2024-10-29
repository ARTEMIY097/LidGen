// interface IProps = {}

import { memo } from "react";

const PaginationComponent = () => {
  return (
    <div className="join">
      <button className="join-item btn">«</button>
      <button className="join-item btn">1</button>
      <button className="join-item btn">2</button>
      <button className="join-item btn">3</button>
      <button className="join-item btn">...</button>
      <button className="join-item btn">22</button>
      <button className="join-item btn">»</button>
    </div>
  );
};

export default memo(PaginationComponent);
