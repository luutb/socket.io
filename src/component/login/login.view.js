import React, {Component}  from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export default class LoginView extends Component
{
    constructor(){
        super();
        this.state={
            user:'',
            pass:''
        }
    }
    render(){
        return(
            <View>
                <View>
                    <TextInput placeholder='Username' onChangeText={(text)=>this.setState({user:text})}></TextInput>
                </View>
                <View>
                    <TextInput placeholder='Password' onChangeText={(text)=>this.setState({pass:text})}></TextInput>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>this.onSubmit(this.state.user,this.state.pass)}>
                        <Text>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    onSubmit(username,password){
        console.log(username,password);
        this.props.onLogin(username,password)
    }
}