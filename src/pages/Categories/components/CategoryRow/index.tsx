import List from '../../../../common/components/List';
import CategoryCard, { I_CategoryCard } from '../../../../common/components/CategoryCard';
import cn from 'classnames';
import { CSSProperties, useContext, useMemo } from 'react';
import { T_AppContext } from '../../../../types';
import { AppContext } from '../../../../App';

export interface I_CategoryRow {
    category: string;
    transport: string;
    listHeading: string;
    list: Record<number, {option: string}>;
    reverse: boolean;
}

type T_Responsive = {
    categoryCard: {
        width: I_CategoryCard['width'],
        border: I_CategoryCard['border'],
    },
    listMargin: CSSProperties,
}

const CategoryRow: React.FC<Readonly<I_CategoryRow>> = ({category, transport, listHeading, list, reverse}) => {
    const {breakPoint} = useContext<T_AppContext>(AppContext);

    const responsive = useMemo<T_Responsive>(() => {
        switch(breakPoint) {
            case 'xs':
            case 'sm':
            case 'md': return {
                categoryCard: {
                    width: '100',
                    border: 'none',
                },
                listMargin: {},
            };
            case 'lg':
            case 'xl': {
                return {
                    categoryCard: {
                        width: '25',
                        border: reverse ? 'left' : 'right',
                    },
                    listMargin: {[reverse ? 'marginRight' : 'marginLeft']: '10%'},
                };
            }
        }
    }, [breakPoint]);

    return (
        <div className={cn('flex jc-center py-4', {['dir-rowrev']: reverse})}>
            <CategoryCard width={responsive.categoryCard.width} category={category} transport={transport} border={responsive.categoryCard.border} />
            <div className="flex dir-col ai-center jc-sa" style={responsive.listMargin}>
                <List head={listHeading} list={Object.values(list).map((o) => o.option)} />
            </div>
        </div>
    );
};

export default CategoryRow;
