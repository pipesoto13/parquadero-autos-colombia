import { Outlet, useNavigate, Link } from 'react-router-dom';
import { AiOutlineSave, AiFillCar } from 'react-icons/ai';
import { getUser } from '../firebase/api';

function Vehicles() {
  return (
    <div className='col-md-6 d-grid gap-4 bg-secondary p-4'>
      <Link to='/vehicles/add' className='btn btn-primary btn-block'>
        Registrar Vehículos
      </Link>
      <Link to='/vehicles/access' className='btn btn-primary btn-block'>
        Registrar Ingreso
      </Link>
      <Link to='/vehicles/leaving' className='btn btn-primary btn-block'>
        Registrar Salida
      </Link>
      <Link to='/vehicles/list' className='btn btn-primary btn-block'>
        Listar Vehículos
      </Link>
    </div>
  );
}

export default Vehicles;
