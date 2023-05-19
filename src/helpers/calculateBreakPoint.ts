import {BREAK_POINTS} from '../constants/common';
import type { T_BreakPointsKeys } from '../types';

export default function calculateBreakPoint(): T_BreakPointsKeys {
    const width: number = window.innerWidth;
    const keys = Object.keys(BREAK_POINTS);

    let result: T_BreakPointsKeys = 'xs';

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i] as T_BreakPointsKeys;

        if (key !== 'xl') {
            if (width >= BREAK_POINTS[key].min && width < BREAK_POINTS[key].max) {
                result = key;
                break;
            }
        } else {
            if (width >= BREAK_POINTS[key].min) {
                result = key;
                break;
            }
        }
    }
    console.log(width, result);
    return result;
}
