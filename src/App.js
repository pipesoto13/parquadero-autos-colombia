import { WebsiteList } from './components/ListVehicles';
import { AddVehicleForm } from './components/AddVehicleForm';
import { AccessVehicleForm } from './components/AccessVehicleForm';
import { LeavingVehicleForm } from './components/LeavingVehicleForm';
import { ListVehicles } from './components/ListVehicles';
import { AddUserForm } from './components/AddUserForm';
import { ListUsers } from './components/ListUsers';
import { ListSlots } from './components/ListSlots';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
import Users from './components/Users';

import { useState } from 'react';

import { AuthProvider } from './context/AuthContext';

import { app } from './firebase//config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (fireUser) => {
    if (fireUser) {
      setUser(fireUser);
    } else {
      setUser(null);
    }
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/*             
            {!!user ? (
              <Route exact path='home' element={<Home />} />
            ) : (
              <Route index element={<Login />} />
            )} */}
            <Route exact path='home' element={<Home />} />
            <Route index element={<Login />} />
            <Route exact path='vehicles' element={<Vehicles />} />
            <Route exact path='vehicles/add' element={<AddVehicleForm />} />
            <Route
              exact
              path='vehicles/edit/:id'
              element={<AddVehicleForm />}
            />
            <Route
              exact
              path='vehicles/access'
              element={<AccessVehicleForm />}
            />
            <Route
              exact
              path='vehicles/leaving'
              element={<LeavingVehicleForm />}
            />
            <Route exact path='vehicles/list' element={<ListVehicles />} />
            <Route exact path='users' element={<Users />} />
            <Route exact path='users/add' element={<AddUserForm />} />
            <Route exact path='users/list' element={<ListUsers />} />
            <Route exact path='slots/list' element={<ListSlots />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
