import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoutes from './components/RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('./pages/Home'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoutes
                component={<RegistrationPage />}
                redirect="/contacts"
              />
            }
          />
          ,
          <Route
            path="/login"
            element={
              <RestrictedRoutes
                component={<LoginPage />}
                redirect="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirect="/login" />
            }
          />
          ,
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
