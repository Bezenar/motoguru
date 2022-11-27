import {ComponentStory, ComponentMeta} from '@storybook/react';
import Phone from '.';
import StoryThemeSwitcher from '../../../../_utils/storybook/ThemeSwitcher';

export default {
    title: 'Icons/UI/Phone',
    component: Phone,
    argTypes: {},
    parameters: {
        docs: {page: null}
    },
    decorators: [
        (Story) => (
            <div>
                <StoryThemeSwitcher Story={Story} />
            </div>
        )
    ]
} as ComponentMeta<typeof Phone>;

const Template: ComponentStory<typeof Phone> = (args) => (<Phone {...args} />);

export const Default = Template.bind({});

Default.args = {};
