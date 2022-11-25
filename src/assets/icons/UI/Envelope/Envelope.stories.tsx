import {ComponentStory, ComponentMeta} from '@storybook/react';
import Envelope from './Envelope';

export default {
  title: 'Icons/UI/Envelope',
  component: Envelope,
  argTypes: {
    theme: {
        control: 'inline-radio',
        options: ['dark', 'light'],
        description: 'Set theme color'
    }
  },
} as ComponentMeta<typeof Envelope>;

const Template: ComponentStory<typeof Envelope> = (args) => (
    <div style={{
            padding: 4
        }}
    >
        <Envelope {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    theme: 'dark'
};
