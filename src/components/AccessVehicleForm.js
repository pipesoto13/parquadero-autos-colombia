import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { registerVehicle } from '../firebase/api';
import { useParams, useNavigate } from 'react-router-dom';

const initialState = {
  plate: '',
  date: '',
  time: '',
};
export const AccessVehicleForm = (props) => {
  const [registerForm, setRegisterForm] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerForm);

    //await registerVehicle(registerForm);
    toast('Ingreso registrado exitosamente ', {
      type: 'success',
    });

    // Clean Form
    setRegisterForm(initialState);
    navigate('/vehicles');
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
        <label htmlFor='plate'>Placa:</label>
        <div className='input-group'>
          <input
            type='text'
            name='plate'
            placeholder='EER456'
            className='form-control mb-3'
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor='date'>Fecha:</label>
        <div className='input-group'>
          <input
            type='date'
            name='date'
            placeholder='DD-MM-YYYY'
            className='form-control mb-3'
            onChange={handleInputChange}
          ></input>
        </div>

        <label htmlFor='time'>Hora:</label>
        <div className='input-group'>
          <input
            type='time'
            name='time'
            placeholder='HH:MM'
            className='form-control mb-3'
            onChange={handleInputChange}
          ></input>
        </div>

        <button
          className='btn btn-primary btn-block'
          // disabled={!registerForm.type || !registerForm.name}
        >
          Registrar Ingreso
        </button>
      </form>
    </div>
  );
};
