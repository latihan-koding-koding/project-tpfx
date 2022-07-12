import { ButtonProps } from '@components/Button/Button.type';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ButtonStyled = styled.button<ButtonProps>`
  border: 1px solid;
  padding: ${({ paddingHorizontal, paddingVertical }) =>
    `${paddingVertical || 12}px ${paddingHorizontal || 42}px`};
  ${({ variant }) =>
    variant !== 'secondary'
      ? tw`bg-primary-gold-1 disabled:bg-gray-600 text-black border-primary-gold-1 text-white disabled:border-gray-700`
      : tw`border-primary-gold-1 hover:text-white text-primary-gold-1 hover:bg-primary-gold-1 hover:border-white`}
  ${tw`border-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed`}
  &:hover:enabled {
    ${({ variant }) => (variant !== 'secondary' ? tw`bg-primary-gray-4` : tw`bg-primary-gold-1`)}
  }
`;

export const Button = (props: ButtonProps) => (
  <ButtonStyled {...props} className={props.className}>
    {props.children}
  </ButtonStyled>
);
