import { useState } from "react";

const TransactionForm = ({ setTransactionForm }) => {
  const [inputCheak, setInputCheak] = useState(null);
  const [transaction, setTransaction] = useState({
    desc: "",
    amount: 0,
    type: "experise",
  });

  const changeHandler = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTransactionForm(transaction);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center items-center p-2 py-3 w-full border border-gray-300 rounded-md space-y-2"
    >
      <div className="flex flex-col justify-center items-center space-y-2 w-full">
        <input
          className="p-1 bg-slate-200 w-3/4 border border-gray-300 rounded-md placeholder-gray-500"
          type="text"
          placeholder="Desc"
          value={transaction.desc}
          name="desc"
          onChange={changeHandler}
        />
        <input
          className="p-1 bg-slate-200 w-3/4 border border-gray-300 rounded-md placeholder-gray-500"
          type="number"
          placeholder="amount"
          value={transaction.amount}
          name="amount"
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full space-y-2 md:space-y-0 space-x-2  md:w-3/4 p-2 justify-between items-center">
        <div
          className={`w-2/4 md:w-1/4 lg:w-1/2 flex justify-center items-center space-x-2 bg-red-700 p-2 rounded-md text-white shadow-md ${
            inputCheak === "experise" && "shadow-red-500"
          }`}
        >
          <label htmlFor="experise">Experise</label>
          <input
            type="radio"
            id="experise"
            value="experise"
            checked={transaction.type === "experise"}
            name="type"
            onClick={() => {
              setInputCheak("experise");
            }}
            onChange={changeHandler}
          />
        </div>
        <div
          className={`w-2/4 md:w-1/4 lg:w-1/2 flex justify-center items-center space-x-2 bg-green-700 p-2 rounded-md text-white shadow-md ${
            inputCheak === "income" && "shadow-green-500"
          }`}
        >
          <label htmlFor="income">Income</label>
          <input
            onClick={() => {
              setInputCheak("income");
            }}
            onChange={changeHandler}
            type="radio"
            id="income"
            value="income"
            checked={transaction.type === "income"}
            name="type"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-white border border-black text-black p-1 w-1/4 rounded-md hover:bg-black hover:text-white transition-all hover:transition-all"
      >
        Add
      </button>
    </form>
  );
};

export default TransactionForm;
