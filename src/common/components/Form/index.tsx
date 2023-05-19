import {useCallback, useReducer, createContext, ReactElement, ReactNode} from 'react';
import InputField from './InputField';
import Submit from './Submit';
import Textarea from './TextArea';
import Select from './Select';
import Text from '../Text';
import Success from '../../assets/icons/UI/Success';
import Loader from '../Loader';
import {useTranslation} from 'react-i18next';

export interface I_FormWrapper<T> {
    data: T;
    width: number;
}
const FormContext = createContext<I_FormWrapper<any>['data']>({});

function Form<T = any>({
    data,
    width,
    children,
}: I_FormWrapper<T> & {children: ReactNode}): ReactElement<I_FormWrapper<T>> {
    type T_State = T & {isInProgress?: boolean; isSended?: boolean};
    const [state, dispatch] = useReducer<(prev: T_State, next: Partial<T_State>) => T_State, T>(
        (prev: T_State, next: Partial<T_State>) => ({...prev, ...next}),
        {
            ...data,
            isInProgress: false,
            isSended: false,
        },
        (state: T_State) => state
    );

    const {t} = useTranslation();

    const handleUpdateState = useCallback(
        (next: Partial<T_State>) => {
            dispatch(next);
        },
        [dispatch]
    );

    return (
        <FormContext.Provider value={{...state, dispatch: handleUpdateState}}>
            <div className="pa-12 bg-main-transparent" style={{maxWidth: width}}>
                {state.isInProgress ? (
                    <div className="flex wid-100 ai-center jc-center">
                        <Loader />
                    </div>
                ) : state.isSended ? (
                    <div className="flex dir-col nowrap wid-100 ai-center jc-center">
                        <Success />
                        <Text type="paragraph" textSize="md" text={t('common.sended')} />
                    </div>
                ) : (
                    children
                )}
            </div>
        </FormContext.Provider>
    );
}

Form.InputField = InputField;
Form.Textarea = Textarea;
Form.Submit = Submit;
Form.Select = Select;

export {Form, FormContext};
