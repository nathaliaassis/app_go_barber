import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;
`;

export const BtnText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #312e38;
`;
