import { useEffect, useState } from "react";

const Transactions = (props) => {
  const [serachValue, setSearchValue] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(props.transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(props.transactions);
      return;
    }
    setFilteredTnx(
      props.transactions.filter((t) =>
        t.desc.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(serachValue);
  }, [props.transactions]);

  return (
    <div className="flex flex-col space-y-2 w-full">
      <h2 className="font-bold text-lg">Transactions</h2>
      <input
        className="bg-gray-300 rounded-md p-1 px-2 placeholder-slate-500"
        type="text"
        placeholder="Search"
        value={serachValue}
        onChange={changeHandler}
      />
      <div className="flex flex-col space-y-3">
        {filteredTnx.map((transaction) => (
          <div
            className={`border border-gray-300 border-r-4 ${
              transaction.type === "income"
                ? "border-r-green-600"
                : "border-r-red-600"
            } rounded-md p-2 flex flex-row justify-between`}
          >
            <span>{transaction.desc}</span>
            <span>${transaction.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
