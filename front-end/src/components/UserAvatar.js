// TODO: use DOCUMENTATION to create an avatar component. https://mui.com/material-ui/react-avatar/
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function UserAvatar(props) {
    return (
        <Avatar  sx={{ width: 70, height: 70 }} alt={props.alt} src={props.src}/>
    )
}