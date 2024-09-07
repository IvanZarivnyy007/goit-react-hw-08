import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />,
          <Route path="/login" element={<LoginPage />} />,
          <Route path="/contacts" element={<ContactsPage />} />,
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
