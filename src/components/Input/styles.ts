import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  height: 60px;
  width: 100%;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #FFF;
`;
