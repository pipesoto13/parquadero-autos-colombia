import { useEffect, useState } from 'react';
import { getVehicles, deleteVehicle } from '../firebase/api';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

// const data = [
//   {
//     id: '26c4deee-4691-4e94-a5e9-d579ea17ccb8',
//     plate: 'QWE72E',
//     type: 'Motocicleta',
//     owner: 'Felipe Soto Correa',
//   },
//   {
//     id: '8c6f27b6-c202-4d87-9cd8-92cd9f4b9455',
//     plate: 'ATJ637',
//     type: 'Automovil',
//     owner: 'Natalia Ospina',
//   },
// ];

export const ListVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const navigate = useNavigate();

  const onDeleteLink = async (id) => {
    if (window.confirm('are you sure you want to delete this vehicle?')) {
      await deleteVehicle(id);
      (async () => {
        const querySnapshot = await getVehicles();
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setVehicles(docs);
      })();
      toast('Link Removed Successfully', {
        type: 'success',
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    (async () => {
      const querySnapshot = await getVehicles();
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setVehicles(docs);
    })();
  }, []);

  return (
    <>
      <div className='card-body'>
        <div className='d-flex justify-content-start'>
          <h4 className='col-2'>PLACA</h4>
          <h4 className='col-3'>TIPO</h4>
          <h4 className='col-5'>PROPIETARIO</h4>
          <h4 className='col-2'></h4>
        </div>
      </div>
      {!!vehicles &&
        vehicles.map(({ id, plate, type, owner }) => (
          <div className='col-md-12' key={id}>
            <div className='card mb-3 card-website' key={id}>
              <div className='card-body'>
                <div className='d-flex justify-content-start'>
                  <h5 className='col-2'>{plate}</h5>
                  <h5 className='col-3'>{type}</h5>
                  <h5 className='col-5'>{owner}</h5>
                  <Link
                    className='btn btn-warning btn-sm'
                    to='/users'
                    // onClick={() => navigate(`/edit/${id}`)}
                  >
                    <AiFillEdit size='1.5rem' />
                  </Link>
                  <button
                    className='btn btn-danger btn-sm d-flex align-items-center'
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteLink(id);
                    }}
                  >
                    <AiFillDelete size='1.5rem' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
