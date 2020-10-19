import React from 'react';
import AuthRoutes from './auth.routes';
import { useAuth } from '../hooks/AuthContext';
import AppRoutes from './app.routes';
import { View, ActivityIndicator } from 'react-native';
// import { Container } from './styles';

const Routes: React.FC = () => {

  const { user, loading } = useAuth();
  //aqui podemos tratar a splash scren 
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#999' />
      </View>
    )
  }

  return !!user ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
