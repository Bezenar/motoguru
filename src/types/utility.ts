namespace N_Utility {
    export type NestedKeyOf<T extends object> = 
        {[K in keyof T]: T[K] extends object 
            ? NestedKeyOf<T[K]>
            : K
        }[keyof T];
}

export default N_Utility;
