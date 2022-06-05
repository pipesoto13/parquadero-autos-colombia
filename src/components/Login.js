import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineSave, AiFillCar } from 'react-icons/ai';
import { getUser } from '../firebase/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../context/AuthContext';

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';
import { app } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth(app);

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const [loginForm, setLoginForm] = useState(initialState);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuth();

  if (user) {
    console.log('usuario logeado');
  }

  const handleInputChange = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginForm);

    // if (isRegistered) {
    //   await createUserWithEmailAndPassword(
    //     auth,
    //     loginForm.email,
    //     loginForm.password
    //   );
    //   setIsRegistered(true);
    // } else {
    //   await signInWithEmailAndPassword(
    //     auth,
    //     loginForm.email,
    //     loginForm.password
    //   );
    // }

    navigate('home');

    toast('Login exitoso ', {
      type: 'success',
    });

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
          <label htmlFor='email'>Email:</label>
          <div className='input-group mb-3'>
            <input
              type='email'
              className='form-control'
              name='email'
              onChange={handleInputChange}
              value={loginForm.email}
            />
          </div>

          <label htmlFor='password'>Contraseña:</label>
          <div className='input-group'>
            <input
              type='password'
              name='password'
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
