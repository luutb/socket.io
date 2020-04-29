import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import socketIO from "socket.io-client";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
export default class TestSocket extends Component {
  constructor() {
    super();
    this.state = {
      chatMessage: "",
      chatMessages: {
        message: '',
        userreceive: ''
      },
      data:''
    };

  }

  componentDidMount() {

    console.log(this.props.route.params.msg)
    this.setState({ chatMessages: this.props.route.params.msg,userreceive:this.props.route.params.userreceive})
    const socket = socketIO('http://10.141.23.160:8000', {
      transports: ['websocket'], jsonp: false
    });
    var userid = window.account
    socket.connect();
    socket.on('connection' ,userid,() => {
      console.log('connected to socket server');
    });
    socket.on('data',(data)=>{
      console.log('data',data)
    })
   
    this.socket = socket;


  }
  renderItem(item) {
    let color = 'red';
    let justStart = 'flex-start'
    if (item.user == window.account) {
      color = 'red';
      justStart = 'flex-start'
    }
    else {
      color = 'blue';
      justStart = 'flex-end'

    }
    return (
      <View style={{ flexDirection: 'row', backgroundColor: color, justifyContent: justStart }}>
        <View style={{ marginRight: 10 }}>
          <Text style={{ fontSize: 16 }}>{item.user}</Text>
        </View>
        <View>
          <Text style={{ color: '', fontSize: 16 }}>{item.message}</Text>
        </View>
      </View>)
  }

  render() {
    console.log(this.state.chatMessages)

    return (
      <View style={styles.container}>

        <FlatList
          style={{flex:9}}
          data={this.state.chatMessages}
          renderItem={({ item }) => {
            console.log(item.message)
            return (
              <View>
                {this.renderItem(item)}
              </View>

            )
          }

          }
        ></FlatList>
        <View style={{flex:1}}>
          
            <TextInput style={{height:'90%'}} placeholder='message' onChangeText={(text)=>this.setState({data:text})}></TextInput>
            <View>
              <TouchableOpacity onPress={()=>this.onSubmit({usersend:window.account,message:this.state.data,userreceive:this.state.userreceive})}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
  onSubmit(data){

    this.socket.emit('send',data)
  }

}
const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});