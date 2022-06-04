import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineSave, AiFillCar } from 'react-icons/ai';
import { getUser } from '../firebase/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const initialState = {
  id: '',
  password: '',
};

function Login() {
  const [loginForm, setLoginForm] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('home');

    toast('Login exitoso ', {
      type: 'success',
    });

    // console.log(loginForm.id);
    // const querySnapshot = query(
    //   collection(db, 'users'),
    //   where('userId', '==', loginForm.id)
    // );
    // const docs = [];
    // onSnapshot(querySnapshot, (snapshot) => {
    //   snapshot.forEach((doc) => {
    //     docs.push({ ...doc.data(), id: doc.id });
    //   });
    //   console.log(docs[0]);
    // });

    // // Clean Form
    // setLoginForm(initialState);

    // console.log(!!docs[0]);
    // console.log(docs[0].password === loginForm.password);
    // if (!!docs[0] && docs[0].password === loginForm.password) {
    //   console.log('OK');
    //   navigate('add');
    // } else {
    //   console.log('Password wrong');
    // }
  };

  return (
    <>
      <div className='col-md-6'>
        <form onSubmit={handleSubmit} className='card card-body bg-secondary'>
          <label htmlFor='id'>ID:</label>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='cc'
              name='id'
              onChange={handleInputChange}
              value={loginForm.id}
            />
          </div>

          <label htmlFor='password'>Contraseña:</label>
          <div className='input-group'>
            <input
              type='text'
              name='password'
              placeholder='EER456'
              className='form-control mb-3'
              onChange={handleInputChange}
              value={loginForm.password}
            />
          </div>

          <button className='btn btn-primary btn-block'>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
