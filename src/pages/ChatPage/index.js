import React, { Component } from 'react';
import ChatHeader from '../../components/ChatHeader';

import {
    Container,
    ChatContainer,
    MessageBoxLeft,
    Message,
    MessageInputBox,
    MessageInput,
    SendMessageButton,
    SendIcon
} from './style';

import enviar from './../../../assets/enviar.png'

export default class ChatPage extends Component {
    render() {
        return (
            <Container behavior="padding" enabled>
                <ChatHeader navigation={this.props.navigation} />
                <ChatContainer
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <MessageBoxLeft>
                        <Message>Lorem ipsum dolor sit amet.</Message>
                    </MessageBoxLeft>

                </ChatContainer>

                <MessageInputBox>
                    <MessageInput placeholder="Escreve caraí" placeholderTextColor="#BDBDBD" />

                    <SendMessageButton onPress={() => { }}>
                        <SendIcon source={enviar} />
                    </SendMessageButton>

                </MessageInputBox>
            </Container>

        );
    }
}
