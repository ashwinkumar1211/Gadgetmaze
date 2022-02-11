import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../products';
import Rating from './Rating';

export const Product = ({ product }) => {
  return (
    <Fragment className='mb-3'>
      <Card className='my-3 p-3 rounded card-res'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' className='img-card' />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews}`} />
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Product;
