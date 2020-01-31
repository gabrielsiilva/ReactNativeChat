import styled from 'styled-components';
import { Platform, StatusBar } from 'react-native';

export const ChatListContainer = styled.View`
    flex: 1;
    background-color: #424242;
    margin-top: ${(Platform.OS === 'android') ? StatusBar.currentHeight : 0};
`;

export const ChatListTitle = styled.Text`
    color: #fff;
    font-size: 40px;
    margin: 15px;
`;
