/**
 * Types
 */
import type { T_Translations } from './types';

const en: T_Translations = {
    common: {
        name: 'Name',
        email: 'Email',
        phoneNumber: 'Phone',
        send: 'Send',
        contactUs: 'Contact us',
        message: 'Message',
        sended: 'Sended',
        rate: 'Rate',
        selectDate: 'Select date',
    },
    errors: {
        wrongEmail: 'Wrong email',
        requiredField: 'This field is required',
    },
    header: {
        navigation: {
            home: 'HOMEPAGE',
            categories: 'CATEGORIES',
            feedbacks: 'FEEDBACKS',
        },
    },
    footer: {
        contacts: {
            heading: 'Contact info',
            address: 'Brivibas street 100 - 11',
        },
    },
    homepage: {
        banner: {
            title: 'MOTOGURU MOTOSCHOOL',
            subHeading: 'Come study with us...Some extra text',
        },
        about: {
            heading: 'About MOTOSCHOOL',
            paragraphOne:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui quam, consectetur et sapien eu, viverra bibendum nisl. Ut mollis, justo ut tristique fermentum, tellus velit ornare mauris, imperdiet varius arcu felis placerat turpis. Vivamus porttitor.',
            paragraphTwo:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui quam, consectetur et sapien eu, viverra bibendum nisl. Ut mollis, justo ut tristique fermentum, tellus velit ornare mauris, imperdiet varius arcu felis placerat turpis. Vivamus porttitor.',
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
                1: { heading: 'AM', text: 'Motorcycle' },
                2: { heading: 'A1', text: 'Motorcycle' },
                3: { heading: 'A2', text: 'Motorcycle' },
                4: { heading: 'A', text: 'Motorcycle' },
            },
        },
    },
    categories: {
        list: {
            1: {
                category: 'A',
                transport: 'motorcycle',
                head: 'Theory',
                options: {
                    1: { option: '3 meetings / 10h' },
                    2: { option: 'Possible complete online' },
                    3: { option: 'Pizza party at theory complete' },
                },
            },
            2: {
                category: 'A',
                transport: 'motorcycle',
                head: 'Theory',
                options: {
                    1: { option: '3 meetings / 10h' },
                    2: { option: 'Possible complete online' },
                    3: { option: 'Pizza party at theory complete' },
                },
            },
            3: {
                category: 'A',
                transport: 'motorcycle',
                head: 'Theory',
                options: {
                    1: { option: '3 meetings / 10h' },
                    2: { option: 'Possible complete online' },
                    3: { option: 'Pizza party at theory complete' },
                },
            },
            4: {
                category: 'A',
                transport: 'motorcycle',
                head: 'Theory',
                options: {
                    1: { option: '3 meetings / 10h' },
                    2: { option: 'Possible complete online' },
                    3: { option: 'Pizza party at theory complete' },
                },
            },
        },
        theory: {
            heading: 'Upcoming theory classes',
            table: {
                head: {
                    category: 'Category',
                    date: 'Date',
                    time: 'Time',
                    place: 'Place',
                },
            },
            enroll: {
                heading: 'Sign up for theory',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. I',
            },
        },
    },
    feedbacks: {
        heading: 'Leave few words about us',
    },
};

export default en;
