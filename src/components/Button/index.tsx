import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, BtnText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  containerStyle?: {}
}

const Button: React.FC<ButtonProps> = ({ children, containerStyle = {}, ...rest }) => {
  return <Container style={containerStyle} {...rest}>
    <BtnText>
      {children}
    </BtnText>
  </Container>;
}

export default Button;
