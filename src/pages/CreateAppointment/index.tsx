import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar
} from './styles';
import { useAuth } from '../../hooks/AuthContext';

interface RouteParams {
  providerId: string;
}
const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const { avatar_url } = user;
  const route = useRoute();

  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);
  const { providerId } = route.params as RouteParams;

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon
            name="chevron-left"
            size={24}
            color="#999591"
          />
        </BackButton>
        <HeaderTitle>Cabeleireiros</HeaderTitle>
        <UserAvatar source={{ uri: avatar_url }} />
      </Header>
    </Container>
  );
}

export default CreateAppointment;
