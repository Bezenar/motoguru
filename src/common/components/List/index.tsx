import {Fragment} from 'react';
import cn from 'classnames';
import Text from '../Text';
import styles from './List.module.scss';

export interface I_List {
    head?: string;
    list: Array<string>;
}

const List: React.FC<Readonly<I_List>> = ({head = null, list}) => {
    return (
        <Fragment>
            {head ? <Text type="paragraph" text={head} textSize="heading-sm" extraClasses="pb-8" /> : null}
            <ul className={cn([styles.list, 'text--primary flex dir-col ai-center jc-sa nowrap'])}>
                {list.map((row, i) => (
                    <li key={`${row}-${i}`}>
                        <Text type="line" text={row} textSize="heading-sm" />
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default List;
