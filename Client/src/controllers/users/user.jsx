import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AppBar from '../../components/appBar';
import { USER } from './users.graph';

const User = () => {
  const userId = window.location.pathname.split('/')[2];
  const { loading, error, data } = useQuery(USER, {
    variables: { id: userId }
  });

  return (
    <div className="user">
      <AppBar />
      <div> {loading ? (<div>loading...</div>) : null}
        {error ? (<div>Something went wrong fetching your data!</div>) : null}
        {data ? (
          <Card style={{ width: "50%", textAlign: "center" }}>
            <CardContent>
              {console.log(data)}
              <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
                {data.user.name}
              </Typography>
              <Typography color="textSecondary">
                {data.user.id}
              </Typography>
              <Typography variant="body2" component="p">
                {new Date(data.user.created).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>) : null}
      </div>
    </div>
  );
};

export default User;