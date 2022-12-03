import {ComponentStory, ComponentMeta} from '@storybook/react';
import Text, {I_Text} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'atoms/Text',
    component: Text,
    argTypes: {
        type: {control: 'text', description: 'Generate span or p tag'},
        text: {control: 'text', description: 'inner text'},
        textSize: {
            control: 'radio',
            description: 'Set text size',
            options: [
                'xl', 'md', 'sm', 'xs', 'xxs', 'title-xl', 'title-md', 'title-sm', 'heading-xl', 'heading-md',
                'heading-sm'
            ]
        },
        textColor: {
            control: 'radio',
            options: [null, 'white', 'black', 'grey', 'primary', 'secondary'],
            description: 'By default theme color white/black. Set text color',
        }
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg/>
        )
    ]
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_Text> = {
    type: 'paragraph',
    text: 'Some text',
};

Default.args = {...ARGS};
