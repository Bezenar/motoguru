import {ComponentStory, ComponentMeta} from '@storybook/react';
import Phone from './Phone';

export default {
  title: 'Icons/UI/Phone',
  component: Phone,
  argTypes: {
    theme: {
        control: 'inline-radio',
        options: ['dark', 'light'],
        description: 'Set theme color'
    }
  },
} as ComponentMeta<typeof Phone>;

const Template: ComponentStory<typeof Phone> = (args) => (
    <div style={{
            padding: 4
        }}
    >
        <Phone {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    theme: 'dark'
};
