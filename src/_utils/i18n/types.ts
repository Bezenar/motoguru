export type T_Translations = {
    navigation: {
        home: string;
        categories: string;
        feedbacks: string;
        bikes: string;
    },
    worksHead: {
        category: string;
        date: string;
        time: string;
        place: string;
    },
    banner: {
        title: string;
        subHeading: string;
    },
    about: {
        heading: string;
        paragraphOne: string;
        paragraphTwo: string;
    },
    features: {
        featureOne: {
            text: string;
            btnValue: string;
        },
        featureTwo: {
            text: string;
            btnValue: string;
        },
        featureThree: {
            text: string;
            btnValue: string;
        },
        featureFour: {
            text: string;
            btnValue: string;
        },
    },
    categories: {
        heading: string;
        text: string;
        list: Array<{heading: string, text: string}>;
    }
}