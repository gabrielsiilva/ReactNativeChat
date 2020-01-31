import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
    background-color: #424242;
    flex: 1;
`;

export const ChatContainer = styled.ScrollView`
`;

export const MessageBox = styled.View`
    border-radius: 15px;
    width: 230px;
    min-height: 40px;
    margin-bottom: 15px;
    color: white;
    padding: 5px 8px;
`;

export const MessageBoxLeft = styled(MessageBox)`
    background-color: #00ACC1;
    border-bottom-left-radius: 0px;
    margin-left: 10px;
`;

export const MessageBoxRight = styled(MessageBox)`
    background-color: #4CAF50;
    border-bottom-right-radius: 0px;
    align-self: flex-end;
    margin-right: 10px;
`;

export const Message = styled.Text`
    color: white;
`;

export const MessageInputBox = styled.View`
    background-color: #E0E0E0;
    width: 97%;
    height: 47px;
    border-radius: 20px;
    justify-content: space-between;
    padding: 5px 8px;
    align-self: center;
    margin: 3px 0px;
    border-bottom-right-radius: 0px;
    flex-direction: row;
`;

export const MessageInput = styled.TextInput`
    padding: 5px;
    flex: 1;
`;

export const SendMessageButton = styled.TouchableOpacity`
    align-self: center;
`;

export const SendIcon = styled.Image`
    width: 20px;
    height: 20px;
`;
