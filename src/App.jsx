import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './componetns/Layout/Layout';
import PrivateRoute from './componetns/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/Home'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PrivateRoute
              component={<RegistrationPage />}
              redirect="/contacts"
            />
          }
        />
        ,
        <Route
          path="/login"
          element={
            <PrivateRoute component={<LoginPage />} redirect="/contacts" />
          }
        />
        ,
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirect="/login" />
          }
        />
        ,{/* </Route> */}
      </Routes>
    </Layout>
  );
}

export default App;
