import {ComponentStory, ComponentMeta} from '@storybook/react';
import FBIcon from './FBIcon';

export default {
  title: 'Icons/social/FBIcon',
  component: FBIcon,
  argTypes: {
    theme: {
        control: 'inline-radio',
        options: ['dark', 'light'],
        description: 'Set theme color'
    }
  },
} as ComponentMeta<typeof FBIcon>;

const Template: ComponentStory<typeof FBIcon> = (args) => (
    <div style={{
            background: args.theme === 'dark' ? '#000000' : '#FFFFFF',
            display: 'inline-flex',
            padding: 4
        }}
    >
        <FBIcon {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    theme: 'dark'
};
