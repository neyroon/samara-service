import styled, { css } from 'styled-components';
import { breakpoints } from '../constants';
import { MainContainer } from '../common.styles';
import { PhoneLink } from '../common.styles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    color: #9e9e9e;
    background-color: #1d1d1f;
    padding: 35px 20px;
`;

export const StyledMainContainer = styled(MainContainer)`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        flex-wrap: nowrap;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export const StyledSpan = styled.span<{ fontSize: string }>`
    ${({ fontSize }) => `
        font-size: ${fontSize};
    `}
`;

export const StyledLink = styled(Link)<{ fontSize: string }>`
    ${({ fontSize }) => css`
        font-size: ${fontSize};
    `}
`;

export const StyledPhoneLink = styled(PhoneLink)`
    order: 0;
    margin: 0 0 30px;
    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        width: 100%;
    }
`;
