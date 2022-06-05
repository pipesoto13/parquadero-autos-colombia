import { Outlet, useNavigate, Link } from 'react-router-dom';
import { AiOutlineSave, AiFillCar } from 'react-icons/ai';
import { getUser } from '../firebase/api';

function Users() {
  return (
    <div className='col-md-6 d-grid gap-4 bg-secondary p-4'>
      <Link to='/users/add' className='btn btn-primary btn-block'>
        Registrar Usuario
      </Link>
      <Link to='/users/list' className='btn btn-primary btn-block'>
        Listar Usuarios
      </Link>
    </div>
  );
}

export default Users;
