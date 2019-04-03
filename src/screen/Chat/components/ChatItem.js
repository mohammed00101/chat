import React, { Component } from 'react';
import { CardItem,Left,Text } from 'native-base';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import avatar from '../../../assets/avatar.jpg';


export default class ChatItem extends Component {
    render() {

        return (
                <CardItem  style={this.props.style}>
                    <FastImage
                        style={Styles.image}
                        source={avatar}
                    />
                    <Text style={Styles.content}>{this.props.data.item.message}</Text>

                </CardItem>
        );
    }
}


const Styles = StyleSheet.create({
    content:{
        backgroundColor:'#333333',
        // multiLine:true,
        maxWidth:'70%',
        borderRadius:15,
        padding:6,
        color:'white',
        margin:0,


    },
    image:{
        margin:6,
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'white',
    }

});