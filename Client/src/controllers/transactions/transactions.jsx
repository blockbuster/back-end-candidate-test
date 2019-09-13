import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AppBar from '../../components/appBar';
import { TRANSACTIONS } from './transactions.graph';

const Transactions = () => {
  const { loading, error, data } = useQuery(TRANSACTIONS);

  const getPrograms = (id) => {
    console.log(id)
  }

  const getHeaders = (data) => {
    console.log(data)
    return Object.keys(data.transactions[0]).filter(key => key !== '__typename');
  }
  return (
    <div className="transactions">
      <AppBar />
      <div> {loading ? (<div>loading...</div>) : null}
        {error ? (<div>Something went wrong fetching your data!</div>) : null}
        {data ? (
          <div>
            <Table stickyHeader style={{ marginTop: "30px" }}>
              <TableHead>
                <TableRow>
                  {getHeaders(data).map(key => (
                    <TableCell
                      key={key}
                      style={{ align: "left" }}
                    >
                      {key !== '__typename' ? key : null}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.transactions.map(transaction => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={transaction.id} onClick={() => getPrograms(transaction.id)} style={{ cursor: "pointer" }}>
                    <Link
                      to={`/transactions/${transaction.id}`}
                      style={{ textDecoration: 'none' }}
                    >{getHeaders(data).map(key => (
                      <TableCell key={key} style={{ align: "left" }}>
                        {transaction[key]}
                      </TableCell>
                    ))}</Link>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Transactions;