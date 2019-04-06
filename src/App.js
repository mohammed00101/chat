import { Navigation } from 'react-native-navigation';
import registerScreens from './Navigation/RegisterScreens';

//register screens
registerScreens();



//start app with splash  screen
Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            component:{
                name:'chat.Splash'
            }
        }
    });
});
