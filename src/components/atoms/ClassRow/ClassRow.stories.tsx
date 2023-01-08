import {ComponentStory, ComponentMeta} from '@storybook/react';
import ClassRow, {I_ClassRow} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';
// import {CLASS_HEAD} from './constants'

export default {
    title: 'atoms/ClassRow',
    component: ClassRow,
    argTypes: {
        head: {control: 'boolean', description: 'Set head styles'},
        item: {control: 'object'},
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg/>
        )
    ]
} as ComponentMeta<typeof ClassRow>;

const Template: ComponentStory<typeof ClassRow> = (args) => <ClassRow {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_ClassRow> = {
    head: false,
    // item: CLASS_HEAD,
};

Default.args = {...ARGS};
