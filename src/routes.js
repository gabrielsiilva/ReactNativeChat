import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ChatList from './pages/ChatList';

const Routes = createSwitchNavigator({
    Login: LoginPage,
    List: ChatList,
    Chat: ChatPage
}, {
    initialRouteName: 'Login'

});

export default createAppContainer(Routes);
