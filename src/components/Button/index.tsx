import React from 'react';

import { ButtonContainer } from './styles';

export interface ButtonProps {
  text: string,
  outline?: boolean,
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({text, outline, onClick, ...rest}: ButtonProps) => {
    
    return (
        <ButtonContainer
            outline={outline}
            onClick={onClick}
            {...rest}
        >
            {text}
        </ButtonContainer>
    )
}