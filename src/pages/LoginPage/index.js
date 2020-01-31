import React, { Component } from 'react';

import {
    LoginContainer,
    BoxContainer,
    NicknameInput,
    LoginButton,
    ButtonText,
    ImageLogo,
    ImageContainer
} from './style';

import chat from './../../../assets/chat.png'

export default class LoginPage extends Component {
    render() {
        return (
            <LoginContainer behavior="padding">
                <ImageContainer>
                    <ImageLogo source={chat} />
                </ImageContainer>
                <BoxContainer>
                    <NicknameInput placeholder="Nick" placeholderTextColor="#BDBDBD" />
                    <LoginButton onPress={() => this.props.navigation.navigate('List')}>
                        <ButtonText>Login</ButtonText>
                    </LoginButton>
                </BoxContainer>

            </LoginContainer>
        )
    }
}
