import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import BreadcrumbArrowWhite from '../assets/breadcrumb-arrow-white.png';
import BreadcrumbArrow from '../assets/breadcrumb-arrow.png';
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

export const ListElement = styled.li<{ $isMain: boolean }>`
    display: flex;
    align-items: center;
    font-size: 16px;

    &:not(:last-child):after {
        content: '';
        display: block;
        width: 17px;
        height: 6px;
        margin: 0 10px;
        ${({ $isMain }) =>
            $isMain
                ? css`
                      background: url(${BreadcrumbArrow}) center center no-repeat;
                  `
                : css`
                      background: url(${BreadcrumbArrowWhite}) center center no-repeat;
                  `}
    }
`;

export const StyledLink = styled(Link)<{ $isMain: boolean }>`
    ${({ $isMain }) =>
        $isMain
            ? css`
                  color: #9e9e9e;
              `
            : css`
                  color: #fff;
              `}
    text-decoration: none;
    transition: border-bottom-color 0.3s;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus {
        ${({ $isMain }) =>
            $isMain
                ? css`
                      border-bottom: 1px solid #9e9e9e;
                  `
                : css`
                      border-bottom: 1px solid #fff;
                  `}
    }
`;

export const ListElementLast = styled.li`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const ListElementLastText = styled.span<{ $isMain: boolean }>`
    ${({ $isMain }) =>
        $isMain
            ? css`
                  color: #4d4d4d;
              `
            : css`
                  color: #9e9e9e;
              `}
`;
