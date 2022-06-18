import { useEffect, useState } from 'react';
import { getPayments } from '../firebase/api';

export const ListPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getPayments();
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPayments(docs);
    })();
  }, []);

  return (
    <>
      <div className='card-body'>
        <div className='d-flex justify-content-start'>
          <h4 className='col-3'>PLACA</h4>
          <h4 className='col-4'>FECHA INICIO</h4>
          <h4 className='col-4'>FECHA FINAL</h4>
        </div>
      </div>
      {payments.map(({ id, plate, date, finalDate }) => (
        <div className='col-md-12' key={id}>
          <div className='card mb-3 card-website' key={id}>
            <div className='card-body'>
              <div className='d-flex justify-content-start'>
                <h5 className='col-3'>{plate}</h5>
                <h5 className='col-4'>{date}</h5>
                <h5 className='col-4'>{finalDate}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
