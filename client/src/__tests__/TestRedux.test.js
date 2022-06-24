import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { userLoginReducer, initialState } from '../reducers/userReducers';
import LoginScreen from '../screens/LoginScreen';
import { render, cleanup, fireEvent } from '@testing-library/react';
import * as types from '../constants/userConstants';

const reducer = combineReducers({ userLogin: userLoginReducer });

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

it('checks initial state email label', () => {
  const { getByTestId } = renderWithRedux(
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );
  expect(getByTestId('emaillabel').textContent).toBe('Email Address');
});

it('checks initial state password label', () => {
  const { getByTestId } = renderWithRedux(
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );
  expect(getByTestId('emailpassword').textContent).toBe('Password');
});

it('Logges in and check state', () => {
  const { getByTestId } = renderWithRedux(
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );

  fireEvent.change(getByTestId('emaillabelInput'), {
    target: { value: 'ashwin' },
  });
  fireEvent.change(getByTestId('emailPassword'), {
    target: { value: 'ashwin' },
  });
  fireEvent.click(getByTestId('loginButton'));

  expect(
    reducer(
      { loading: false },
      { type: types.USER_LOGIN_REQUEST, payload: { loading: true } }
    )
  ).toEqual({ userLogin: { loading: true } });
});
