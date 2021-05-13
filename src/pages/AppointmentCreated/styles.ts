import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;
export const Title = styled.Text`
  font-family: "RobotoSlab-Medium";
  text-align: center;
  font-size: 32px;
  color: #F4ede8;
  margin-top: 24px;
`;

export const Description = styled.Text`
  font-family: "RobotoSlab-Regular";
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
`;

export const OKButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #FF9000;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const OKButtonText = styled.Text`
  font-family: "RobotoSlab-Medium";
  font-size: 18px;
  color: #312e38;
`;

