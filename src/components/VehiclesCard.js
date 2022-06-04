import { deleteWebsite } from '../firebase/api';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export function VehiclesCard({ id, plate, type, owner }) {
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
    <div
      className='card mb-3 card-website'
      key={id}
      // onClick={() => navigate(`/edit/${id}`)}
    >
      <div className='card-body'>
        <div className='d-flex justify-content-start'>
          <h5 className='col-2'>{plate}</h5>
          <h5 className='col-3'>{type}</h5>
          <h5 className='col-5'>{owner}</h5>
          <Link className='btn btn-warning btn-sm' to='/users'>
            <AiFillEdit size='1.5rem' />
          </Link>
          <button
            className='btn btn-danger btn-sm d-flex align-items-center'
            // onClick={(e) => {
            //   e.stopPropagation();
            //   onDeleteLink(id);
            // }}
          >
            <AiFillDelete size='1.5rem' />
          </button>
        </div>
      </div>
    </div>
  );
}
