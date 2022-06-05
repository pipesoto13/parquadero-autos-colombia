import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { registerVehicle } from '../firebase/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const initialState = {
  name: '',
  email: '',
  password: '',
};
export const AddUserForm = (props) => {
  const [error, setError] = useState('');
  const [registerForm, setRegisterForm] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleInputChange = ({ target: { name, value } }) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerForm);
    setError('');
    try {
      await signup(registerForm.email, registerForm.password);
      //await registerVehicle(registerForm);
      toast('Usuario registrado exitosamente ', {
        type: 'success',
      });

      // Clean Form
      setRegisterForm(initialState);
      navigate('/users');
    } catch (error) {
      setError(error.message);
    }
  };

  // const getLinkById = async (id) => {
  //   try {
  //     const doc = await getWebsite(id);
  //     setRegisterForm({ ...doc.data() });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (params.id) {
  //     getLinkById(params.id);
  //   }
  // }, [params.id]);

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
