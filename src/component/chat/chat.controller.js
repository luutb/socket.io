import React, {Component}  from 'react';
import { View, Text } from 'react-native';
import ChatView from './chat.view'


export default class ChatController extends Component
{
    render(){
        return(
            <View>
               <ChatView
                sendMessenger={this.sendMessenger.bind(this)}
                {...this.props}
                >

                </ChatView>
            </View>
        )
    }
    sendMessenger(){
       
    }
}