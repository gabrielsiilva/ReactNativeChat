import React, { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import {
    ChatListTitle,
    ChatListContainer
} from './style';

import ChatItem from '../../components/ChatItem';

export default class ChatList extends Component {
    render() {
        return (
            <ChatListContainer>
                <ChatListTitle>Chats</ChatListTitle>
                <FlatList
                    data={['']}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ChatItem navigation={this.props.navigation} />
                    )}
                />
            </ChatListContainer>
        );
    }
}
