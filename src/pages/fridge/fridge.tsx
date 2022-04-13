import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../breadcrumbs';
import { MainContainer, EquipmentTitle, UnderlineText } from '../../common.styles';
import { Footer } from '../../footer';
import { Menu } from '../../menu';
import {
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
    QuizCallBackForm,
    QuizCallbackParagraph,
    QuizCallback,
    Features,
    FeatureContainer,
    FeatureParagraph,
    FeatureImage,
} from '../washer/washer.styles';
import { QuizItem } from '../washer/types';
import { CallBackButton, CallBackPhoneInput, CallbackFormContainer } from '../../callback';
import { Solutions } from '../../solutions';
import { StyledHeader, Hero } from './fridge.styles';
import FridgeQuiz from '../../assets/fridge-quiz.png';
import FeatureOne from '../../assets/feature-1.png';
import FeatureTwo from '../../assets/feature-2.png';
import FeatureThree from '../../assets/feature-3.png';
import { CALLBACK_API_URL } from '../../constants';
import { solutions } from './price';

const quizItemsFirst: QuizItem[] = [
    { title: 'Не морозит' },
    { title: 'Покрывается льдом' },
    { title: 'Работает только морозилка' },
    { title: 'Перемораживает' },
    { title: 'Протекает' },
    { title: 'Не выключается' },
    { title: 'Не включается' },
    { title: 'Шумит' },
];

const quizItemsSecond: QuizItem[] = [{ title: 'Сверху' }, { title: 'Снизу' }, { title: 'Сбоку' }];

const quizItemsThird: QuizItem[] = [{ title: 'Самара' }];

export const Fridge = () => {
    const [step, setStep] = useState(1);
    const [quizInformation, setQuizInformation] = useState({ fault: '', type: '', city: '' });
    const [phone, setPhone] = useState('+7');
    const [unmaskedPhone, setUnmaskedPhone] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const onCallbackClick = () => {
        async function fetchInformation() {
            const response = await fetch(CALLBACK_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...quizInformation, phone: unmaskedPhone }),
            });
            setError(!(response.status === 200));
        }
        fetchInformation();
    };

    const onQuizItemFirstBlockClick = (quizItem: QuizItem) => {
        setQuizInformation({ ...quizInformation, fault: quizItem.title });
        setStep(step + 1);
    };

    const onQuizItemSecondBlockClick = (quizItem: QuizItem) => {
        setQuizInformation({ ...quizInformation, type: `Холодильник: ${quizItem.title}` });
        setStep(step + 1);
    };

    const onQuizItemThirdBlockClick = (quizItem: QuizItem) => {
        setQuizInformation({ ...quizInformation, city: quizItem.title });
        setStep(step + 1);
    };

    const handleInputChange = (phone: string, unmaskedPhone: string) => {
        setPhone(phone);
        setUnmaskedPhone(unmaskedPhone);
    };

    return (
        <>
            <StyledHeader backgroundColor='#fceccc'>
                <Menu textColor='#000' />
                <Hero>
                    <Breadcrumbs text='Холодильник' isMain />
                    <EquipmentTitle>
                        Ответьте на 3 вопроса и получите скидку 5% на ремонт
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
                                        key={quizItem.title}
                                        onClick={() => onQuizItemFirstBlockClick(quizItem)}>
                                        {quizItem.title}
                                    </QuizListItem>
                                ))}
                            </QuizList>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Title>Где расположена морозильная камера?</Title>
                            <QuizList>
                                {quizItemsSecond.map((quizItem) => (
                                    <QuizListItem
                                        key={quizItem.title}
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
                                        key={quizItem.title}
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
                            <QuizCallback>
                                <StyledImage src={FridgeQuiz} loading='lazy' />
                                <QuizCallBackForm>
                                    <QuizCallbackParagraph>
                                        Оставьте, пожалуйста, номер телефона, и мы перезвоним вам в
                                        течение 5 минут
                                    </QuizCallbackParagraph>
                                    <CallbackFormContainer>
                                        <CallBackPhoneInput
                                            value={phone}
                                            onChange={handleInputChange}
                                        />
                                        <CallBackButton onClick={onCallbackClick}>
                                            Обратный звонок
                                        </CallBackButton>
                                    </CallbackFormContainer>
                                </QuizCallBackForm>
                            </QuizCallback>
                            <Solutions solutions={solutions} />
                            <Features>
                                <FeatureContainer>
                                    <FeatureParagraph>
                                        Ремонт с выездом <UnderlineText>на дом</UnderlineText>
                                    </FeatureParagraph>
                                    <FeatureImage src={FeatureOne} loading='lazy' />
                                </FeatureContainer>
                                <FeatureContainer>
                                    <FeatureParagraph>
                                        Выезд инженера и диагностика{' '}
                                        <UnderlineText>бесплатно</UnderlineText>
                                    </FeatureParagraph>
                                    <FeatureImage src={FeatureTwo} loading='lazy' />
                                </FeatureContainer>
                                <FeatureContainer>
                                    <FeatureParagraph>
                                        Гарантия <UnderlineText>1 год</UnderlineText>
                                    </FeatureParagraph>
                                    <FeatureImage src={FeatureThree} loading='lazy' />
                                </FeatureContainer>
                            </Features>
                        </>
                    )}
                </Quiz>
            </MainContainer>
            <Footer />
        </>
    );
};

export default Fridge;
