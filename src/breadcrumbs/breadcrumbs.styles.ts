import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BreadcrumbArrowWhite from '../assets/breadcrumb-arrow-white.png';
import { breakpoints } from '../constants';

export const Container = styled.div`
    padding: 0 0 25px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        padding: 0 0 40px;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 0 0 60px;
    }
`;

export const ListContainer = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const ListElement = styled.li`
    display: flex;
    align-items: center;
    font-size: 16px;

    &:not(:last-child):after {
        content: '';
        display: block;
        width: 17px;
        height: 6px;
        margin: 0 10px;
        background: url(${BreadcrumbArrowWhite}) center center no-repeat;
    }
`;

export const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    transition: border-bottom-color 0.3s;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus {
        border-bottom: 1px solid #fff;
    }
`;

export const ListElementLast = styled.li`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const ListElementLastText = styled.span`
    color: #9e9e9e;
`;
