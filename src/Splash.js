import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import FastImage  from 'react-native-fast-image';
import splashImage  from './assets/Splash.jpg';
import AsyncStorage from '@react-native-community/async-storage';
import {  USER_KEY} from  './utils/config';
import {goApp,goAuth} from './Navigation/navigation';
import deepstreamConnection from './services/deepstream';



const { width, height} = Dimensions.get('window');

export default class SplashScreen extends Component {


    componentDidMount= async () => {


        try{

        //connect with deepstream
         const ds = await deepstreamConnection();

         const user =  await AsyncStorage.getItem(USER_KEY);

         // authenticated
         if(user){
            console.log('auth');

           setTimeout(()=>goApp(),3000);

         }
         //no authentication
         else{

            console.log('no auth');
            setTimeout(()=> goAuth(),3000);
         } 

        }catch(error){

        //no authentication
        setTimeout(()=> goAuth(),3000);

        }
    }

    render = () => {

        return(
              <FastImage
              style={styles.splashImage}
              source={splashImage}
              />
        );

    }
}

const styles = StyleSheet.create({

    splashImage:{
        flex:1,
        width,
        height
    }
});