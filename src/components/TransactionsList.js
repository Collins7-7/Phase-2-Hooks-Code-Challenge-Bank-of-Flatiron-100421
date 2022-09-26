import React from "react";
import Transaction from "./Transaction";

function TransactionsList({handleDeleting,theTransactions }) {
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Remove</h3>
          </th>
        </tr>
        {theTransactions.map((oneTransaction)=>{
            return <Transaction date={oneTransaction.date}  description={oneTransaction.description} amount={oneTransaction.amount} category={oneTransaction.category} id={oneTransaction.id} key={oneTransaction.id}  onDeleteKey={handleDeleting}></Transaction>
          })
        }
        
      </tbody>
    </table>
  );
}

export default TransactionsList;