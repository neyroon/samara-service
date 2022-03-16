import { useEffect, useState } from 'react';
import { breakpoints } from './constants';

export interface WindowSize {
    width: number;
    height: number;
}

const useWindowSize = (): WindowSize => {
    const [state, setState] = useState({
        width: window?.innerWidth,
        height: window?.innerHeight,
    });

    const handler = () =>
        setState({
            width: window?.innerWidth,
            height: window?.innerHeight,
        });

    useEffect(() => {
        window?.addEventListener('resize', handler);
        window?.addEventListener('orientationchange', handler);

        return () => {
            window?.removeEventListener('resize', handler);
            window?.removeEventListener('orientationchange', handler);
        };
    }, []);

    return state;
};

export const useIsMobile = (size = breakpoints.MOBILE_L) => {
    const windowSize = useWindowSize();
    const [isMobile, setIsMobile] = useState(windowSize.width < size);

    useEffect(() => setIsMobile(windowSize.width < size), [windowSize.width]);

    return isMobile;
};
