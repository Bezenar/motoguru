import {ComponentStory, ComponentMeta} from '@storybook/react';
import ExerciseRow, {I_ExerciseRow} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';
import {EXERCISES_HEAD} from './constants'

export default {
    title: 'atoms/ExerciseRow',
    component: ExerciseRow,
    argTypes: {
        head: {control: 'boolean', description: 'Set head styles'},
        item: {control: 'object'},
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} applyBg/>
        )
    ]
} as ComponentMeta<typeof ExerciseRow>;

const Template: ComponentStory<typeof ExerciseRow> = (args) => <ExerciseRow {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_ExerciseRow> = {
    head: false,
    item: EXERCISES_HEAD,
};

Default.args = {...ARGS};
