import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/AuthContext';
import Button from '../../components/Button';

// import { Container } from './styles';

const Dashboard: React.FC = () => {

  const { signOut } = useAuth();

  return (
    <View>
      <Text>
        Dashboard
      </Text>
      <Button
        onPress={() => signOut()}
      >
        Sair
      </Button>
    </View>
  );
}

export default Dashboard;
