import {FC} from 'react';
import cn from 'classnames';
import styles from './HeaderWithText.module.scss';
import Text from '../../atoms/Text';

export interface I_HeaderWithText {
    heading: string;
    children: JSX.Element | Array<JSX.Element>;
}

const HeaderWithText: FC<Readonly<I_HeaderWithText>> = ({heading, children}) => {
    return (
        <div className="container flex ai-center dir-col py-12">
            <Text type="paragraph" textSize="title-sm" text={heading} />
            <div className={cn([styles.separator, 'my-3'])}></div>
            {children}
        </div>
    );
}

export default HeaderWithText;
