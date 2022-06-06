import { AiOutlineSave, AiFillCar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../context/AuthContext';

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const [loginForm, setLoginForm] = useState(initialState);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleInputChange = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { email, password } = loginForm;

    e.preventDefault();

    try {
      await login(email, password);
      toast('Login exitoso ', {
        type: 'success',
      });

      setLoginForm(initialState);
      navigate('home');
    } catch (error) {
      toast(error.message, {
        type: 'error',
      });
    }

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
