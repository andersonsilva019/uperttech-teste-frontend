import styled, { css } from 'styled-components';

interface IContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  disabledCursorPointer?: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #eee;
  color: #666360;
  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.primary};
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;
