import { FC } from 'react';
import { Container } from './advantage.styles';
import { AdvantageProps } from './types';

export const Advantage: FC<AdvantageProps> = ({ title }) => {
    return <Container>{title}</Container>;
};

export default Advantage;
