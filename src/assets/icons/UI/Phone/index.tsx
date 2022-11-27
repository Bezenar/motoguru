import {useMemo} from 'react';
import {LS_THEME_KEY} from '../../../../constants/localStorage';
import {UI_ICON_DARK, UI_ICON_LIGHT} from '../../../constants';

const Phone: React.FC<{}> = ({}) => {
    const color = useMemo(() => {
        return localStorage.getItem(LS_THEME_KEY) === 'd' ? UI_ICON_DARK : UI_ICON_LIGHT
    }, [localStorage.getItem(LS_THEME_KEY)]);

    return(
        <svg id="Phone" xmlns="http://www.w3.org/2000/svg" width="24" height="24.012" viewBox="0 0 24 24.012">
            <rect id="Rectangle_10" data-name="Rectangle 10" width="24" height="24" transform="translate(0 0.012)" fill="none"/>
            <path id="1" d="M15.74,1.289l1.564.772c5.793,3.02-2.8,20.944-9.31,20.944a3.129,3.129,0,0,1-1.317-.284l-1.542-.755,2.9-5.594,1.54.754a1.375,1.375,0,0,0,.6.134c2.561,0,6.841-8.2,4.241-9.6L12.865,6.9,15.74,1.289ZM7.994,24c5.68,0,12.221-11.114,12.221-17.832,0-2.419-.833-4.146-2.457-4.992L15.376,0,11.519,7.347l2.437,1.2c1.439.772-2.409,8.424-3.956,7.68L7.6,15.049l-3.816,7.36s2.36,1.162,2.476,1.215A4.121,4.121,0,0,0,7.994,24" transform="translate(0.215)" fill={color} fill-rule="evenodd"/>
        </svg>
    );
}

export default Phone;
