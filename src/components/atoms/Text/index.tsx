import {createElement, useContext, useMemo} from 'react';
import {AppContext} from '../../../App';
import cn from '../../../_utils/classnames/cn';

export interface I_Text {
    type: 'line' | 'paragraph',
    text: string;
    textSize?: 'xl' | 'md' | 'sm' | 'xs' | 'xxs' | 'title-xl' | 'title-md' | 'title-sm' | 'heading-xl' | 'heading-md' |
        'heading-sm';
    textColor?: 'white' | 'black' | 'grey' | 'primary' | 'secondary';
}

const Text: React.FC<Readonly<I_Text>> = ({type, text, textSize = 'sm', textColor = null}) => {
    const {theme} = useContext(AppContext);

    return createElement(
        type === 'line' ? 'span' : 'p',
        {
            class: cn([
                `text--${textSize}`,
                {[`text--${textColor}`]: !!textColor},
                {'text--black': theme === 'd' && !textColor},
                {'text--white': theme === 'l' && !textColor}
            ])
        },
        [text]
    );
}

export default Text;
