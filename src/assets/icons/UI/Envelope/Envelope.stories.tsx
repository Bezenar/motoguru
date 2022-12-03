import {ComponentStory, ComponentMeta} from '@storybook/react';
import Envelope from '.';
import StoryThemeSwitcher from '../../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'Icons/UI/Envelope',
    component: Envelope,
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
} as ComponentMeta<typeof Envelope>;

const Template: ComponentStory<typeof Envelope> = () => (<Envelope />);

export const Default = Template.bind({});

Default.args = {};
