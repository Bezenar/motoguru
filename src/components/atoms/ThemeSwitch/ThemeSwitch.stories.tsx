import {ComponentStory, ComponentMeta} from '@storybook/react';
import ThemeSwitch, {I_ThemeSwitch} from '.';
import StoryThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'Atoms/ThemeSwitch',
    component: ThemeSwitch,
    decorators: [
        (Story) => (
            <StoryThemeSwitcher Story={Story} applyBg />
        )
    ]
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />;

export const Default = Template.bind({});
const ARGS: I_ThemeSwitch = {};

Default.args = {...ARGS};
