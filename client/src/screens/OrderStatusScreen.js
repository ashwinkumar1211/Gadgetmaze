import React, { Fragment, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const OrderStatusScreen = () => {
  const { id: orderId } = useParams();

  const dispatch = useDispatch();

  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const orderDeliverStatus = useSelector(state => state.orderDeliverStatus);
  const { loading: loadingDeliver, success: successDeliver } =
    orderDeliverStatus;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, []);

  /*animation starts*/
  const widthItem = '50%';

  const inEffect = `
    @keyframes react-fade-in {
      0%   { width: 0; }
      10%  { width: 10; }
      25%  { width: 25;  } 
      50%  { width: 50;  }
      100% { width: 100; }
    }
  `;

  /*animation ends*/

  return (
    <Container>
      <div>
        <div
          style={{
            color: 'red',
            height: '5px',
            width: '100%',
            margin: '40px 0',
            backgroundColor: 'red',
            borderRadius: '40',
            textAlign: 'right',
          }}
        >
          <style children={inEffect} />
          <div
            style={{
              backgroundColor: 'black',
              width: `${widthItem}`,
              height: '5px',
              animationName: 'react-fade-in',
              animationDuration: '1s',
            }}
          ></div>
        </div>
      </div>
      <h3>DELIVERY STATUS : Placed Order!</h3>
    </Container>
  );
};

export default OrderStatusScreen;
