import {useEffect, useRef} from 'react';

export default function useFirstChange(val: string | number | boolean): boolean {
    const value = useRef<string | number | boolean>(val);
    const isFirstType = useRef<boolean>(true);

    useEffect(() => {
        if (val !== value.current) {
            isFirstType.current = false;
        }
    }, [val]);

    return isFirstType.current;
}
