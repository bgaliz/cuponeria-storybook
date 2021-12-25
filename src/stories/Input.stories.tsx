import React from 'react';
import { Input, IInput } from '../components/Input';


export default {
    title: 'Input',
    component: Input,
    argTypes: {
        label: {
            defaultValue: 'Label',
            control: {type: 'text'}
        },
        text: {
            defaultValue: 'Input text example',
            control: {type: 'text'}
        },
    }
}

const Template = ({text, label}: IInput) => {
    return <Input label={label} text={text}/>
  };
  
  export const Primary = Template.bind({});