namespace N_Utility {
    export type NestedKeyOf<ObjectType extends object> = 
        {[Key in keyof ObjectType]: ObjectType[Key] extends object 
            ? NestedKeyOf<ObjectType[Key]>
            : Key
        }[keyof ObjectType];
}

export default N_Utility;