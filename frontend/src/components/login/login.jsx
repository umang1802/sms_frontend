import React, { Component } from 'react';
//import { hashHistory } from 'react-router;'
import {Avatar, Button, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {
    Container,
    Avatardiv,
    TextBox,
    ButtonWrapper,
    HeadingWrapper
} from './login.styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

//For now login is handeled statically wit username admin and passowrd admin.

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputUser: '',
            inputPass: '',
            loginError: false,
            showToast: false,
        }
    }
    

    handleUserName = (e) => {
        this.setState({
            inputUser: e.target.value
        });
    }

    handlePassword = (e) => {
        this.setState({
            inputPass: e.target.value
        });
    }

    checkLogin = (e) => {
       const {
        inputUser,
        inputPass
       } = this.state;
       const {
           user,
           pass
       } = this.props;
       //user validation static for now
       if(inputUser === user && inputPass === pass) {
           this.props.history.push({
               pathname: '/dashboard'
           });

           localStorage.setItem('rememberMe', 'true');
       }
       else {
           this.setState({
               loginError: true,
               showToast: true
           })
       }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({
            showToast: false,
            inputUser: '',
            inputPass: ''
        })
      };

    //error toast rendered in case of error
    renderError = () => {
        const {loginError, showToast} = this.state;
        if(loginError){
            return(
                <Snackbar open={showToast} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="error">
                        User Name or Password incorrect try again.
                    </Alert>
                </Snackbar>
            )
        }
        else{
            return(
                <div>
                    {''}
                </div>
            )
        }
        
    } 

    render() {
        const {
            inputUser,
            inputPass
        } = this.state
        return(
            <div>
                {this.renderError()}
                <Container>
                    <Avatardiv>
                        <Avatar src="/broken-image.jpg" />
                    </Avatardiv>
                    <HeadingWrapper>
                        PLEASE LOGIN TO CONTINUE
                    </HeadingWrapper>
                    <TextBox type="text" placeholder="USER NAME" onChange = {this.handleUserName} value={inputUser}/>
                    <TextBox type="password" placeholder="PASSWORD" onChange = {this.handlePassword} value={inputPass} />
                    <ButtonWrapper>
                        <Button variant="contained" size="medium" color="primary" onClick = {this.checkLogin} > LOGIN </Button>
                    </ButtonWrapper>
                </Container>
            </div>
        )
    }

}