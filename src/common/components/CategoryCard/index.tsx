import cn from 'classnames';
import Text from '../Text';
import styles from './CategoryCard.module.scss';

export interface I_CategoryCard {
    width: '25' | '50' | '75' | '100' | '33' | '66';
    category: string;
    transport: string;
    border: 'left' | 'right' | 'none' | 'bottom';
}

const CategoryCard: React.FC<Readonly<I_CategoryCard>> = ({width, category, transport, border}) => {
    return (
        <div 
            className={cn(
                `flex dir-col pa-12 wid-${width} ai-center jc-sb`,
                {[styles.borderRight]: border === 'right'},
                {[styles.borderLeft]: border === 'left'},
                {[styles.borderBottom]: border === 'bottom'}
            )}
        >
            <Text type="paragraph" text={category} textSize="title-md" />
            <Text type="paragraph" text={transport} extraClasses="my-3"/>
            <div className={styles.separator}></div>
        </div>
    );
}

export default CategoryCard;
