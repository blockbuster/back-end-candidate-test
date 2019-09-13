import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AppBar from '../../components/appBar';
import { PROGRAM } from './programs.graph';

const Program = () => {
  const programId = window.location.pathname.split('/')[2];
  console.log(programId)
  const { loading, error, data } = useQuery(PROGRAM, {
    variables: { id: programId }
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
                {data.program.title}
              </Typography>
              <Typography color="textSecondary">
                {data.program.id}
              </Typography>
            </CardContent>
          </Card>) : null}
      </div>
    </div>
  );
};

export default Program;