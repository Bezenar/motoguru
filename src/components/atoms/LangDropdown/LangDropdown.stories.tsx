import {ComponentStory, ComponentMeta} from '@storybook/react';
import LangDropdown, {I_LangDropdown} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'atoms/LangDropdown',
    component: LangDropdown,
    argTypes: {},
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg height={200} />
        )
    ]
} as ComponentMeta<typeof LangDropdown>;

const Template: ComponentStory<typeof LangDropdown> = (args) => <LangDropdown {...args} />;

export const Default = Template.bind({});
const ARGS: I_LangDropdown = {};

Default.args = {...ARGS};
