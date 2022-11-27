import {ComponentStory, ComponentMeta} from '@storybook/react';
import FullLogo from '.';

export default {
    title: 'logo/Full logo',
    component: FullLogo,
    argTypes: {},
    parameters: {
        docs: {
            page: null,
        },
    },
} as ComponentMeta<typeof FullLogo>;

const Template: ComponentStory<typeof FullLogo> = () => <FullLogo />;

export const Default = Template.bind({});

Default.args = {};
