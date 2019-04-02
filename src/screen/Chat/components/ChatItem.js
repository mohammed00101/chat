import React, { Component } from 'react';
import { CardItem,Right,Text } from 'native-base';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import avatar from '../../../assets/avatar.jpg';


export default class ChatItem extends Component {
    render() {

        return (
                <CardItem  style={this.props.style}>
                    <Text style={Styles.content}>{this.props.data.item.message}</Text>
                    <Right>
                        <FastImage
                        source={avatar}
                        />
                    </Right>
                </CardItem>
        );
    }
}


const Styles = StyleSheet.create({
    content:{
        backgroundColor:'#333333',
        borderRadius:15,
        padding:6,
        color:'white',


    },
    image:{
        width:100,
        height:100,
        borderRadius:10,
        backgroundColor:'white',
    }

});