import { Link } from 'react-router-dom';
import { AiOutlineLogout, AiFillCar } from 'react-icons/ai';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand d-flex' to='/home'>
          <AiFillCar size='1.5rem' className='me-2' />
          Parqueadero Autos Colombia
        </Link>
        {!!user && (
          <button className='btn btn-light btn-block' onClick={handleLogout}>
            Logout <AiOutlineLogout size='1.5rem' className='me-2' />
          </button>
        )}
      </div>
    </nav>
  );
};
