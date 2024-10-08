import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoutes from './components/RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { fetchrefreshUser } from './redux/auth/operations';
import useAuth from './components/hooks/useAuth';

const HomePage = lazy(() => import('./pages/Home'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchrefreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
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
