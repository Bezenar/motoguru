import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import InputField, {I_InputField} from '.';
import ThemeSwitcher from '../../../_utils/storybook/ThemeSwitcher';

export default {
    title: 'Atoms/InputField',
    component: InputField,
    argTypes: {
        value: {control: 'text', description: 'input value'},
        placeholder: {control: 'text', description: 'input placeholder'},
        required: {control: 'boolean', description: 'set input required'},
        errors: {
            control: 'object',
            description: 'Array with error, by failed validators index display error with same index. Try to type more than 5 symbols'
        },
        validators: {
            control: 'object',
            description: 'Array with functions which return true/false (validations result). Try to type more than 5 symbols'
        },
        debounceTime: {
            control: 'number',
            description: 'After this time will be called prop "onChange" to avoid rerender when user typing'
        }
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg/>
        )
    ]
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_InputField> = {
    value: '',
    placeholder: 'placeholder',
    required: false,
    errors: ['Max length is 5'],
    validators: [
        (val) => val.length > 5
    ],
    debounceTime: 300
};

Default.args = {...ARGS};
