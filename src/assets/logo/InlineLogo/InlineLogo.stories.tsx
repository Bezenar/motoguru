import {ComponentStory, ComponentMeta} from '@storybook/react';
import InlineLogo from '.';
import StoryThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'Logo/InlineLogo',
    component: InlineLogo,
    argTypes: {},
    decorators: [
        (Story) => (
            <div>
                <StoryThemeSwitcher Story={Story} applyBg />
            </div>
        )
    ]
} as ComponentMeta<typeof InlineLogo>;

const Template: ComponentStory<typeof InlineLogo> = (args) => (<InlineLogo {...args} />);

export const Default = Template.bind({});

Default.args = {};
