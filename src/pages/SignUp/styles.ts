import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const BackToLogOn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const BackToLogOnText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #fff;
  margin-left: 16px;
`;
