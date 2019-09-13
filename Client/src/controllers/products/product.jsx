import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AppBar from '../../components/appBar';
import { PRODUCT } from './products.graph';

const Product = () => {
  const productId = window.location.pathname.split('/')[2];
  console.log(productId)
  const { loading, error, data } = useQuery(PRODUCT, {
    variables: { id: productId }
  });

  return (
    <div className="product">
      <AppBar />
      <div> {loading ? (<div>loading...</div>) : null}
      {error ? (<div>Something went wrong fetching your data!</div>) : null}
        {data ? (
          <Card style={{ width: "50%", textAlign: "center" }}>
            <CardContent>
              {console.log(data)}
              <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
                {data.product.program_id}
              </Typography>
              <Typography color="textSecondary">
                {data.product.id}
              </Typography>
              <Typography variant="body2" component="p">
                {new Date(data.product.start).toLocaleString()}
              </Typography>
              <Typography variant="body2" component="p">
                {new Date(data.product.end).toLocaleString()}
              </Typography>
              <Typography color="textSecondary">
                {data.product.price}
              </Typography>
            </CardContent>
          </Card>) : null}
      </div>
    </div>
  );
};

export default Product;