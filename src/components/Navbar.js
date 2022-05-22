import { Link } from 'react-router-dom';
import { AiOutlineSave, AiFillCar } from 'react-icons/ai';

export const Navbar = () => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <div className='container'>
      <Link className='navbar-brand d-flex' to='/'>
        <AiFillCar size='1.5rem' className='me-2' />
        Parqueadero Autos Colombia
      </Link>
    </div>
  </nav>
);
