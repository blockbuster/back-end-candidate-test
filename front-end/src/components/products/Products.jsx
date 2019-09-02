import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Table } from 'reactstrap';
import { GET_PRODUCTS, GET_PRODUCT } from './queries.graphql';

const Products = React.memo(() => {
  let searchValue = '';
  const [productId, setProductId] = useState('');
  const { loadingProduct, error: productError, data: productData } = useQuery(GET_PRODUCT, {
    variables: { id: productId },
  });
  const { loadingProducts, data: productsData } = useQuery(GET_PRODUCTS);

  const handleSearchInputChanges = event => {
    searchValue = event.target.value;
  };

  const findProduct = () => {
    setProductId(searchValue);
  };

  return (
    <>
      <section>
        <input
          style={{ width: 300 }}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Type product ID to search the product"
        />
        <button type="button" onClick={findProduct}>
          Search
        </button>
        {loadingProduct && 'Searching for a product...'}
        <div>{productError && productId && `Missing product with ID "${productId}"`}</div>
        {!loadingProduct && !productError && productData && productData.product && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>product ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{productData.product.id}</td>
                <td>{productData.product.product_id}</td>
                <td>{productData.product.start}</td>
                <td>{productData.product.end}</td>
                <td>{productData.product.price}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </section>
      <hr />
      <section>
        {loadingProducts && 'Loading products...'}
        {!loadingProducts && productsData.products && productsData.products.length > 0 && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>product ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {productsData.products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.product_id}</td>
                  <td>{product.start}</td>
                  <td>{product.end}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </>
  );
});

export default Products;
