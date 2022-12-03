import {ComponentStory, ComponentMeta} from '@storybook/react';
import StarsRate, {I_StarsRate} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'atoms/StarsRate',
    component: StarsRate,
    argTypes: {
        rate: {control: 'number', description: 'rate', table: {type: {summary: 'Number from 0 to 10'}}}
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg />
        )
    ]
} as ComponentMeta<typeof StarsRate>;

const Template: ComponentStory<typeof StarsRate> = (args) => <StarsRate {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_StarsRate> = {
    rate: 1
};

Default.args = {...ARGS};
