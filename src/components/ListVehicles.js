import { useEffect, useState } from 'react';
import { getWebsites } from '../firebase/api';
import { VehiclesCard } from './VehiclesCard';

const data = [
  {
    id: '26c4deee-4691-4e94-a5e9-d579ea17ccb8',
    plate: 'QWE72E',
    type: 'Motocicleta',
    owner: 'Felipe Soto Correa',
  },
  {
    id: '8c6f27b6-c202-4d87-9cd8-92cd9f4b9455',
    plate: 'ATJ637',
    type: 'Automovil',
    owner: 'Natalia Ospina',
  },
];

export const ListVehicles = () => {
  //const [vehicles, setVehicles] = useState(data);

  // const getLinks = async () => {
  //   const querySnapshot = await getWebsites();
  //   // onGetLinks((querySnapshot) => {
  //   const docs = [];
  //   querySnapshot.forEach((doc) => {
  //     docs.push({ ...doc.data(), id: doc.id });
  //   });
  //   setVehicles(docs);
  //   // });
  // };

  // useEffect(() => {
  //   setVehicles(data);
  //   console.log(vehicles);
  //   //getLinks();
  // }, []);

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
      {data.map(({ id, plate, type, owner }) => (
        <div className='col-md-12' key={id}>
          <VehiclesCard plate={plate} type={type} owner={owner} />
        </div>
      ))}
    </>
  );
};
