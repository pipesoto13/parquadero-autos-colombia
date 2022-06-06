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
import { ProtectedRoute } from './components/ProtectedRoute';
import { ListAccessLeaving } from './components/ListAccessLeaving';

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
            <Route index element={<Login />} />
            <Route
              exact
              path='home'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='vehicles'
              element={
                <ProtectedRoute>
                  <Vehicles />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='vehicles/add'
              element={
                <ProtectedRoute>
                  <AddVehicleForm />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='vehicles/edit/:id'
              element={
                <ProtectedRoute>
                  <AddVehicleForm />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='vehicles/access'
              element={
                <ProtectedRoute>
                  <AccessVehicleForm />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='vehicles/leaving'
              element={
                <ProtectedRoute>
                  <LeavingVehicleForm />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='vehicles/list'
              element={
                <ProtectedRoute>
                  <ListVehicles />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='users'
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='users/add'
              element={
                <ProtectedRoute>
                  <AddUserForm />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='users/list'
              element={
                <ProtectedRoute>
                  <ListUsers />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='slots/list'
              element={
                <ProtectedRoute>
                  <ListSlots />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path='vehicles/access-leaving'
              element={
                <ProtectedRoute>
                  <ListAccessLeaving />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
