import { useEffect, useState } from 'react';
import { getAccessLeaving } from '../firebase/api';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

export const ListAccessLeaving = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getAccessLeaving();
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setInfo(docs);
    })();
  }, []);

  return (
    <>
      <div className='card-body'>
        <div className='d-flex justify-content-start'>
          <h4 className='col-3'>PLACA</h4>
          <h4 className='col-3'>ENT/SAL</h4>
          <h4 className='col-3'>FECHA</h4>
          <h4 className='col-3'>HORA</h4>
        </div>
      </div>
      {!!info &&
        info.map(({ id, plate, access, date, time }) => (
          <div className='col-md-12' key={id}>
            <div className='card mb-3 card-website' key={id}>
              <div className='card-body'>
                <div className='d-flex justify-content-start'>
                  <h5 className='col-3'>{plate}</h5>
                  <h5 className='col-3'>
                    {!!access ? (
                      <AiFillCaretUp color='green' size='1.5rem' />
                    ) : (
                      <AiFillCaretDown color='red' size='1.5rem' />
                    )}
                  </h5>
                  <h5 className='col-3'>{date}</h5>
                  <h5 className='col-3'>{time}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
