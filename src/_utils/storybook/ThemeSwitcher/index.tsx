import {useState, useMemo} from 'react';
import Switch from '../../../components/atoms/Switch';
import {LS_THEME_KEY} from '../../../constants/localStorage';

interface I_StoryThemeSwitcher {
    Story: any;
    applyBg?: boolean;
}

const StoryThemeSwitcher: React.FC<Readonly<I_StoryThemeSwitcher>> = ({Story, applyBg = false}) => {
    const [checked, setChecked] = useState<boolean>(localStorage.getItem(LS_THEME_KEY) === 'd' ?? false);

    const bgClass = useMemo(() => {
        return applyBg && localStorage.getItem(LS_THEME_KEY) === 'd' ? 'bg--black' : 'bg--white'
    }, [localStorage.getItem(LS_THEME_KEY)]);

    const toggle = () => {
        setChecked(prev => !prev);
    }

    return(
        <div className={bgClass}>
            <div className="flex ai-center px-2 py-3 bg--grey wid-100" style={{cursor: 'pointer'}}>
                <span className='mr-2'>Dark theme </span><Switch checked={checked} onChange={toggle} />
            </div>
            <div className="pa-10">
                <Story />
            </div>
        </div>
    );
}

export default StoryThemeSwitcher;
