import React from 'react';

import { InputContainer, Label, InputElem } from './styles';

export interface IInput {
    text: string;
    label?: string;
}

export const Input: React.FC<IInput> = ({text, label, ...rest}: IInput) => {
    return (
        <InputContainer>
            <InputElem 
                id={label}
                type="text" 
                placeholder=" "
                value={text}
                {...rest}
            />
            <Label htmlFor={label}>{ label }</Label>
        </InputContainer>
    )   
}