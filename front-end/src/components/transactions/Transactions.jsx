import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Table } from 'reactstrap';
import { GET_TRANSACTIONS, GET_TRANSACTION } from './queries.graphql';

const Transactions = React.memo(() => {
  let searchValue = '';
  const [transactionId, setTransactionId] = useState('');
  const { loadingTransaction, error: transactionError, data: transactionData } = useQuery(GET_TRANSACTION, {
    variables: { id: transactionId },
  });
  const { loadingTransactions, data: transactionsData } = useQuery(GET_TRANSACTIONS);

  const handleSearchInputChanges = event => {
    searchValue = event.target.value;
  };

  const findTransaction = () => {
    setTransactionId(searchValue);
  };

  return (
    <>
      <section>
        <input
          style={{ width: 300 }}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Type transaction ID to search the transaction"
        />
        <button type="button" onClick={findTransaction}>
          Search
        </button>
        {loadingTransaction && 'Searching for a transaction...'}
        <div>{transactionError && transactionId && `Missing transaction with ID "${transactionId}"`}</div>
        {!loadingTransaction && !transactionError && transactionData && transactionData.transaction && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product ID</th>
                <th>User ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{transactionData.transaction.id}</td>
                <td>{transactionData.transaction.product_id}</td>
                <td>{transactionData.transaction.user_id}</td>
                <td>{transactionData.transaction.timestamp}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </section>
      <hr />
      <section>
        {loadingTransactions && 'Loading transactions...'}
        {!loadingTransactions && transactionsData.transactions && transactionsData.transactions.length > 0 && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product ID</th>
                <th>User ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.product_id}</td>
                  <td>{transaction.user_id}</td>
                  <td>{transaction.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </>
  );
});

export default Transactions;
