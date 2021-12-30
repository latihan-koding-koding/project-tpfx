import { Input } from '@components/Form/Form.Input';
import React from 'react';

const Form = (props: { children: React.ReactNode }) => {
  return props.children;
};

Form.Input = Input;

export default Form;
