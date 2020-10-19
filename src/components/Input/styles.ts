import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;

  height: 60px;
  width: 100%;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  border-width: 2px;
  border-color:   ${props =>
    (props.isFocused && '#FF9000') ||
    (props.hasError && props.isFilled && '#c53030') ||
    (props.hasError && '#c53030') || '#232129'
  };
`;

export const Icon = styled(FeatherIcon)`
margin-right: 16px;
`;

export const TextInput = styled.TextInput`
flex: 1;
font-family: 'RobotoSlab-Regular';
font-size: 16px;
color: #fff;
`;
