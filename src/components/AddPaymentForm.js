import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { registerPayments, getSlots, updateSlot } from '../firebase/api';
import { useNavigate } from 'react-router-dom';

const initialState = {
  plate: '',
  slot: '',
  date: '',
  finalDate: '',
};
export const AddPaymentForm = (props) => {
  const [slots, setSlots] = useState([]);
  const [registerForm, setRegisterForm] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'plate') {
      value = value.toUpperCase();
    }
    if (name === 'date') {
      const currentDate = new Date(value);
      const finalDate = new Date(value);
      finalDate.setDate(finalDate.getDate() + 30);
      setRegisterForm({ ...registerForm, finalDate: finalDate.toDateString(), [name]: currentDate.toDateString() });
    } else {
      setRegisterForm({ ...registerForm, [name]: value });
    }
  };

  const handleSelectChange = ({ target: { name, value } }) => {
    setRegisterForm({ ...registerForm, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { plate, slot, date } = registerForm;

    try {
      if (!plate || !slot || !date) {
        throw new Error('Falta algún dato del formrulario');
      }
      await registerPayments(registerForm);
      await updateSlot(slot, {
        asignedTo: plate,
      });
      toast('Pago registrado exitosamente ', {
        type: 'success',
      });

      setRegisterForm(initialState);
      navigate('/payments');
    } catch (error) {
      toast(error.message, {
        type: 'error',
      });
    }
  };

  useEffect(() => {
    (async () => {
      const querySnapshot = await getSlots();
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      docs.sort((a, b) => a.slot - b.slot);
      setSlots(docs);
    })();
  }, []);

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

        <label htmlFor='slot'>
          Parqueadero Disponible:
          <select
            className='form-select'
            name='slot'
            onChange={handleSelectChange}
          >
            <option value=''>Selecciona una celda disponible</option>
            {!!slots &&
              slots.map(
                (slot) =>
                  slot.asignedTo === '' && (
                    <option value={slot.id} key={slot.id}>{slot.slot}</option>
                  )
              )}
          </select>
        </label>

        <label htmlFor='date'>Fecha:</label>
        <div className='input-group'>
          <input
            type='date'
            name='date'
            placeholder='Juanito'
            className='form-control mb-3'
            onChange={handleInputChange}
          ></input>
        </div>

        <button
          className='btn btn-primary btn-block'
        >
          Registrar
        </button>
      </form>
    </div>
  );
};
