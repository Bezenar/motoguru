import {ComponentStory, ComponentMeta} from '@storybook/react';
import YTIcon from './YTIcon';

export default {
  title: 'Icons/social/YTIcon',
  component: YTIcon,
  argTypes: {
    theme: {
        control: 'inline-radio',
        options: ['dark', 'light'],
        description: 'Set theme color'
    }
  },
} as ComponentMeta<typeof YTIcon>;

const Template: ComponentStory<typeof YTIcon> = (args) => (
    <div style={{
            background: args.theme === 'dark' ? '#000000' : '#FFFFFF',
            display: 'inline-flex',
            padding: 4
        }}
    >
        <YTIcon {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    theme: 'dark'
};
