import { FC } from 'react';
import { MainContainer } from '../common.styles';
import { Container } from './header.styles';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ className, backgroundColor = '#1b5b87', children }) => {
    return (
        <Container backgroundColor={backgroundColor} className={className}>
            <MainContainer>{children}</MainContainer>
        </Container>
    );
};

export default Header;
