import {UI_ICON_DARK, UI_ICON_LIGHT} from '../../../constants';
import {LS_THEME_KEY} from '../../../../constants/localStorage';
import {useMemo} from 'react';

const Envelope: React.FC<{}> = ({}) => {
    const color = useMemo(() => {
        return localStorage.getItem(LS_THEME_KEY) === 'd' ? UI_ICON_DARK : UI_ICON_LIGHT
    }, [localStorage.getItem(LS_THEME_KEY)]);

    return(
        <svg id="Envelope" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect id="Rectangle_8" data-name="Rectangle 8" width="24" height="24" fill="none"/>
            <g id="Rectangle_7" data-name="Rectangle 7" transform="translate(0 3)" fill="none" stroke={color} stroke-linejoin="round" stroke-width="2">
                <rect width="24" height="18" rx="2" stroke="none"/>
                <rect x="1" y="1" width="22" height="16" rx="1" fill="none"/>
            </g>
            <path id="Path_7" data-name="Path 7" d="M3034.11,144.175s9.029,8.807,10.887,8.813,11.291-9.137,11.291-9.137" transform="translate(-3033 -139)" fill="none" stroke={color} stroke-width="2"/>
        </svg>
    );
}

export default Envelope;
