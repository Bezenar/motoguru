import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button, {I_Button} from '.';
import ThemeSwitcher from '../../../_utils/storybook/ThemeSwitcher';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        innerText: {control: 'text', description: 'Text passed inside button'},
        outlined: {control: 'boolean', description: 'Set outlined button'},
        onClick: {control: null}
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg/>
        )
    ]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_Button> = {
    innerText: 'Click me',
    outlined: false,
};

Default.args = {...ARGS};
