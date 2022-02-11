import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import FormContainerHere from '../components/FormContainerHere';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

export const ShippingScreen = ({ history }) => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <FormContainerHere className='mb-4'>
      <CheckoutSteps step1 step2 />
      <h1>SHIPPING</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>city</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>postalCode</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postalCode'
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Continue
        </Button>
      </Form>
    </FormContainerHere>
  );
};

export default ShippingScreen;
