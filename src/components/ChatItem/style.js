import styled from 'styled-components';

export const ListContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding: 15px;
    background-color: #bdbdbd;
    border-radius: 20px;
    border-bottom-right-radius: 0px;
    width: 94%;
    align-self: center;
    overflow: hidden;
`;

export const UserPhoto = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    margin-right: 20px;
`;

export const ChatInfo = styled.View`
    overflow: hidden;
    width: 80%;
`;

export const Username = styled.Text`
    font-size: 16px;
    color: #000;
`;

export const LastMessage = styled.Text`
    font-size: 13px;
    color: #616161;
`;
