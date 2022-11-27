import {ComponentStory, ComponentMeta} from '@storybook/react';
import LangRUS from '.';

export default {
  title: 'Icons/languages/RUS',
  component: LangRUS,
  argTypes: {},
} as ComponentMeta<typeof LangRUS>;

const Template: ComponentStory<typeof LangRUS> = () => <LangRUS />;

export const Default = Template.bind({});

Default.args = {};
