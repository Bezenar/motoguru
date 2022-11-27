import {ComponentStory, ComponentMeta} from '@storybook/react';
import SocialLink, {I_SocialLink} from '.';
import FBIcon from '../../../assets/icons/social/Facebook';
import ThemeSwitcher from '../../../_utils/storybook/ThemeSwitcher';

export default {
    title: 'Atoms/SocialLink',
    component: SocialLink,
    argTypes: {
        href: {control: 'text', description: 'This value will be passed to attribute "href" in tag "a"'}
    },
    decorators: [
        (Story) => (
            <ThemeSwitcher Story={Story} />
        )
    ]
} as ComponentMeta<typeof SocialLink>;

const Template: ComponentStory<typeof SocialLink> = (args) => <SocialLink {...args}><FBIcon/></SocialLink>;

export const Default = Template.bind({});
const ARGS: Partial<I_SocialLink> = {
    href: '#',
};

Default.args = {...ARGS};
