import React, { Component} from 'react';
import {View,Text } from 'native-base';
import ChatScreen from './Chat/ChatScreen';


export default class HomeScreen  extends  Component{


    componentWillMount =  () => {

    //  this.client = this.props.deepstremClient.login({
    //         type:'file',
    //         name:'mohamed',
    //         password:'password'
    //     },(success,data) => {

    //         console.log(success,data);
    //     });

    }

    render(){
        return (
            <View>
                <Text>home</Text>
            </View>
                // <ChatScreen  dsclient={this.client}  />

        );

    }

    componentWillUnmount = () => {
        // this.props.deepstremClient.close();
    }

}