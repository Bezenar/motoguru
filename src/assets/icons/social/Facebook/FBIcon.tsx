import {SOCIAL_ICON_DARK, SOCIAL_ICON_LIGHT} from '../../../constants';
import {T_Icon} from '../../../../types/icon';

const FBIcon: React.FC<Readonly<T_Icon>> = ({theme}) => {
    const color = theme === 'dark' ? SOCIAL_ICON_DARK : SOCIAL_ICON_LIGHT;

    return(
        <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="Rectangle_4" data-name="Rectangle 4" fill="none" stroke={color} stroke-linejoin="round" stroke-width="2">
                <rect width="24" height="24" rx="3" stroke="none"/>
                <rect x="1" y="1" width="22" height="22" rx="2" fill="none"/>
            </g>
            <path fill="none" stroke={color} id="Path_5" data-name="Path 5" d="M3444.011,222.008H3442v3h2.013v8.017H3447v-8.017h2.748l.234-3H3447v-2.027h2.982V217s-3.483-.75-4.977.5S3444.011,222.008,3444.011,222.008Z" transform="translate(-3434 -213)" stroke-linejoin="round" stroke-width="1"/>
        </svg>
    );
}

export default FBIcon;
