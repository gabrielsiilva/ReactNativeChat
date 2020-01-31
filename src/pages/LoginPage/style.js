import styled from 'styled-components';

export const LoginContainer = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #424242;
    align-items: center;
`;

export const BoxContainer = styled.View`
    padding-top: 30px;
    flex: 1;
`;

export const ImageContainer = styled.View`
    flex: 1;
    width: 100px;
    align-items: center;
    justify-content: center;
`;

export const ImageLogo = styled.Image`
    height: 200px;
    width: 200px;
`;


export const NicknameInput = styled.TextInput`
    border-radius: 15px;
    border: 2px solid #00ACC1;
    height: 32px;
    width: 230px;
    margin-bottom: 15px;
    border-bottom-left-radius: 0px;
    color: white;
    padding: 0px 5px;
`;

export const LoginButton = styled.TouchableOpacity`
    border-radius:15px;
    border: 2px solid #00ACC1;
    width: 230px;
    align-items: center;
    height: 32px;
    justify-content: center;
    border-top-right-radius: 0px;
`;

export const ButtonText = styled.Text`
    color: white;
`;

