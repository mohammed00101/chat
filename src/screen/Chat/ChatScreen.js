import  React, { Component} from 'react';
import { StyleSheet } from 'react-native';
import ChatInput from './components/ChatInput';
import Chat from './components/Chat';
import {Container, Content, Card,View} from 'native-base';
import messages from '../../data/messages';
import {  GiftedChat }  from 'react-native-gifted-chat';
import { onSendMessages } from '../../store/actions';
import {connect } from 'react-redux';



class  ChatScreen  extends  Component{



    render = () => {
        return(
            <View style={Styles.chat}>
            <GiftedChat
                messages={this.props.messages}
                onSend={this.props.onSendMessages}
                user={{
                    _id:1
                }}
            />
            </View>
        );
    }

}



const Styles = StyleSheet.create({
    chat:{
        flex:1,
        backgroundColor:'#000000'
    }
});


const mapDispatchToProps = (dispatch) => ({
    onSendMessages:(messages = []) => dispatch(onSendMessages(messages)),
});

const mapStateToProps = ({chat:{messages}}) => (
    {
        messages,
    }
);


export default connect(mapStateToProps,mapDispatchToProps)(ChatScreen);