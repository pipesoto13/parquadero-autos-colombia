import { useEffect, useState } from 'react';
import { getWebsites } from '../firebase/api';
import { SlotsCard } from './SlotsCard';

const data = [
  {
    id: '26c4deee-4691-4e94-a5e9-d579ea17ccb8',
    slot: 1,
    asignedTo: 'QWE72E',
  },
  {
    id: '8c6f27b6-c202-4d87-9cd8-92cd9f4b9455',
    slot: 2,
    asignedTo: null,
  },
];

export const ListSlots = () => {
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
          <h4 className='col-3'>CELDA</h4>
          <h4 className='col-6'>VEHICULO ASIGNADO</h4>
          <h4 className='col-3'></h4>
        </div>
      </div>
      {data.map(({ id, slot, asignedTo }) => (
        <div className='col-md-12' key={id}>
          <SlotsCard slot={slot} asignedTo={asignedTo} />
        </div>
      ))}
    </>
  );
};
