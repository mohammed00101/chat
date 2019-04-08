import { Navigation } from 'react-native-navigation';
import registerScreens from './Navigation/RegisterScreens';
import App from './Navigation/navigation';



//register screens
registerScreens();
//start app with splash  screen
App();
// Navigation.events().registerAppLaunchedListener(()=>{
//     Navigation.setRoot({
//         root:{
//             component:{
//                 name:'chat.Splash'
//             }
//         }
//     });
// });
