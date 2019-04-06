import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';


export default class LoginScreen extends Component {

    state={
        sourceImage :null
    }
    onPikImage = () => {

        ImagePicker.showImagePicker({
            title:'قم باختيار صوره',
        },(res)=>{
            console.log(res);

            this.setState({
                sourceImage:res.uri
            });
        });

    }

    render = () => {

        return(
           <View
           style={{flex:1,justifyContent:'center',alignItems:'center'}}
           >
              <Text>SignIn</Text>

              <FastImage
              style={{width:300,height:400}}
              source={{uri:this.state.sourceImage}}
              />

              <Button title='Pick Image' onPress={this.onPikImage}/>
           </View>
        );

    }
}