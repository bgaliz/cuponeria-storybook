import styled from "styled-components";

import { ButtonHTMLAttributes } from "react";

import { colors } from '../../shared/global/colors.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean
}

export const ButtonContainer = styled.button<IButton>`
  height: 36px;
  
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  box-shadow: 0px 3px 6px ${props => props.theme.shadow};
  border: none;
  padding: 0.4em 1em;
  border-radius: 18px;
  cursor: pointer;
  
  font-size: 16px;

  &:hover {
    background: ${props => props.theme.shade}
  }

  ${({outline}) => outline && `
    border: 1px solid ${colors.border_shade};
    box-shadow: 0px 3px 6px ${colors.shadow_shade};
    color: ${colors.text};

    &,
    &:hover {
      background: transparent;
    }
  `}
`;

ButtonContainer.defaultProps = {
    theme: {
        primary: `linear-gradient(90deg,  ${colors.buttonColors.button_primary} 0%, ${colors.buttonColors.button_shade} 100%) 0% 0% no-repeat padding-box`,
        shade: `${colors.buttonColors.button_shade} 0% 0% no-repeat padding-box`,
        white: colors.white,
        shadow: colors.shadow_shade
    }
}