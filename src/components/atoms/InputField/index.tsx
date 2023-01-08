import {useCallback, useMemo, useRef, useState} from 'react';
import {LS_THEME_KEY} from '../../../constants/localStorage';
import cn from 'classnames';
import styles from './InputField.module.scss'

export interface I_InputField {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    errors?: Array<string>;
    validators?: Array<(val: string) => boolean>;
    debounceTime?: number;
}

let timer: ReturnType<typeof setTimeout> | null = null;

const InputField: React.FC<Readonly<I_InputField>> = ({
    value,
    placeholder,
    debounceTime = 300,
    required = false,
    errors = [],
    validators = [],
    onChange,
}) => {
    const [innerValue, setInnerValue] = useState<string>(value || '');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const firstType = useRef<boolean>(true);

    const innerErrors = useMemo(() => {
        const err: Array<string> = [];
        if(required && innerValue.length === 0 && !firstType.current) err.push('This field is required');
        validators.forEach((validator, i) => {
            if(validator(innerValue)) err.push(errors[i]);
        });
        return err;
    }, [innerValue, errors, firstType.current, validators, required]);

    const handleFocus = useCallback(() => {
        setIsFocused((prev) => {
            return prev = !prev;
        });
    }, [isFocused, setIsFocused]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
        firstType.current = false;

        if(timer) window.clearTimeout(timer);

        if(innerErrors.length === 0) {
            timer = setTimeout(() => {
                onChange(e);
            }, debounceTime);
        }
    }, [value, onChange]);

    return(
        <div>
            <label
                className={cn([
                    styles.label,
                    {'border--input': !isFocused},
                    {'border--white': isFocused && localStorage.getItem(LS_THEME_KEY) === 'dark'},
                    {'border--black': isFocused && localStorage.getItem(LS_THEME_KEY) === 'light'},
                    {'border--error': innerErrors.length > 0}
                ])}
                htmlFor="input"
            >
                <input
                    className={cn([
                        'text--sm',
                        {'text--white':localStorage.getItem(LS_THEME_KEY) === 'dark'},
                        {'text--black':localStorage.getItem(LS_THEME_KEY) === 'light'},
                        styles.input
                    ])}
                    type="text"
                    value={innerValue}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                />
                {required && <span className={cn([styles.required, 'error'])}>*</span>}
            </label>
            
            {innerErrors.length > 0 ? (
                <ul>
                    {innerErrors.map((err, i) => (
                        <li key={`err-${errors.indexOf(err)}`} className="error text--xxs mt-1">
                            {err}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default InputField;
