import {ComponentStory, ComponentMeta} from '@storybook/react';
import InstaIcon from './InstaIcon';

export default {
  title: 'Icons/social/InstaIcon',
  component: InstaIcon,
  argTypes: {
    theme: {
        control: 'inline-radio',
        options: ['dark', 'light'],
        description: 'Set theme color'
    }
  },
} as ComponentMeta<typeof InstaIcon>;

const Template: ComponentStory<typeof InstaIcon> = (args) => (
    <div style={{
            background: args.theme === 'dark' ? '#000000' : '#FFFFFF',
            display: 'inline-flex',
            padding: 4
        }}
    >
        <InstaIcon {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    theme: 'dark'
};
