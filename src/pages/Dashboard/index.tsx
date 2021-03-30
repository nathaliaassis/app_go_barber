import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  ProfileButton,
  Username,
  UserAvatar,
  ProvidersListTitle,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderData,
  ProviderName,
  ProviderMeta,
  ProviderMetaText
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}
const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { name, avatar_url } = user;
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const navigateToCreateAppointment = useCallback((providerId: string) => {
    navigate('CreateAppointment', { providerId });
  }, [navigate]);

  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('providers').then(response => {

      setProviders(response.data);
    })
  }, []);
  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo, {"\n"}
          <Username>{name}</Username>
        </HeaderTitle>
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: avatar_url }} />
        </ProfileButton>
      </Header>

      <ProvidersList
        ListHeaderComponent={
          <ProvidersListTitle>Cabeleireiros</ProvidersListTitle>
        }
        data={providers}
        keyExtractor={(provider) => provider.id}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar source={{ uri: provider.avatar_url || 'https://lh3.googleusercontent.com/proxy/5BPa0AJFed7j59xcegLxMusdHRL5GRI6cEgBvld4VjK-XLeeNDLTs9BOi18znHnZQVfZ8osP0LeFT9BM4Z9DBFpjwYqPc_ROXWt6' }} />

            <ProviderData>
              <ProviderName>
                {provider.name}
              </ProviderName>
              <ProviderMeta>
                <Icon
                  name="calendar"
                  size={14}
                  color="#FF9000"
                />
                <ProviderMetaText>
                  Segunda à sexta
                </ProviderMetaText>
              </ProviderMeta>
              <ProviderMeta>
                <Icon
                  name="clock"
                  size={14}
                  color="#FF9000"
                />
                <ProviderMetaText>
                  8h às 18h
                </ProviderMetaText>
              </ProviderMeta>
            </ProviderData>
          </ProviderContainer>
        )}
      />

    </Container>
  );
}

export default Dashboard;
