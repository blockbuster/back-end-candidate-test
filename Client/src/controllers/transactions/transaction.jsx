import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AppBar from '../../components/appBar';
import { TRANSACTION } from './transactions.graph';

const Transaction = () => {
  const transactionId = window.location.pathname.split('/')[2];
  console.log(transactionId)
  const { loading, error, data } = useQuery(TRANSACTION, {
    variables: { id:  transactionId}
  });

  return (
    <div className="program">
      <AppBar />
      <div> {loading ? (<div>loading...</div>) : null}
      {error ? (<div>Something went wrong fetching your data!</div>) : null}
        {data ? (
          <Card style={{ width: "50%", textAlign: "center" }}>
            <CardContent>
              {console.log(data)}
              <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
                {data.transaction.product_id}
              </Typography>
              <Typography color="textSecondary">
                {data.transaction.user_id}
              </Typography>
              <Typography color="textSecondary">
                {data.transaction.id}
              </Typography>
              <Typography color="textSecondary">
              {new Date(data.transaction.timestamp).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>) : null}
      </div>
    </div>
  );
};

export default Transaction;