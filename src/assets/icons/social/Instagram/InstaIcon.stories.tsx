import {ComponentStory, ComponentMeta} from '@storybook/react';
import InstaIcon from '.';

export default {
    title: 'Icons/social/InstaIcon',
    component: InstaIcon,
    argTypes: {},
    parameters: {
        docs: {
            page: null,
        }
    },
    decorators: [
        (Story) => (
            <div className="pa-2 bg--black flex inline">
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof InstaIcon>;

const Template: ComponentStory<typeof InstaIcon> = (args) => (<InstaIcon {...args} />);

export const Default = Template.bind({});

Default.args = {};
