import {ComponentStory, ComponentMeta} from '@storybook/react';
import Location from '.';
import StoryThemeSwitcher from '../../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'Icons/UI/Location',
    component: Location,
    argTypes: {},
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
} as ComponentMeta<typeof Location>;

const Template: ComponentStory<typeof Location> = (args) => (
    <div style={{
            padding: 4
        }}
    >
        <Location {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    theme: 'd'
};
