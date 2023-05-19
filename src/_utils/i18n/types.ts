export type T_Translations = {
    common: {
        name: string;
        email: string;
        phoneNumber: string;
        message: string;
        send: string;
        contactUs: string;
        sended: string;
        rate: string;
        selectDate: string,
    },
    errors: {
        wrongEmail: string;
        requiredField: string;
    }
    header: {
        navigation: {home: string; categories: string; feedbacks: string; bikes: string;};
    },
    footer: {
        contacts: {heading: string; address: string;};
    };
    homepage: {
        banner: {title: string; subHeading: string;};
        about: {heading: string; paragraphOne: string; paragraphTwo: string};
        features: Record<number, {text: string; btnValue: string}>;
        categories: {
            heading: string;
            text: string;
            list: Record<number, {heading: string, text: string}>;
        };
    };
    categories: {
        list: Record<number, {
            category: string;
            transport: string;
            head: string;
            options: Record<number, {option: string}>;
        }>;
        theory: {
            heading: string;
            table: {
                head: { category: string; date: string; time: string; place: string;};
            };
            enroll: {heading: string; text: string;}
        };
    };
    feedbacks: {
        heading: string;
    }
}