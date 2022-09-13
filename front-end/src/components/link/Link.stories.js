import React from 'react';
import Link from './Link';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

// Helps with alignment
const Stack = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

// sets defaults for this component's stories
export default {
    component: Link,
    title: 'Link',
};

// TODO: return story
const Template = args => {
    return (
        <Stack>
            <Link {...args} />
            <Link title="Hi" url="lkfjdslfdjsk"/>
        </Stack>
    );
}

// TODO: return story
const Avatar = args => {
    return (
        <Stack>
            <UserAvatar alt="Curious George" src="https://www.looper.com/img/gallery/this-is-who-narrates-curious-george/l-intro-1622604401.jpg"/>
        </Stack>
    );
}

// I've pre-defined arguments for our Default story – feel free to edit!
export const Default = Template.bind({});
Default.args = {
    link: 'https://www.google.com',
    title: "GO TO GOOGLE"
}

export const TestAvatar = Avatar.bind({});
// can't name as UserAvatar because you already imported that