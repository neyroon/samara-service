import { useState } from 'react';
import { Breadcrumbs } from '../../breadcrumbs';
import { MainContainer, EquipmentTitle, UnderlineText } from '../../common.styles';
import { Footer } from '../../footer';
import { Menu } from '../../menu';
import { QuizItem } from './types';
import {
    StyledHeader,
    Hero,
    Quiz,
    Steps,
    BackButton,
    StepContainer,
    Step,
    Title,
    QuizList,
    QuizListItem,
    StyledUnderlineText,
    StyledImage,
} from './washer.styles';
import WasherQuiz from '../../assets/washer-quiz.png';

const quizItemsFirst: QuizItem[] = [
    { title: 'Течет' },
    { title: 'Не открывается' },
    { title: 'Не греет воду' },
    { title: 'Не сливает воду' },
    { title: 'Не отжимает' },
    { title: 'Сильно шумит' },
    { title: 'Не включается' },
    { title: 'Не заливает воду' },
    { title: 'Не вращается барабан' },
];

const quizItemsSecond: QuizItem[] = [
    { title: 'Горизонтальная' },
    { title: 'Вертикальная' },
    { title: 'Не знаю' },
];

const quizItemsThird: QuizItem[] = [
    { title: 'Самара' },
    { title: 'Ближайшая Самарская область(10 км от Самары)' },
];

export const Washer = () => {
    const [step, setStep] = useState(1);
    const [quizInformation, setQuizInformation] = useState({ fault: '', type: '', city: '' });

    const onQuizItemFirstBlockClick = (quizItem: QuizItem) => {
        setQuizInformation({ ...quizInformation, fault: quizItem.title });
        setStep(step + 1);
    };

    const onQuizItemSecondBlockClick = (quizItem: QuizItem) => {
        setQuizInformation({ ...quizInformation, type: quizItem.title });
        setStep(step + 1);
    };

    const onQuizItemThirdBlockClick = (quizItem: QuizItem) => {
        setQuizInformation({ ...quizInformation, city: quizItem.title });
        setStep(step + 1);
    };

    return (
        <>
            <StyledHeader backgroundColor='#fceccc'>
                <Menu textColor='#000' />
                <Hero>
                    <Breadcrumbs text='Стиральная машина' isMain />
                    <EquipmentTitle>
                        Ответьте на 3 вопроса и получите <UnderlineText>скидку 5%</UnderlineText> на
                        ремонт
                    </EquipmentTitle>
                </Hero>
            </StyledHeader>
            <MainContainer>
                <Quiz>
                    <Steps noButton={step === 1}>
                        {step > 1 && (
                            <BackButton onClick={() => setStep(step - 1)}>назад</BackButton>
                        )}
                        <StepContainer>
                            <Step>{step}</Step> / 4
                        </StepContainer>
                    </Steps>
                    {step === 1 && (
                        <>
                            <Title>Какая у вас неисправность?</Title>
                            <QuizList>
                                {quizItemsFirst.map((quizItem) => (
                                    <QuizListItem
                                        onClick={() => onQuizItemFirstBlockClick(quizItem)}>
                                        {quizItem.title}
                                    </QuizListItem>
                                ))}
                            </QuizList>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Title>Какой тип загрузки у стиральной машины?</Title>
                            <QuizList>
                                {quizItemsSecond.map((quizItem) => (
                                    <QuizListItem
                                        onClick={() => onQuizItemSecondBlockClick(quizItem)}>
                                        {quizItem.title}
                                    </QuizListItem>
                                ))}
                            </QuizList>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <Title>Где вы находитесь?</Title>
                            <QuizList>
                                {quizItemsThird.map((quizItem) => (
                                    <QuizListItem
                                        onClick={() => onQuizItemThirdBlockClick(quizItem)}>
                                        {quizItem.title}
                                    </QuizListItem>
                                ))}
                            </QuizList>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <Title>
                                Спасибо! Мы закрепили за вами{' '}
                                <StyledUnderlineText>скидку 5%</StyledUnderlineText> на ремонт
                            </Title>
                            <StyledImage src={WasherQuiz} loading='lazy' />
                        </>
                    )}
                </Quiz>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Washer;
