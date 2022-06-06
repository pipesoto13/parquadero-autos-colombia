import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerAccesLeaving } from '../firebase/api';
import { useNavigate } from 'react-router-dom';

const initialState = {
  plate: '',
  date: '',
  time: '',
  access: null,
};
export const LeavingVehicleForm = (props) => {
  const [registerForm, setRegisterForm] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { plate, date, time } = registerForm;

    try {
      if (!plate || !date || !time) {
        throw new Error('Falta algún dato del formrulario');
      }
      await registerAccesLeaving({ ...registerForm, access: false });
      toast('Salida registrada exitosamente ', {
        type: 'success',
      });

      setRegisterForm(initialState);
      navigate('/vehicles');
    } catch (error) {
      toast(error.message, {
        type: 'error',
      });
    }
  };

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

        <button className='btn btn-primary btn-block'>Registrar Salida</button>
      </form>
    </div>
  );
};
