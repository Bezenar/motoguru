import {ComponentStory, ComponentMeta} from '@storybook/react';
import YTIcon from '.';

export default {
    title: 'Icons/social/YTIcon',
    component: YTIcon,
    argTypes: {},
    parameters: {
        docs: {page: null}
    },
    decorators: [
        (Story) => (
            <div className="pa-2 bg--black flex inline">
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof YTIcon>;

const Template: ComponentStory<typeof YTIcon> = (args) => (<YTIcon {...args} />);

export const Default = Template.bind({});

Default.args = {};
