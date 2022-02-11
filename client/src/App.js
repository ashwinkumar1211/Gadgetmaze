import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import OrderStatusScreen from './screens/OrderStatusScreen';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          className='py-3'
          element={[<Header />, <HomeScreen />]}
        />
        <Route
          path='/product/:id'
          className='py-3'
          element={[<Header />, <ProductScreen />]}
        />
        <Route path='/cart/:id' element={[<Header />, <CartScreen />]} />
        <Route path='/cart/' element={[<Header />, <CartScreen />]} />
        <Route path='/login' element={[<Header />, <LoginScreen />]} />
        <Route path='/register' element={[<Header />, <RegisterScreen />]} />
        <Route path='/profile' element={[<Header />, <ProfileScreen />]} />
        <Route
          path='/login/shipping'
          element={[<Header />, <ShippingScreen />]}
        />
        <Route path='/shipping' element={[<Header />, <ShippingScreen />]} />
        <Route path='/payment' element={[<Header />, <PaymentScreen />]} />
        <Route
          path='/placeorder'
          element={[<Header />, <PlaceOrderScreen />]}
        />
        <Route path='/order/:id' element={[<Header />, <OrderScreen />]} />
        <Route
          path='/order/:id/status'
          element={[<Header />, <OrderStatusScreen />]}
        />
        <Route
          path='/admin/userlist'
          element={[<Header />, <UserListScreen />]}
        />
        <Route
          path='/admin/user/:id/edit'
          element={[<Header />, <UserEditScreen />]}
        />
        <Route
          path='/admin/productlist'
          element={[<Header />, <ProductListScreen />]}
        />
        <Route
          path='/admin/productlist/:pageNumber'
          element={[<Header />, <ProductListScreen />]}
        />
        <Route
          path='/admin/product/:id/edit'
          element={[<Header />, <ProductEditScreen />]}
        />
        <Route
          path='/admin/orderlist'
          element={[<Header />, <OrderListScreen />]}
        />
        <Route
          path='/page/:pageNumber'
          element={[<Header />, <HomeScreen />]}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
