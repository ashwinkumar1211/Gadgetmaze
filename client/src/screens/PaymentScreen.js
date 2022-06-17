import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';
import FormContainerHere from '../components/FormContainerHere';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

export const PaymentScreen = () => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainerHere className='mb-4'>
      <CheckoutSteps step1 step2 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={e => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check type='radio' label='Stripe' id='Stripe' name='paymentMethod' value='Stripe' checked
                onChange={(e) => setPaymentMethod(e.target.value)}>                    
                </Form.Check> */}
          </Col>{' '}
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Continue
        </Button>
      </Form>
    </FormContainerHere>
  );
};

export default PaymentScreen;
