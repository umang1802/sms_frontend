import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';

export const Menuburger = styled(IconButton)`
    margin-right: 90%;
`;

export const Typographystyle = styled(Typography)`
white-space: nowrap;
overflow-x: auto;
overflow-y: hidden;
`;

export const DataGridContainer = styled.div`
margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    padding: 5px;
`;

export const TextFieldWrapper = styled.div`
    margin-top:5%;
    margin-left:40%;
`;

export const ButtonWrapper = styled.div`
    margin-top: 2%;
    margin-left:42%;
`;

export const SnackBarWrapper = styled.div`
    margin-bottom: 90%;
`;

export const LogoutButton = styled.div`
    margin-left: 90%;
`;

export const AvatarWrapper = styled(Avatar)`
    margin-left:2%;
`;