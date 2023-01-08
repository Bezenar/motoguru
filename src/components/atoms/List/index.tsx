import {Fragment} from 'react';
import cn from 'classnames';
import Text from '../Text';
import styles from './List.module.scss';

export interface I_List {
    head?: string;
    list: Array<string>
}

const List: React.FC<Readonly<I_List>> = ({head = null, list}) => {
    return(
        <Fragment>
            {head ? (<Text type="paragraph" text={head} textSize="heading-sm" />) : null}
            <ul className={cn([styles.list, 'text--primary'])}>
                {list.map((row) => (
                    <li key={row}><Text type="line" text={row} textSize="heading-sm" /></li>
                ))}
            </ul>
        </Fragment>
    );
}

export default List;
