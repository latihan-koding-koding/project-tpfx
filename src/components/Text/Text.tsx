import styled from 'styled-components';

import { TextPropsInterface } from './Text.type';

const StyledP = styled.p<TextPropsInterface>`
  font-family: ${(props) => props.fontFamily || 'Nunito Sans'}};
  font-size: ${(props) => `${props.fontSize || 14}px`};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  overflow: ${(props) => (props.isEllipsis ? 'hidden' : 'unset')};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
  text-overflow: ${(props) => (props.isEllipsis ? 'ellipsis' : 'unset')};
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  letter-spacing: 0.25px !important;  
`;

const Text = (props: TextPropsInterface) => {
  return (
    <StyledP {...props} className={props.className}>
      {props.children}
    </StyledP>
  );
};

export default Text;
