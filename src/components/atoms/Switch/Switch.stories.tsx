import {ComponentStory, ComponentMeta} from '@storybook/react';
import Switch, {I_Switch} from '.';
import StoryThemeSwitcher from '../../../_utils/storybook/ThemeSwitcher';

export default {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
        checked: {control: 'boolean'},
    },
    decorators: [
        (Story) => (
            <StoryThemeSwitcher Story={Story} applyBg />
        )
    ]
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_Switch> = {
    checked: false
};

Default.args = {...ARGS};
