import { Navbar } from './Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineSave, AiFillCar } from 'react-icons/ai';

function Layout() {
  return (
    <>
      <Navbar />
      <div className='container p-4'>
        <div className='row justify-content-center'>
          <Outlet />
        </div>
        <ToastContainer />
      </div>
      {/* <div className='container p-4'>
        <div className='d-grid gap-4 col-4 mx-auto'>
          <Link
            className='d-flex align-items-center btn btn-primary shadow-none'
            to='/add'
          >
            <AiOutlineSave className='me-1' size='1.5rem' />
            Registrar vehículo
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default Layout;
