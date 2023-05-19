import {useEffect, useRef} from 'react';

export default function useDetectFirstRender(): boolean {
    const isFirstRender = useRef<boolean>(true);

    useEffect(() => {
        isFirstRender.current = false;
    }, []);

    return isFirstRender.current;
}
