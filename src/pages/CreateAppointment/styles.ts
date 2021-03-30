import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ProviderContainerProps {
  selected: boolean;
}
interface ProviderNameProps {
  selected: boolean;
}
export const Container = styled.View`
  flex: 1 ;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #28262e; 
`;
export const BackButton = styled.TouchableOpacity`
`;

export const HeaderTitle = styled.Text`
  font-family: "RobotoSlab-Medium";
  font-size: 20px;
  color: #f4ede8;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  margin-left: auto;
`;
export const ProvidersListContainer = styled.View`
`;
export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton) <ProviderContainerProps>`
  flex-direction: row;
  align-items: center;

  background: ${props => props.selected ? '#FF9000' : '#3E3B47'};
  padding: 8px 12px;
  margin-right: 16px;

  border-radius: 10px;
`

export const ProviderAvatar = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background: #28262e; 
`
export const ProviderName = styled.Text<ProviderNameProps>`
  font-family: "RobotoSlab-Medium";
  font-size: 16px;
  color: ${props => props.selected ? '#232129' : '#F4EDE8'};
  margin-left: 8px;
`
