import {ComponentStory, ComponentMeta} from '@storybook/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBtn, {I_NavBtn} from '.';
import ThemeSwitcher from '../../../_utils/storybook/ThemeSwitcher';

export default {
    title: 'Atoms/NavBtn',
    component: NavBtn,
    argTypes: {
        route: {
            control: 'object',
            description:
                'path - property which passed to prop "to" for "NavLink" component <br>' +
                'element - Element which passed to "Route" <br>' +
                'name - text which displayed in browser <br>'
            ,
        },
        last: {
            control: 'boolean',
            description: 'Set/remove margin-right for last element'
        }
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<ThemeSwitcher Story={Story} applyBg/>} />
                </Routes>
            </BrowserRouter>
        )
    ]
} as ComponentMeta<typeof NavBtn>;

const Template: ComponentStory<typeof NavBtn> = (args) => <NavBtn {...args} />;

export const Default = Template.bind({});
const ARGS: Partial<I_NavBtn> = {
    route: {
        path: '/homepage',
        element: <></>,
        name: 'Homepage'
    },
    last: false,
};

Default.args = {...ARGS};
