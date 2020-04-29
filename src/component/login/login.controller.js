import React, {Component}  from 'react';
import { View, Text } from 'react-native';
import LoginView from './login.view'
import data from '../../../data/dataUser'


export default class LoginController extends Component
{
    render(){
        return(
            <View>
               <LoginView
                onLogin={this.onLogin.bind(this)}
                >

                </LoginView>
            </View>
        )
    }
    onLogin(username,password){
        for(var k in data){
            if(username==data[k].username&&password==data[k].password){

                window.account = username;
                this.props.navigation.navigate('Chat')
                }
        }
       
    }
}