import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerUser } from '../firebase/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const initialState = {
  name: '',
  email: '',
  password: '',
};
export const AddUserForm = () => {
  const [registerForm, setRegisterForm] = useState(initialState);
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleInputChange = ({ target: { name, value } }) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { email, name, password } = registerForm;
    e.preventDefault();
    try {
      await signup(email, password);
      await registerUser({ name, email });
      toast('Usuario registrado exitosamente ', {
        type: 'success',
      });

      setRegisterForm(initialState);
      navigate('/users');
    } catch (error) {
      toast(error.message, {
        type: 'error',
      });
    }
  };

  return (
    <div className='col-md-6'>
      <form onSubmit={handleSubmit} className='card card-body bg-secondary'>
        <label htmlFor='name'>Nombre</label>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Xxxx Xxxx'
            name='name'
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor='email'>Email:</label>
        <div className='input-group'>
          <input
            type='email'
            name='email'
            className='form-control mb-3'
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor='password'>Contraseña:</label>
        <div className='input-group'>
          <input
            type='password'
            name='password'
            className='form-control mb-3'
            onChange={handleInputChange}
          ></input>
        </div>

        <button className='btn btn-primary btn-block'>Registrar</button>
      </form>
    </div>
  );
};
