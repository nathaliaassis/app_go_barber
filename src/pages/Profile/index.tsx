import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';

// import { Container } from './styles';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <View>
      <Text>
        Profile
        <TouchableOpacity onPress={navigateToDashboard}>
          <Text>voltar</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

export default Profile;
