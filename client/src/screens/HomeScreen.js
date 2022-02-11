import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Container } from 'react-bootstrap';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  var url = window.location.href;

  var searchTerm = '/page/';

  var searchIndex = url.indexOf(searchTerm);

  var strout = url.substring(searchIndex + searchTerm.length);

  const pageNumber = Number(strout) || 1;

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(Number(pageNumber)));
  }, [dispatch, Number(pageNumber)]);

  return (
    <>
      <Meta />
      <Container className='mb-3'>
        <h3>LATEST PRODUCTS</h3>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
