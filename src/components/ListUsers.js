import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../firebase/api';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

// const data = [
//   {
//     id: '56c4deee-4691-4e94-a5e9-d579ea17ccb8',
//     name: 'Juan Velazques',
//     email: 'juan.c@yopmail.com',
//   },
//   {
//     id: 'r76f27b6-c202-4d87-9cd8-92cd9f4b9455',
//     name: 'Luisa Velez',
//     email: 'luisa.v@yopmail.com',
//   },
// ];

export const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const onDeleteLink = async (id) => {
    if (window.confirm('are you sure you want to delete this vehicle?')) {
      await deleteUser(id);
      (async () => {
        const querySnapshot = await getUsers();
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setUsers(docs);
      })();
      toast('Link Removed Successfully', {
        type: 'success',
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    (async () => {
      const querySnapshot = await getUsers();
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUsers(docs);
    })();
  }, []);

  return (
    <>
      <div className='card-body'>
        <div className='d-flex justify-content-start'>
          <h4 className='col-5'>NOMBRE</h4>
          <h4 className='col-5'>EMAIL</h4>
          <h4 className='col-2'></h4>
        </div>
      </div>
      {users.map(({ id, name, email }) => (
        <div className='col-md-12' key={id}>
          <div
            className='card mb-3 card-website'
            key={id}
            // onClick={() => navigate(`/edit/${id}`)}
          >
            <div className='card-body'>
              <div className='d-flex justify-content-start'>
                <h5 className='col-5'>{name}</h5>
                <h5 className='col-5'>{email}</h5>
                <Link className='btn btn-warning btn-sm' to='/users'>
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
