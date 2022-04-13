import styled, { css } from 'styled-components';
import { breakpoints } from '../constants';
import { HiddenText } from '../pages/delivery/delivery.styles';

export const SolutionsTitle = styled.div`
    margin: 0 0 35px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 0 0 50px;
        font-size: 28px;
    }
`;

export const SolutionsContainer = styled.div`
    margin: 0 0 50px;
`;

export const Solution = styled.div<{ even?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    font-size: 16px;
    ${({ even }) =>
        even &&
        css`
            background: #f5f5f7;
            border-radius: 10px;
        `}

    @media only screen and (min-width: ${breakpoints.DESKTOP_M}px) {
        font-size: 20px;
    }
`;

export const SolutionHead = styled(Solution)`
    color: #1b5b87;
`;

export const SolutionTitle = styled.div`
    width: calc(60% - 15px);
    margin-right: 15px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: calc(80% - 15px);
    }
`;

export const SolutionPrice = styled.div<{ isWide?: boolean }>`
    width: 40%;
    text-align: right;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        ${({ isWide }) =>
            !isWide &&
            css`
                width: 20%;
            `}
    }
`;

export const StyledHiddenText = styled(HiddenText)`
    max-width: 100%;
`;
