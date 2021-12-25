import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from "../components/Button";

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      defaultValue: 'Button',
      control: {type: 'text'}
    },
    outline: {
      control: { type: 'boolean' },
    },
  },
};

const Template = ({text, onClick, outline, ...rest}: ButtonProps) => {
  return <Button outline={outline} onClick={action('clicked')} text={text} {...rest}/>
};

export const Primary = Template.bind({});