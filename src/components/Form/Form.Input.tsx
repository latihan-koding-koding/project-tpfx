import { InputProps } from '@components/Form/Form.Input.type';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ContainerTogglePassword = tw.div`
  absolute
  inset-y-0
  right-0
  pr-3
  flex
  items-center
  text-sm
  select-none
`;

const SpanTogglePassword = tw.span`
  cursor-pointer 
  font-semibold 
  uppercase 
  text-gray-600
  hover:text-gray-400
`;

const InputStyled = styled.input<InputProps>`
  ${tw`block px-3 py-4 border-2 rounded-lg w-full focus:ring-1 focus:outline-none`}
  ${(props) => (props.isError ? tw`border-red-500` : tw`focus:border-black`)}
`;

export const Input = (props: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  if (props.type == 'password')
    return (
      <div tw={'relative'}>
        <InputStyled
          {...props}
          type={isShowPassword ? 'text' : 'password'}
          style={{ paddingRight: '9rem' }}
        />
        <ContainerTogglePassword>
          {isShowPassword ? (
            <SpanTogglePassword onClick={() => setIsShowPassword(false)}>
              {'Sembunyikan'}
            </SpanTogglePassword>
          ) : (
            <SpanTogglePassword onClick={() => setIsShowPassword(true)}>
              {'Tampilkan'}
            </SpanTogglePassword>
          )}
        </ContainerTogglePassword>
      </div>
    );
  return <InputStyled {...props} />;
};
