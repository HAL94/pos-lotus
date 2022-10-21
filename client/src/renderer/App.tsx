/* eslint-disable no-console */
import './App.css';
// import 'tailwindcss/tailwind.css';
import { ApolloProvider } from '@apollo/client';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import client from './apollo-client';
import AuthProvider from './context/auth';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}
