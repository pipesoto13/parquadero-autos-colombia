import { useEffect, useState } from 'react';
import { getSlots, updateSlot } from '../firebase/api';
import { toast } from 'react-toastify';
import { AiFillCloseSquare, AiFillCheckSquare } from 'react-icons/ai';

// const data = [
//   {
//     id: '26c4deee-4691-4e94-a5e9-d579ea17ccb8',
//     slot: 1,
//     asignedTo: 'QWE72E',
//   },
//   {
//     id: '8c6f27b6-c202-4d87-9cd8-92cd9f4b9455',
//     slot: 2,
//     asignedTo: null,
//   },
// ];

export const ListSlots = () => {
  const [slots, setSlots] = useState([]);

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
    <>
      <div className='card-body'>
        <div className='d-flex justify-content-start'>
          <h4 className='col-3'>CELDA</h4>
          <h4 className='col-6'>VEHICULO ASIGNADO</h4>
          <h4 className='col-3'></h4>
        </div>
      </div>
      {slots.map(({ id, slot, asignedTo }) => (
        <div className='col-md-12' key={id}>
          <div className='card mb-3 card-website' key={id}>
            <div className='card-body'>
              <div className='d-flex justify-content-start'>
                <h5 className='col-3'>{slot}</h5>
                <h5 className='col-6'>
                  {!!asignedTo ? asignedTo : 'No asignado'}
                </h5>
                {!asignedTo ? (
                  <button
                    className='btn btn-success btn-sm d-flex align-items-center'
                    onClick={(e) => {
                      e.stopPropagation();
                      const res = window.prompt('Escribe la placa a asignar:');
                      if (!!res) {
                        (async () => {
                          await updateSlot(id, {
                            slot,
                            asignedTo: res,
                          });
                          const querySnapshot = await getSlots();
                          const docs = [];
                          querySnapshot.forEach((doc) => {
                            docs.push({ ...doc.data(), id: doc.id });
                          });
                          docs.sort((a, b) => a.slot - b.slot);
                          setSlots(docs);
                        })();
                        toast('Celda asignada correctamente', {
                          type: 'success',
                        });
                      }
                    }}
                  >
                    <AiFillCheckSquare size='1.5rem' />
                  </button>
                ) : (
                  <button
                    className='btn btn-danger btn-sm d-flex align-items-center'
                    onClick={(e) => {
                      e.stopPropagation();
                      if (
                        window.confirm(
                          'Segura quieres desvincular el vehículo del parqueadero?'
                        )
                      ) {
                        (async () => {
                          await updateSlot(id, {
                            slot,
                            asignedTo: '',
                          });
                          const querySnapshot = await getSlots();
                          const docs = [];
                          querySnapshot.forEach((doc) => {
                            docs.push({ ...doc.data(), id: doc.id });
                          });
                          docs.sort((a, b) => a.slot - b.slot);
                          setSlots(docs);
                        })();
                        toast('Celda desvinculada correctamente', {
                          type: 'success',
                        });
                      }
                    }}
                  >
                    <AiFillCloseSquare size='1.5rem' />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
