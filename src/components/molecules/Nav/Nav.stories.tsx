import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav, {I_Nav} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';

export default {
    title: 'Molecules/Nav',
    component: Nav,
    argTypes: {},
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<ThemeSwitcher Story={Story} applyBg/>} />
                </Routes>
            </BrowserRouter>
        )
    ]
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_Nav> = {};

Default.args = {...ARGS};
