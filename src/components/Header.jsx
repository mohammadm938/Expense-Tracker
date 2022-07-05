import { Fragment, useState } from "react";
import TransactionForm from "./TransactionForm";

const Header = ({ expense, income, setTransactionForm }) => {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <Fragment>
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-row font-bold  space-x-2">
          <p>Balance:</p>
          <span>${income - expense}</span>
        </div>
        <button
          onClick={() => setIsAdd(!isAdd)}
          className="bg-slate-900 text-white p-1 text-sm w-16 rounded-md font-bold"
        >
          {isAdd ? "Cancel" : "ADD"}
        </button>
      </div>
      {isAdd && <TransactionForm setTransactionForm={setTransactionForm} />}
    </Fragment>
  );
};

export default Header;
