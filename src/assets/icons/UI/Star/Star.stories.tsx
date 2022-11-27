import {ComponentStory, ComponentMeta} from '@storybook/react';
import Star from '.';
import StoryThemeSwitcher from '../../../../_utils/storybook/ThemeSwitcher';

export default {
    title: 'Icons/UI/Star',
    component: Star,
    argTypes: {
        state: {
            control: 'inline-radio',
            options: ['empty', 'full', 'half'],
            description: 'Set icon state'
        }
    },
    parameters: {
        docs: {page: null}
    },
    decorators: [
        (Story) => (
            <div>
                <StoryThemeSwitcher Story={Story} />
            </div>
        )
    ]
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => (
    <div style={{
            padding: 4
        }}
    >
        <Star {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {state: 'full'};
