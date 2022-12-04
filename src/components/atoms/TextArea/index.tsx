import { useCallback, useEffect, useRef, useState } from 'react';
import { LS_THEME_KEY } from '../../../constants/localStorage';
import cn from '../../../_utils/classnames/cn';
import styles from './Textarea.module.scss';

export interface I_Textarea {
    value: string;
    placeholder?: string;
    debounceTime?: number;
    onChange: (val: string) => void;
}

let timer: ReturnType<typeof setTimeout> | null = null;

const Textarea: React.FC<Readonly<I_Textarea>> = ({value, placeholder, debounceTime = 300, onChange}) => {
    const [innerValue, setInnerValue] = useState<string>(value || '');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const firstType = useRef<boolean>(true);

    const handleFocus = useCallback(() => {
        setIsFocused((prev) => {
            return prev = !prev;
        });
    }, [isFocused, setIsFocused]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInnerValue(e.target.value);
        firstType.current = false;

        if(timer) window.clearTimeout(timer);

        timer = setTimeout(() => {
            onChange(e.target.value);
        }, debounceTime);

    }, [setInnerValue]);

    useEffect(() => {
        if(textareaRef.current) {
            setHeight(textareaRef.current.scrollHeight);
        }
    }, [textareaRef, value]);

    return(
        <textarea
            value={innerValue}
            style={{height}}
            placeholder={placeholder}
            ref={textareaRef}
            className={cn([
                styles.textarea,
                'text--sm px-4 py-2',
                {'border--input': !isFocused},
                {'text--white': localStorage.getItem(LS_THEME_KEY) === 'd'},
                {'text--black': localStorage.getItem(LS_THEME_KEY) === 'l'},
                {'border--white text--white': isFocused && localStorage.getItem(LS_THEME_KEY) === 'd'},
                {'border--black text--black': isFocused && localStorage.getItem(LS_THEME_KEY) === 'l'},
            ])}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
        />
    );
}

export default Textarea;
