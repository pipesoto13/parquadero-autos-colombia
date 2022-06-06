import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerVehicle } from '../firebase/api';
import { useNavigate } from 'react-router-dom';

const initialState = {
  type: '',
  plate: '',
  status: '',
  owner: '',
};
export const AddVehicleForm = (props) => {
  const [registerForm, setRegisterForm] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'plate') {
      value = value.toUpperCase();
    }
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSelectChange = ({ target: { name, value } }) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { type, plate, status, owner } = registerForm;

    try {
      if (!type || !plate || !status || !owner) {
        throw new Error('Falta algún dato del formrulario');
      }
      await registerVehicle(registerForm);
      toast('Vehículo registrado exitosamente ', {
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
        <label htmlFor='type'>
          Tipo de vehículo:
          <select
            className='form-select'
            name='type'
            onChange={handleSelectChange}
          >
            <option value=''>Selecciona un tipo</option>
            <option value='Automovil'>Carro</option>
            <option value='Motocicleta'>Moto</option>
          </select>
        </label>

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

        <label htmlFor='status'>
          Novedad:
          <select
            className='form-select'
            name='status'
            onChange={handleSelectChange}
          >
            <option value=''>Selecciona un valor</option>
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </select>
        </label>

        <label htmlFor='owner'>Propietario:</label>
        <div className='input-group'>
          <input
            type='text'
            name='owner'
            placeholder='Juanito'
            className='form-control mb-3'
            onChange={handleInputChange}
          ></input>
        </div>

        <button
          className='btn btn-primary btn-block'
          // disabled={!registerForm.type || !registerForm.name}
        >
          Registrar
        </button>
      </form>
    </div>
  );
};
