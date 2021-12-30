import { ButtonProps } from '@components/Button/Button.type';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ButtonStyled = styled.button<ButtonProps>`
  border: 1px solid;
  ${tw`bg-primary-gold-1 text-black border-primary-gold-1`}
  ${tw`w-full text-white py-1.5 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed`}
  &:hover:enabled {
    ${tw`bg-primary-gray-4`}
  }
`;

export const Button = (props: ButtonProps) => (
  <ButtonStyled {...props} className="px-">
    {props.children}
  </ButtonStyled>
);
