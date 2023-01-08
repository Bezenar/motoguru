import {useMemo} from 'react';
import Switch from '../../../components/atoms/ThemeSwitch';
import {LS_THEME_KEY} from '../../../constants/localStorage';

interface I_StoryThemeSwitcher {
    Story: any;
    applyBg?: boolean;
    height?: number;
}

const StoryThemeSwitcher: React.FC<Readonly<I_StoryThemeSwitcher>> = ({Story, applyBg = false, height = 'auto'}) => {
    const bgClass = useMemo(() => {
        return applyBg && window.themes.isDark ? 'bg--black' : 'bg--white'
    }, [window.themes.isDark]);

    return(
        <div className={bgClass} style={{height}}>
            <div className="flex ai-center px-2 py-3 bg--grey wid-100" style={{cursor: 'pointer'}}>
                <span className='mr-2'>Dark theme </span><Switch />
            </div>
            <div className="pa-10">
                <Story />
            </div>
        </div>
    );
}

export default StoryThemeSwitcher;
