import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { registerVehicle } from '../firebase/api';
import { useParams, useNavigate } from 'react-router-dom';

const initialState = {
  type: '',
  plate: '',
  status: '',
  owner: '',
};
export const AddVehicleForm = (props) => {
  const [registerForm, setRegisterForm] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //await registerVehicle(registerForm);
    toast('Vehículo registrado exitosamente ', {
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
        <label htmlFor='type'>Tipo de vehículo</label>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='carro o moto'
            name='type'
            onChange={handleInputChange}
          />
        </div>

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

        <label htmlFor='status'>Novedad:</label>
        <div className='input-group'>
          <input
            type='text'
            name='status'
            placeholder='true or false'
            className='form-control mb-3'
            onChange={handleInputChange}
          ></input>
        </div>

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
