import HeaderWithText from '../../common/components/IntroText';
import {Form} from '../../common/components/Form';
import {emailRegex} from '../../constants/regex';
import {useTranslation} from 'react-i18next';
import {useContext, useMemo} from 'react';
import Carousel from '../../common/components/Carousel';
import FeedBackCard from '../../common/components/FeedBackCard';
import type {T_AppContext, T_FeedBack} from '../../types';
import {AppContext} from '../../App';
import useQuery from '../../hooks/useQuery';
import feedbacksAdapter from '../../adapters/feedbacksAdapter';
import Loader from '../../common/components/Loader';

type T_FormData = {name: string; email: string; phone: string; message: string; rate: number};
const FORM_DATA: T_FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    rate: 0,
};

const FeedBacks: React.FC = () => {
    const {t} = useTranslation();
    const {breakPoint} = useContext<T_AppContext>(AppContext);
    const feedbacks = useQuery<Array<T_FeedBack>>('feedbacks', feedbacksAdapter);

    const slideCount = useMemo<number>(() => {
        switch (breakPoint) {
            case 'xs':
            case 'sm':
                return 1;
            case 'md':
                return 2;
            case 'lg':
                return 3;
            case 'xl':
                return 4;
        }
    }, [breakPoint]);

    const handleSubmit = async (data: T_FormData): Promise<any> => {
        //TODO COMPLETE
        console.log(data);
    };

    const validators = useMemo(() => {
        return {
            name: [(val: string) => val.length > 0],
            email: [(val: string) => !emailRegex.test(val)],
            phone: [(val: string) => val.length > 0],
            message: [(val: string) => val.length === 0],
            rate: [(val: string) => !isNaN(parseFloat(val))],
        };
    }, []);

    return (
        <>
            <div className="container">
                <HeaderWithText heading={t('feedbacks.heading')} />

                <div className="flex jc-center">
                    <Form<T_FormData> width={760} data={FORM_DATA}>
                        <div className="flex nowrap sm-wrap xs-wrap jc-sb pb-7 sm-pb-4 xs-pb-4">
                            <div className="wid-33 sm-wid-100 xs-wid-100">
                                <Form.InputField
                                    dataKey="name"
                                    placeholder={t('common.name') as string}
                                    required
                                    validators={validators.name}
                                />
                            </div>
                            <div className="wid-33 sm-wid-100 xs-wid-100 mx-8 sm-mx-0 xs-mx-0 sm-my-4 xs-my-4">
                                <Form.InputField
                                    dataKey="email"
                                    validators={validators.email}
                                    errors={[t('errors.wrongEmail')]}
                                    placeholder={t('common.email') as string}
                                />
                            </div>
                            <div className="wid-33 sm-wid-100 xs-wid-100">
                                <Form.InputField
                                    dataKey="phone"
                                    placeholder={t('common.phoneNumber') as string}
                                    validators={validators.phone}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <Form.Textarea
                                dataKey="message"
                                required
                                placeholder={t('common.message') as string}
                                validators={validators.message}
                            />
                        </div>

                        <div className="flex jc-sb wid-100">
                            <div className="wid-33 sm-wid-100 xs-wid-100 sm-mb-4 xs-mb-4">
                                <Form.Select
                                    placeholder={t('common.rate') as string}
                                    data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                                    dataKey="rate"
                                />
                            </div>

                            <Form.Submit validators={validators} onSubmit={handleSubmit} extraClasses="sm-wid-100 xs-wid-100" />
                        </div>
                    </Form>
                </div>
            </div>

            <div className="mt-10" >
                {feedbacks ? (
                    <Carousel<T_FeedBack>
                        data={feedbacks as Array<T_FeedBack>}
                        slidesCount={slideCount}
                        renderSlide={(f) => <FeedBackCard key={f.id} feedback={f} />}
                    />
                ) : (
                    <div className="flex jc-center">
                        <Loader />
                    </div>
                )}
            </div>
        </>
    );
};

export default FeedBacks;
