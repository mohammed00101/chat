import React,{Component} from 'react';
import { Formik } from  'formik';
import { View,Text } from 'native-base';
import {StyleSheet, TextInput,Platform } from 'react-native';
import { RectButton,BorderlessButton } from 'react-native-gesture-handler';
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
                <BorderlessButton  style={Styles.send} onPress={props.handleSubmit} >
                   <Icon  
                   color='green'
                   size={30}
                   name={Platform.select({android:'md-send',ios:'ios-send'})} />
                </BorderlessButton>
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
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#333333',
        borderRadius:40,
        marginLeft:10,
        marginRight:10,
        marginTop:0,
        marginBottom:3,
        padding:0,
    },
    input:{
        width:'85%',
        color:'white',
        padding:0,
        margin:0

    },
    send:{

    }

});