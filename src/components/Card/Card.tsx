import React from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  background-color: #535353;
  border-radius: 12px;
`;
interface CardPropsInterface {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card: React.FC<CardPropsInterface> = ({ children, className, style, onClick }) => {
  return (
    <StyledCardContainer className={className} style={style} onClick={onClick}>
      {children}
    </StyledCardContainer>
  );
};

export default Card;
