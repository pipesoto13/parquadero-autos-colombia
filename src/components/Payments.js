import { Outlet, useNavigate, Link } from 'react-router-dom';

function Payments() {
  return (
    <div className='col-md-6 d-grid gap-4 bg-secondary p-4'>
      <Link to='/payments/add' className='btn btn-primary btn-block'>
        Registrar Pagos
      </Link>
      <Link to='/payments/list' className='btn btn-primary btn-block'>
        Listar Pagos
      </Link>

    </div>
  );
}

export default Payments;
