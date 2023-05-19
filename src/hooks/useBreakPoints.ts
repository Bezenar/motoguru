import {useEffect} from 'react';
import calculateBreakPoint from '../helpers/calculateBreakPoint';

import type {T_BreakPointsKeys} from '../types';

export default function useBreakPoints(
    storNew: (br: T_BreakPointsKeys) => void
): void {
    const handleResize = () => {
        const result = calculateBreakPoint();
        storNew(result);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
}
