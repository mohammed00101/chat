import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


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