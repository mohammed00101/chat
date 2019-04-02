import React,{Component} from 'react';
import { Formik } from  'formik';
import { View,Text } from 'native-base';
import {StyleSheet, TextInput,Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup';
import {Card,CardItem,Right } from 'native-base';

export default class  ChatInput extends Component{

validationSchema = Yup.object().shape({
message:Yup.string().required()
});
    render (){
        return (
            <Card style={this.props.style}>
            <Formik initialValues={{message:''}}
            validationSchema={this.validationSchema}
            onSubmit = {(values)=>{
              this.props.newMessage(values.message);
            }}
            >
            {
             props =>(
                <CardItem style={Styles.chatInput}>
                <TextInput
                 style={Styles.input}
                 placeholder='type a message ...... '
                 onChangeText={props.handleChange('message')}
                 onBlur={props.handleBlur('message')}
                 value={props.values.message}
                 />

                <Right>
                <RectButton  style={Styles.send} onPress={props.handleSubmit} >
                   <Icon  
                   color='green'
                   size={30}
                   name={Platform.select({android:'md-send',ios:'ios-send'})} />
                </RectButton>
                </Right>
               </CardItem>
             )
            }
            </Formik>
            </Card>

        );
    }

}


const Styles = StyleSheet.create({
    chatInput:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#333333',
        borderRadius:40,
        margin:10,
    },
    input:{
        width:'70%',
        color:'white'

    },
    send:{
        width:'30%'
    }

});