import {ComponentStory, ComponentMeta} from '@storybook/react';
import Counter, {I_Counter} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'atoms/Counter',
    component: Counter,
    argTypes: {
        value: {control: 'number', description: 'Number passed inside component'}
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} />
        )
    ]
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_Counter> = {
    value: 1
};

Default.args = {...ARGS};
