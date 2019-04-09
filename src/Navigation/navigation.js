import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {  USER_KEY} from  '../utils/config';
import deepstreamConnection from '../services/deepstream';


// navigation to  app authentication
export const goAuth = () => Navigation.setRoot({
    root:{
        bottomTabs:{
            id: 'Auth',
            children:[
                {
                    component:{
                     name:'chat.Auth.Login',
                     options:{
                         bottomTab:{
                             text:'Login',
                            //  fontSize:12,
                             icon:require('../assets/login.png')
                         }
                     }
                    }
                },
                {
                    component:{
                        name:'chat.Auth.SignUp',
                        options:{
                            bottomTab:{
                                text:'SignUp',
                                // fontSize:12,
                                icon:require('../assets/signup.png')
                            }
                        }
                    }
                }
            ]
        }
    }
});


// navigation  go to  app 
export const goApp = () => Navigation.setRoot({
    root:{
        component:{
            id: 'App',
            name:'chat.Home'
        }
    }

});



export default () => Navigation.events().registerAppLaunchedListener(async ()=>{

    try{

        //connect with deepstream
         const ds = await deepstreamConnection();

         const user =  await AsyncStorage.getItem(USER_KEY);

         // authenticated
         if(user){
            console.log('auth');
            goAuth();

         }
         //no authentication
         else{

            console.log('no auth');
            goApp();
        } 

        }catch(error){

        //no authentication
         goAuth();

        }
    // Navigation.setRoot({
    //     root:{
    //         component:{
    //             name:'chat.Splash'
    //         }
    //     }
    // });
});
