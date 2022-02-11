import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUser } from '../actions/userActions';
import FormContainerHere from '../components/FormContainerHere';
import { Container } from 'react-bootstrap';
import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
} from '../constants/userConstants';

const UserEditScreen = () => {
  const { id } = useParams();
  const userId = id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setisAdmin] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  const userDetails = useSelector(state => state.userDetails);

  const { loading, error, user } = userDetails;

  const userUpdate = useSelector(state => state.userUpdate);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate('/admin/userlist');
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setisAdmin(user.isAdmin);
      }
    }
  }, [dispatch, user, userId, successUpdate]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <Container className='mb-4'>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainerHere>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='name' className='mt-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='isAdmin' className='mt-3'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                value={isAdmin}
                checked={isAdmin}
                onChange={e => setisAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
              Update
            </Button>
          </Form>
        )}
      </FormContainerHere>
    </Container>
  );
};

export default UserEditScreen;
