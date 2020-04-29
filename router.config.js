import LoginController from "./src/component/login/login.controller";
import ChatController from "./src/component/chat/chat.controller";
import TestSocket from './src/component/testsocket/socket'

export default
[
    {
        name:'Home',
        component: LoginController
    },
    {
        name:'Chat',
        component: ChatController
    }
    ,
    {
        name:'inbox',
        component: TestSocket
    }
]