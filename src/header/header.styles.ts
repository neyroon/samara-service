import styled from 'styled-components';

export const Container = styled.div<{
    backgroundColor: string;
}>`
    ${({ backgroundColor }) => `
        background-color: ${backgroundColor};
        border-radius: 0 0 40px 40px;
  `}
`;
