import styled from 'styled-components';
import { breakpoints } from '../constants';

export const Link = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 15px;
    transition: color 0.3s;

    &:hover {
        color: #ed6662;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_SM}px) {
        font-size: 20px;
    }

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        font-size: 24px;
    }
`;
