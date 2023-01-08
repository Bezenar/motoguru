namespace N_Common {
    export type T_Route = {
        path: string;
        element: React.ReactElement;
        name: string;
    }

    export type T_LangShort = 'en' | 'rus' | 'lv';

    export type T_LangObj = {
        id: number | string;
        langShort: T_LangShort;
        value: React.ReactElement<{}>
    }
}

export default N_Common;