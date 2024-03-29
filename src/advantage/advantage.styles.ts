import styled from 'styled-components';
import { breakpoints } from '../constants';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 86px;
    font-size: 18px;
    text-align: center;
    padding: 15px;
    margin: 0 0 10px;
    opacity: 0;
    animation: fadeInText 0.6s ease-out 0.6s;
    animation-fill-mode: forwards;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 5px;
        font-size: 22px;
    }
`;
