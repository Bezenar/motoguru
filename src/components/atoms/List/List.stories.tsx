import {ComponentStory, ComponentMeta} from '@storybook/react';
import List, {I_List} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'atoms/List',
    component: List,
    argTypes: {
        head: {control: 'Text', description: 'Set list heading'},
        list: {control: 'object', description: 'Array with texts'}
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg />
        )
    ]
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_List> = {
    head: 'Heading',
    list: ['Line 1', 'Line 2', 'Line 3', 'Line 4']
};

Default.args = {...ARGS};
