import React, {Component}  from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from '../../../data/dataMessages'

export default class ChatView extends Component
{
    constructor(){
        super();
        this.state ={
            content:'',
            datas:{
                
                userowner:'',
                message:{user:'',messenger:''},
                userreceive:'',
               

            },
           
        }
    }
    componentDidMount(){
        
        console.log('abc',window.account)
        var acc = window.account
        let datas =[]
        let message = []
        let userowner =[]
        let userreceive =[]
        
       for(var k in data){
           var user_1 = data[k].user_1
           
           var user_2 = data[k].user_2
           
           if(user_1 === acc||user_2 === acc){
               
                datas.push(data[k]),
                message.push(data[k].message)
                userowner.push(acc)
                if(user_1 === acc){
                    userreceive.push(user_2)
                }
                if(user_2 === acc){
                    userreceive.push(user_1)
                }
            }
        }
       this.setState({content:{userowner:userowner,message:message,userreceive:userreceive}})
       
    }
    
    render(){
        console.log('render',this.state.content)

       
        
        return(
            <View style={{backgroundColor:'#FFFFFF'}}>

                <View style={{height:'90%'}}>
                <FlatList
                    data={this.state.content.userreceive}
                    renderItem={({item,index}) =>{
                        console.log(item)
                      
                            return(
                                <View style={{flexDirection:'row' }}>
                                    <View>
                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('inbox',{msg:this.state.content.message[index],userreceive:item})}>
                                                <Text>{item}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    }
     
                />
                </View>
            </View>

        )
    }
    
}