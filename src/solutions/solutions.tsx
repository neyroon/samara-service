import { FC, useState } from 'react';
import { DownText } from '../pages/delivery/delivery.styles';
import {
    SolutionHead,
    SolutionsContainer,
    SolutionsTitle,
    SolutionTitle,
    SolutionPrice,
    Solution,
    StyledHiddenText,
} from './solutions.styles';
import { SolutionsProps } from './types';

export const Solutions: FC<SolutionsProps> = ({
    title = 'Стоимость возможных работ при данной неисправности, от:',
    solutions,
}) => {
    const [textVisible, setTextVisible] = useState(false);

    return (
        <>
            <SolutionsTitle>{title}</SolutionsTitle>
            <SolutionsContainer>
                <SolutionHead>
                    <SolutionTitle>Неисправность</SolutionTitle>
                    <SolutionPrice>Стоимость</SolutionPrice>
                </SolutionHead>
                {solutions.map((solution, i) => (
                    <Solution key={solution.title} even={(i + 1) % 2 !== 0}>
                        <SolutionTitle>{solution.title}</SolutionTitle>
                        <SolutionPrice isWide={solution.bold}>
                            {solution.bold ? (
                                <>
                                    <DownText onClick={() => setTextVisible(!textVisible)}>
                                        <b>{solution.price}</b>
                                    </DownText>
                                    {textVisible && (
                                        <StyledHiddenText>
                                            При ремонте выезд не оплачивается, но если ремонт не
                                            целесообразен или вы по каким либо причинам передумали
                                            чинить, то цена услуги составит 799 руб
                                        </StyledHiddenText>
                                    )}
                                </>
                            ) : (
                                `${solution.price} руб`
                            )}
                        </SolutionPrice>
                    </Solution>
                ))}
            </SolutionsContainer>
        </>
    );
};

export default Solutions;
