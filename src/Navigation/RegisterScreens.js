import { Navigation } from 'react-native-navigation';
import SplashScreen from '../Splash';
import LoginScreen from '../screen/Auth/Login';
import SignUpScreen from '../screen/Auth/SignUp';
import HomeScreen  from '../screen/Home';


export default () => {
    //register screens 
Navigation.registerComponent('chat.Splash',() => SplashScreen);
Navigation.registerComponent('chat.Auth.Login',() => LoginScreen);
Navigation.registerComponent('chat.Auth.SignUp',() => SignUpScreen);
Navigation.registerComponent('chat.Home',() => HomeScreen);

}