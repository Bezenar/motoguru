import styles from './Counter.module.scss';
import cn from '../../../helpers/cn';

export interface I_Counter {
    value: number;
}

const Counter: React.FC<Readonly<I_Counter>> = ({value}) => {
    return(
        <div
            className={cn([
                styles.wrapper,
                'bg--primary--before',
                'bg--secondary--before--hover'
            ])}
        >
            <span className={cn([
                'flex jc-center ai-center wid-100 h--full text--heading-sm text--white',
                styles.childWrap
            ])}>
                {value}
            </span>
        </div>
    );
}

export default Counter;
