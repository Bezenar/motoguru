import cn from 'classnames';
import styles from './Loader.module.scss';
import Gear from '../../assets/icons/UI/Gear';

const Loader: React.FC = ({}) => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.central, styles.rotate)}>
                <Gear barCount={12} gearColor={'primary'} />
            </div>

            <div className={cn(styles.right, styles.rotate)}>
                <Gear barCount={8} gearColor={'secondary'} />
            </div>

            <div className={cn(styles.small, styles.rotate)}>
                <Gear barCount={8} gearColor={'secondary'} />
            </div>

            <div className={cn(styles.left, styles.rotate)}>
                <Gear barCount={8} gearColor={'secondary'} />
            </div>
        </div>
    );
};

export default Loader;
