import styled from 'styled-components';
import Fridge from '../../assets/hero-fridge.png';
import FridgeM from '../../assets/hero-fridge-m.png';
import { breakpoints } from '../../constants';
import { HeaderEquipment } from '../../common.styles';

export const StyledHeader = styled(HeaderEquipment)`
    background-image: url(${FridgeM});

    @media only screen and (min-width: ${breakpoints.DESKTOP_S}px) {
        background-image: url(${Fridge});
    }
`;
export const Hero = styled.div``;
