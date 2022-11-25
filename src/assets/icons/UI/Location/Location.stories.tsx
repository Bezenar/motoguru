import {ComponentStory, ComponentMeta} from '@storybook/react';
import Location from './Location';

export default {
  title: 'Icons/UI/Location',
  component: Location,
  argTypes: {
    theme: {
        control: 'inline-radio',
        options: ['dark', 'light'],
        description: 'Set theme color'
    }
  },
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
    theme: 'dark'
};
