import {ComponentStory, ComponentMeta} from '@storybook/react';
import OverlayBackground, {I_OverlayBackground} from '.';
import ThemeSwitcher from '../../../_utils/storybook/StoryThemeSwitcher';
import Text from '../Text';

export default {
    title: 'atoms/OverlayBackground',
    component: OverlayBackground,
    argTypes: {
        imgSrc: {control: 'text', description: 'Path to image'},
        children: {control: 'none', description: 'Component resize to children height. Apply parent element width'}
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} />
        )
    ]
} as ComponentMeta<typeof OverlayBackground>;

const Template: ComponentStory<typeof OverlayBackground> = (args) => (
    <OverlayBackground {...args} />
);

export const Default = Template.bind({});
const ARGS: Partial<I_OverlayBackground> = {
    imgSrc: './img/Banner.jpg',
    children: (
        <div className="flex ai-center jc-center" style={{height: 633}}>
            <Text type={'paragraph'} text='Content' textSize={'title-xl'} />
        </div>
    )
};

Default.args = {...ARGS};
