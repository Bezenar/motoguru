import cn from 'classnames';
import Text from '../../atoms/Text';
import styles from './CategoryCard.module.scss';

export interface I_CategoryCard {
    category: string;
    transport: string;
}

const CategoryCard: React.FC<Readonly<I_CategoryCard>> = ({category, transport}) => {
    return (
        <div className={cn('flex dir-col pa-12 wid-25 ai-center jc-sb', styles.wrapper)}>
            <Text type="paragraph" text={category} textSize="title-md" />
            <Text type="paragraph" text={transport} extraClasses="my-3"/>
            <div className={styles.separator}></div>
        </div>
    );
}

export default CategoryCard;
