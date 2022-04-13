import styled, { css } from 'styled-components';
import HeroWasher from '../../assets/hero-washer.png';
import HeroWasherM from '../../assets/hero-washer-m.png';
import QuizBackButton from '../../assets/quiz-back-button.png';
import { breakpoints } from '../../constants';
import { HeaderEquipment, UnderlineText } from '../../common.styles';

export const StyledHeader = styled(HeaderEquipment)`
    background-image: url(${HeroWasherM});

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        background-image: url(${HeroWasher});
    }
`;
export const Hero = styled.div``;

export const Quiz = styled.div`
    padding: 20px 20px 60px;
    margin: 0 -20px 50px;
    background: #fff;
    border-radius: 32px;
    font-family: 'TTWellingtons-Medium', sans-serif;
    opacity: 0;
    animation: fadeInText 0.6s ease-out 0.6s;
    animation-fill-mode: forwards;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        padding: 60px 70px 100px;
        margin: -75px 0 50px;
    }
`;

export const Steps = styled.div<{ noButton: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 40px;
    ${({ noButton }) =>
        noButton &&
        css`
            justify-content: flex-end;
        `}
`;

export const StepContainer = styled.div`
    font-size: 16px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 20px;
    }
`;

export const Step = styled.span`
    color: #ed6662;
`;

export const Title = styled.div`
    margin: 0 0 30px;
    font-size: 24px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 36px;
        margin: 0 0 75px;
    }
`;

export const BackButton = styled.button`
    cursor: pointer;
    display: flex;
    display: -ms-flexbox;
    align-items: center;
    -ms-flex-align: center;
    padding: 0;
    margin: 0;
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    line-height: 1;
    text-transform: lowercase;
    color: #afafaf;
    transition: transform 0.3s ease-out;

    &:before {
        content: '';
        display: block;
        width: 21px;
        height: 8px;
        margin-right: 10px;
        background: url(${QuizBackButton}) center no-repeat;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 20px;
    }
`;

export const QuizList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const QuizListItem = styled.div`
    cursor: pointer;
    margin: 5px;
    padding: 10px 15px;
    background: #f5f5f7;
    border-radius: 10px;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover,
    &:focus {
        background: #ed6662;
        color: #fff;
    }
`;

export const StyledUnderlineText = styled(UnderlineText)`
    color: #ed6662;
`;

export const StyledImage = styled.img`
    display: none;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 290px;
        margin: 0 0 40px;
        border-radius: 32px;
    }
`;

export const QuizCallback = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 35px;

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        margin: 0 0 70px;
    }
`;

export const QuizCallBackForm = styled.div`
    padding: 30px 20px;
    background: #1b5b87;
    border-radius: 12px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        display: flex;
        align-items: center;
        border-radius: 32px;
    }
`;

export const QuizCallbackParagraph = styled.p`
    margin: 0 0 30px;
    font-size: 18px;
    color: #fff;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        max-width: 325px;
        margin: 0 15px 0 0;
        font-size: 20px;
    }
`;

export const Features = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        flex-direction: row;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        font-size: 20px;
    }
`;

export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #fceccc;
    border-radius: 12px;
    margin: 0 0 15px;

    @media only screen and (min-width: ${breakpoints.MOBILE_L}px) {
        justify-content: space-between;
        width: calc(33.33% - 20px);
        margin: 0 20px 20px 0;
    }

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        width: calc(33.33% - 30px);
        margin: 0 30px 40px 0;
    }
`;

export const FeatureParagraph = styled.p`
    padding: 25px 30px 5px;
`;

export const FeatureImage = styled.img`
    max-width: 100%;
    margin: 0 0 0 auto;
`;
