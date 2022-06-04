import { WebsiteList } from './components/ListVehicles';
import { AddVehicleForm } from './components/AddVehicleForm';
import { AccessVehicleForm } from './components/AccessVehicleForm';
import { LeavingVehicleForm } from './components/LeavingVehicleForm';
import { ListVehicles } from './components/ListVehicles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route exact path='home' element={<Home />} />
          <Route exact path='vehicles' element={<Vehicles />} />
          <Route exact path='vehicles/add' element={<AddVehicleForm />} />
          <Route exact path='vehicles/edit/:id' element={<AddVehicleForm />} />
          <Route exact path='vehicles/access' element={<AccessVehicleForm />} />
          <Route
            exact
            path='vehicles/leaving'
            element={<LeavingVehicleForm />}
          />
          <Route exact path='vehicles/list' element={<ListVehicles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
