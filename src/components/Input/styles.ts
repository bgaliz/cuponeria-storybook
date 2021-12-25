import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

import { colors } from '../../shared/global/colors.css';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;

    color: ${props => props.theme.text};
    
    input:focus {
        border: 1px solid ${props => props.theme.focused_color};
    }
    input:focus ~ label {
        color: ${props => props.theme.focused_color};
    }
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
        transform: translateY(10px) translateX(8px) scale(1);
    }
`

export const Label = styled.label<LabelHTMLAttributes<HTMLLabelElement>>`
    width: fit-content;
    padding: 0 4px;

    transition: transform 200ms, color 200ms;
    transform: translateY(30px) translateX(8px) scale(1);

    background: ${props => props.theme.white_color};
`

export const InputElem = styled.input<InputHTMLAttributes<HTMLInputElement>>`
    height: 42px;

    padding: 0 10px;
    letter-spacing: 0px;

    border: 1px solid ${props => props.theme.text};
    border-radius: 3px;
`

InputContainer.defaultProps = {
    theme:  {
        focused_color: colors.focusedColors.border_color,
    }
}
Label.defaultProps = {
    theme:  {
        white_color: colors.white,
    }
}
InputElem.defaultProps = {
    theme: {
        border_focused_color: colors.focusedColors.border_color,
        border: colors.border,
    }
}