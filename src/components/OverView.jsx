const OverView = ({ expense, income }) => {
  return (
    <div className=" w-full flex flex-row justify-between space-x-4">
      <div className="flex flex-col space-y-2 border rounded-md border-gray-300 p-2 w-1/2">
        <p className="text-gray-500">Expense</p>
        <span className="font-bold text-red-600 text-lg">${expense}</span>
      </div>
      <div className="flex flex-col space-y-2 border rounded-md border-gray-300 p-2 w-1/2">
        <p className="text-gray-500">Income</p>
        <span className="font-bold text-green-600 text-lg">${income}</span>
      </div>
    </div>
  );
};

export default OverView;
