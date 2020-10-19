import React from 'react';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/AuthContext';
import AppRoutes from './app.routes';
// import { Container } from './styles';

const Routes: React.FC = () => {

  const { user } = useAuth();

  return !!user ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
