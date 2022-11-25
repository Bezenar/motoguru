import {ComponentStory, ComponentMeta} from '@storybook/react';
import LangENG from './LangENG';

export default {
    title: 'Icons/languages/ENG',
    component: LangENG,
    argTypes: {},
    parameters: {
        docs: {
            page: null,
        },
    },
} as ComponentMeta<typeof LangENG>;

const Template: ComponentStory<typeof LangENG> = () => <LangENG />;

export const Default = Template.bind({});

Default.args = {};
