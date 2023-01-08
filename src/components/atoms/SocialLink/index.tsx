import cn from 'classnames';
import styles from './SocialLink.module.scss';

export interface I_SocialLink {
    href: string;
    children: React.ReactElement<{}>;
}

const SocialLink: React.FC<Readonly<I_SocialLink>> = ({href, children}) => {
    return(
        <div
            className={cn([
                styles.wrapper,
            ])}
        >
            <a href={href} target="_blank">
                <span className={cn([
                    'flex jc-center ai-center wid-100 h--full',
                    styles.childWrap
                ])}>
                    {children}
                </span>
            </a>
        </div>
    );
}

export default SocialLink;
