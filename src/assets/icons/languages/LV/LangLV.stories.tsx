import {ComponentStory, ComponentMeta} from '@storybook/react';
import LangLV from '.';

export default {
    title: 'Icons/languages/LV',
    component: LangLV,
    argTypes: {},
    parameters: {
        docs: {
            page: null
        }
    }
} as ComponentMeta<typeof LangLV>;

const Template: ComponentStory<typeof LangLV> = () => <LangLV />;

export const Default = Template.bind({});

Default.args = {};
