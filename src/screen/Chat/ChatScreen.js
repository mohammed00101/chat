import  React, { Component} from 'react';
import { StyleSheet, View,Text } from 'react-native';
import ChatInput from './components/ChatInput';
import Chat from './components/Chat';
import {Container, Content} from 'native-base';



export default class  ChatScreen  extends  Component{

    state = {
        messages:[]
    }


    onNewMessage = (message) => {
        this.setState((prevState)=>{
            return   {
              messages:[
                ...prevState.messages,
                { type:'normal', item:{id:Math.random(), message}}
                ]
            }
        });
    }
    render(){
        return(
            <View style={Styles.chatContent}>
             <Chat style={Styles.chat} messages={this.state.messages} />
             <ChatInput style={Styles.chatInput} newMessage={this.onNewMessage} />
            </View>
        );
    }


}

const Styles = StyleSheet.create({
    chatContent:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:'#000000'

    },
    chat:{

        width:'100%',
        height:'85%',
        backgroundColor:'#000000',
        borderColor:'#000000'

    },
    chatInput:{
        width:'100%',
        height:'20%',
        backgroundColor:'#000000',
        borderColor:'#000000',


    }
});