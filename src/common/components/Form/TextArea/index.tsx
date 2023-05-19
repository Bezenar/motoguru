import {useContext, useCallback, useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import styles from './Textarea.module.scss';
import {FormContext} from '..';
import useFirstChange from '../../../../hooks/useFirstChange';
import useValidateErrors from '../../../../hooks/useValidate';

export interface I_Textarea {
    dataKey: string;
    required?: boolean;
    errors?: Array<string>;
    validators?: Array<(val: string) => boolean>;
    placeholder?: string;
}

const Textarea: React.FC<Readonly<I_Textarea>> = ({
    dataKey,
    required = false,
    validators = [],
    errors = [],
    placeholder,
}) => {
    const context = useContext(FormContext);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const firstType = useFirstChange(context[dataKey]);

    const handleFocus = useCallback(() => {
        setIsFocused((prev) => !prev);
    }, [isFocused, setIsFocused]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            context.dispatch({[dataKey]: e.target.value});
        },
        [context.dispatch]
    );

    useEffect(() => {
        if (textareaRef.current) setHeight(textareaRef.current.scrollHeight);
    }, [textareaRef, context[dataKey]]);

    const innerErrors = useValidateErrors({
        value: context[dataKey],
        errors,
        validators,
        required,
        deps: [context[dataKey], errors, firstType, validators, required],
    });

    return (
        <div>
            <textarea
                value={context[dataKey]}
                style={{height}}
                placeholder={placeholder}
                required={required}
                ref={textareaRef}
                className={cn([
                    styles.textarea,
                    {[styles.textareaActive]: context[dataKey].length > 0},
                    {[styles.textareaError]: innerErrors.length > 0},
                    {[styles.error]: innerErrors.length > 0 && !isFocused},
                    'text--sm px-4 py-2 text-main',
                ])}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleFocus}
            />

            {innerErrors.length > 0 ? (
                <ul>
                    {innerErrors.map((err, i) => (
                        <li key={`err-${i}`} className={cn('text--xxs mt-1', styles.error)}>
                            {err}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Textarea;
