import {ComponentStory, ComponentMeta} from '@storybook/react';
import FBIcon from '.';

export default {
    title: 'Icons/social/FBIcon',
    component: FBIcon,
    argTypes: {},
    parameters: {
        docs: {
            page: null
        }
    },
    decorators: [
        (Story) => (
            <div className="pa-2 bg--black flex inline">
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof FBIcon>;

const Template: ComponentStory<typeof FBIcon> = (args) => (<FBIcon {...args} />);

export const Default = Template.bind({});

Default.args = {};
