import styles from './ExerciseRow.module.scss';
import cn from "../../../_utils/classnames/cn";
import Text from '../Text';

export interface I_ExerciseRow {
    head?: boolean;
    item: {
        category: string;
        date: string;
        time: string;
        place: string;
    };
}

const ExerciseRow: React.FC<Readonly<I_ExerciseRow>> = ({head = false, item}) => {
    return(
        <div
            className={cn([
                styles.row,
                'flex nowrap text--center',
                {'border--primary': !head},
                {[styles.borderTop]: !head},
            ])}
        >
            <div className="wid-25">
                <Text type="line" text={item.category} textSize={head ? 'heading-md' : 'sm'} />
            </div>
            <div className="wid-25">
                <Text type="line" text={item.date} textSize={head ? 'heading-md' : 'sm'} />
            </div>
            <div className="wid-25">
                <Text type="line" text={item.time} textSize={head ? 'heading-md' : 'sm'} />
            </div>
            <div className="wid-25">
                <Text type="line" text={item.place} textSize={head ? 'heading-md' : 'sm'} />
            </div>
        </div>
    );
}

export default ExerciseRow;
