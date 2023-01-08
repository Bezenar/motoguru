import {T_Translations} from './types';

const en: T_Translations = {
    common: {
        name: 'Name',
        email: 'Email',
        phoneNumber: 'Phone',
        send: 'Send',
    },
    header: {
        navigation: {
            home: 'HOMEPAGE',
            categories: 'CATEGORIES',
            feedbacks: 'FEEDBACKS',
            bikes: 'BIKES',
        },
    },
    footer: {
        contacts: {
            heading: 'Contact info',
            address: 'Brivibas street 100 - 11',
        }
    },
    homepage: {
        banner: {
            title: 'MOTOGURU MOTOSCHOOL',
            subHeading: 'Come study with us...Some extra text'
        },
        about: {
            heading: 'About MOTOSCHOOL',
            paragraphOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui quam, consectetur et sapien eu, viverra bibendum nisl. Ut mollis, justo ut tristique fermentum, tellus velit ornare mauris, imperdiet varius arcu felis placerat turpis. Vivamus porttitor.',
            paragraphTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui quam, consectetur et sapien eu, viverra bibendum nisl. Ut mollis, justo ut tristique fermentum, tellus velit ornare mauris, imperdiet varius arcu felis placerat turpis. Vivamus porttitor.',
        },
        features: {
            1: {
                text: 'Introductory lesson',
                btnValue: 'Contact us',
            },
            2: {
                text: 'Introductory lesson',
                btnValue: 'Contact us',
            },
            3: {
                text: 'Introductory lesson',
                btnValue: 'Contact us',
            },
            4: {
                text: 'Introductory lesson',
                btnValue: 'Contact us',
            },
        },
        categories: {
            heading: 'Categories',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed at morbi morbi augue condimentum LV',
            list: {
                1: {heading: 'AM', text: 'Motorcycle'},
                2: {heading: 'A1', text: 'Motorcycle'},
                3: {heading: 'A2', text: 'Motorcycle'},
                4: {heading: 'A', text: 'Motorcycle'},
            },
        },
    },
    worksHead: {
        category: 'category',
        date: 'date',
        time: 'time',
        place: 'place',
    },
}

export default en;