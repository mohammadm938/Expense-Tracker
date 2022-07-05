import { useEffect, useState } from "react";
import Header from "./Header";
import OverView from "./OverView";
import Transactions from "./Transactions";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transactions.forEach((t) => {
      t.type === "income"
        ? (inc += parseFloat(t.amount))
        : (exp += parseFloat(t.amount));
    });
    setIncome(inc);
    setExpense(exp);
  }, [transactions]);

  const setTransactionForm = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  return (
    <div className="flex flex-col space-y-4 items-center w-full lg:w-2/6 xl:w-1/4 mt-5 mb-5 p-2 px-4  ">
      <header className="flex justify-center items-center font-bold text-xl">
        <h2>Expense Tracker</h2>
      </header>

      <section className=" px-2 flex flex-col space-y-6 w-full items-center justify-center">
        <Header
          expense={expense}
          income={income}
          setTransactionForm={setTransactionForm}
        />
        <OverView expense={expense} income={income} />
        <Transactions transactions={transactions} />
      </section>
    </div>
  );
};

export default ExpenseApp;
