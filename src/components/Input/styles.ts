import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

import { colors } from '../../shared/global/colors.css';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;

    font-size: 1em;
        
    input:focus {
        border: 1px solid ${props => props.theme.focused_color};
    }
    input:focus ~ label {
        color: ${props => props.theme.focused_color};
    }
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
        transform: translateY(10px) translateX(8px);
    }
    `

export const Label = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
    width: fit-content;
    padding: 0 4px;
    
    transition: transform 200ms, color 200ms;
    transform: translateY(30px) translateX(8px) scale(1);

    background: ${props => props.theme.white_color};
    color: ${props => props.theme.medium};
`

export const InputElem = styled.input<InputHTMLAttributes<HTMLInputElement>>`
    height: 42px;
    padding: 0 10px;

    letter-spacing: 0px;

    border: 1px solid ${props => props.theme.medium};
    border-radius: 3px;
`

InputContainer.defaultProps = {
    theme:  {
        focused_color: colors.focusedColors.border_color,
        medium: colors.medium
    }
}
Label.defaultProps = {
    theme:  {
        white_color: colors.white,
        medium: colors.medium
    }
}
InputElem.defaultProps = {
    theme: {
        border_focused_color: colors.focusedColors.border_color,
        border: colors.border,
        medium: colors.medium
    }
}