import styled from 'styled-components';
import HeroDishwasher from '../../assets/hero-dishwasher.png';
import HeroDishwasherM from '../../assets/hero-dishwasher-m.png';
import { breakpoints } from '../../constants';
import { HeaderEquipment } from '../../common.styles';

export const StyledHeader = styled(HeaderEquipment)`
    background-image: url(${HeroDishwasherM});

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        background-image: url(${HeroDishwasher});
    }
`;
export const Hero = styled.div``;
