const create = (
  transactions,
  successfullTransactions,
  volumeOfTransactions
) => {
  return `
    <div>
    <h1>Daily Transaction Report ${new Date().toDateString()}</h1>
    <ul style="list-style:none">
    <li> No. of transaction - ${transactions} </li>
    <li> No. of successfull transactions - ${successfullTransactions}
    <li> Volume of Transactions - ${volumeOfTransactions} 
    </ul>

    `;
};

module.exports.create = create;
