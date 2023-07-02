/**
 * Modules
 */
import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Constants
 */
import { FormContext } from '..';

/**
 * Components
 */
import Button from '../../Button';

export interface I_Submit {
    onSubmit: (...args: any) => boolean | Promise<boolean>;
    validators: Record<string, Array<(val: string) => boolean>>;
    extraClasses?: string;
}

const Submit: React.FC<Readonly<I_Submit>> = ({ onSubmit, validators, extraClasses = '' }) => {
    const context = useContext(FormContext);
    const { t } = useTranslation();

    const isValid = useMemo(() => {
        return Object.entries(validators).some(([key, validFn]) => validFn.every((fn) => fn(context[key])));
    }, [validators]);

    const handleSubmit = useCallback(async () => {
        if (isValid) {
            const dataCopy = { ...context };
            delete dataCopy.dispatch;
            delete dataCopy.isInProgress;
            delete dataCopy.isSended;

            context.dispatch({ isInProgress: true });

            const success = await onSubmit(dataCopy);

            if (success) {
                context.dispatch({ isInProgress: false, isSended: true });

                setTimeout(() => {
                    Object.keys(dataCopy).forEach((key) => {
                        dataCopy[key] = '';
                    });
                    context.dispatch({ ...dataCopy, isInProgress: false, isSended: false });
                }, 3000);
            } else {
                context.dispatch({ isInProgress: false, isSended: false });
            }
        } else {
            console.error(new Error('Not valid contact form'));
        }
    }, [context]);

    return <Button innerText={t('common.send')} onClick={handleSubmit} extraClasses={extraClasses} />;
};

export default Submit;
