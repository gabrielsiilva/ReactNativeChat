import React, { Component } from 'react';
import { Icon } from 'react-native-elements'

import {
    HeaderContainer,
    UserPhoto,
    Username,
} from './style';

import profile from '../../../assets/profile.jpeg'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class ChatHeader extends Component {
    render() {
        return (
            <HeaderContainer>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('List')}>
                    <Icon name='arrow-back' color="white" />
                </TouchableWithoutFeedback>

                <UserPhoto source={profile} />
                <Username>nick</Username>
            </HeaderContainer>
        );
    }
}
