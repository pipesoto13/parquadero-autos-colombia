import { deleteWebsite } from '../firebase/api';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { AiFillCloseSquare, AiFillCheckSquare } from 'react-icons/ai';

export function SlotsCard({ id, slot, asignedTo }) {
  const navigate = useNavigate();

  const onDeleteLink = async (id) => {
    if (window.confirm('are you sure you want to delete this vehicle?')) {
      await deleteWebsite(id);
      toast('Link Removed Successfully', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className='card mb-3 card-website' key={id}>
      <div className='card-body'>
        <div className='d-flex justify-content-start'>
          <h5 className='col-3'>{slot}</h5>
          <h5 className='col-6'>{!!asignedTo ? asignedTo : 'No asignado'}</h5>
          {!asignedTo ? (
            <button
              className='btn btn-success btn-sm d-flex align-items-center'
              onClick={(e) => {
                e.stopPropagation();
                toast('Celda asignada correctamente', {
                  type: 'success',
                });
              }}
            >
              <AiFillCheckSquare size='1.5rem' />
            </button>
          ) : (
            <button
              className='btn btn-danger btn-sm d-flex align-items-center'
              onClick={(e) => {
                e.stopPropagation();
                toast('Celda desvinculada correctamente', {
                  type: 'success',
                });
              }}
            >
              <AiFillCloseSquare size='1.5rem' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
