import styled from 'styled-components';
import { Platform, StatusBar } from 'react-native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    background-color: #4CAF50;
    min-height: 60px;
    margin-bottom: 10px;
    align-items: center;
    padding: 12px;
    overflow: hidden;
    margin-top: ${(Platform.OS === 'android') ? StatusBar.currentHeight : 0};
`;

export const UserPhoto = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    margin: 0px 20px;
`;

export const Username = styled.Text`
    font-size: 18px;
    color: #fff;
`;