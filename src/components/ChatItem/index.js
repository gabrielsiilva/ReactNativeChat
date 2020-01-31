import React, { Component } from 'react';

import profile from '../../../assets/profile.jpeg';

import {
    ListContainer,
    UserPhoto,
    ChatInfo,
    Username,
    LastMessage
} from './style';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class ChatItem extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Chat')}>
                <ListContainer>
                    <UserPhoto source={profile} />

                    <ChatInfo>
                        <Username>nick</Username>
                        <LastMessage numberOfLines={1}>last messageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</LastMessage>
                    </ChatInfo>

                </ListContainer>
            </TouchableWithoutFeedback>
        );
    }
}
