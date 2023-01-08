export type T_Translations = {
    common: {
        name: string;
        email: string;
        phoneNumber: string;
        send: string;
    },
    header: {
        navigation: {
            home: string;
            categories: string;
            feedbacks: string;
            bikes: string;
        },
    },
    footer: {
        contacts: {
            heading: string;
            address: string;
        }
    },
    homepage: {
        banner: {
            title: string;
            subHeading: string;
        },
        about: {
            heading: string;
            paragraphOne: string;
            paragraphTwo: string;
        },
        features: Record<number, {text: string; btnValue: string}>,
        categories: {
            heading: string;
            text: string;
            list: Record<number, {heading: string, text: string}>;
        }
    }
    worksHead: {
        category: string;
        date: string;
        time: string;
        place: string;
    },
}