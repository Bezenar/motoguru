import {ComponentStory, ComponentMeta} from '@storybook/react';
import Textarea, {I_Textarea} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'atoms/Textarea',
    component: Textarea,
    argTypes: {
        value: {control: 'text', description: 'Textarea text'},
        placeholder: {control: 'text', description: 'Textarea placeholder'},
        debounceTime: {control: 'number', description: 'After this time will be called prop "onChange" to avoid rerender when user typing'},
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg />
        )
    ]
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_Textarea> = {
    value: '',
    placeholder: 'placeholder',
    debounceTime: 300,
    onChange: (val) => console.log(val)
};

Default.args = {...ARGS};
