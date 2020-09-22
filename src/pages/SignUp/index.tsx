import React from 'react';
import { View, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToLogOn,
  BackToLogOnText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Criar sua conta</Title>
            </View>
            <Input name='name' icon='user' placeholder='Nome' />
            <Input name='email' icon='mail' placeholder='E-mail' />

            <Input name='password' icon='lock' placeholder='Senha' />

            <Button
              onPress={() => { }}
            >
              Cadastrar
          </Button>
          </Container>
        </ScrollView>

      </KeyboardAvoidingView>
      <BackToLogOn onPress={() => navigation.navigate('SignIn')}>
        <Icon name='arrow-left' size={20} color='#fff' />
        <BackToLogOnText>
          Voltar para logon
        </BackToLogOnText>
      </BackToLogOn>
    </>
  )
}

export default SignUp;
