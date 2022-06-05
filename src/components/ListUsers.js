import { useEffect, useState } from 'react';
import { getWebsites } from '../firebase/api';
import { UsersCard } from './UsersCard';

const data = [
  {
    id: '56c4deee-4691-4e94-a5e9-d579ea17ccb8',
    name: 'Juan Velazques',
    email: 'juan.c@yopmail.com',
  },
  {
    id: 'r76f27b6-c202-4d87-9cd8-92cd9f4b9455',
    name: 'Luisa Velez',
    email: 'luisa.v@yopmail.com',
  },
];

export const ListUsers = () => {
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
          <h4 className='col-5'>NOMBRE</h4>
          <h4 className='col-5'>EMAIL</h4>
          <h4 className='col-2'></h4>
        </div>
      </div>
      {data.map(({ id, name, email }) => (
        <div className='col-md-12' key={id}>
          <UsersCard name={name} email={email} />
        </div>
      ))}
    </>
  );
};
