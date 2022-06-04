import { Outlet, useNavigate, Link } from 'react-router-dom';
import { AiOutlineSave, AiFillCar } from 'react-icons/ai';
import { getUser } from '../firebase/api';

function Home() {
  return (
    <div className='col-md-6 d-grid gap-4 bg-secondary p-4'>
      <Link to='/users' className='btn btn-primary btn-block'>
        Gestion de usuarios
      </Link>
      <Link to='/vehicles' className='btn btn-primary btn-block'>
        Gestion de vehiculos
      </Link>
    </div>
  );
}

export default Home;
