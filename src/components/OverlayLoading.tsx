import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface OverlayLoadingProps {
  isLoading: boolean;
  title: string;
  description?: string;
}

const LoadingContainer = styled.div<OverlayLoadingProps>`
  ${(props) => (props.isLoading ? tw`block` : tw`hidden`)}
  ${tw`fixed w-full h-full inset-0 z-50 bg-black bg-opacity-60 transition`}
`;

const Spinner = styled.div`
  ${tw`animate-spin ease-linear rounded-full border-black h-10 w-10`}
  border-top-color: #fff;
  border-width: 6px;
`;

const OverlayLoading: React.FC<OverlayLoadingProps> = (props) => {
  return (
    <LoadingContainer {...props}>
      <div tw={'h-full grid justify-center content-center'}>
        <div tw={'flex flex-col items-center p-8 bg-white rounded-lg max-w-sm mx-auto'}>
          <Spinner tw={'mb-6'} />
          <h3 tw={'text-xl text-center font-semibold'}>{props.title}</h3>
          {props.description && <h6 tw={'text-center mt-4'}>{props.description}</h6>}
        </div>
      </div>
    </LoadingContainer>
  );
};

export default OverlayLoading;
