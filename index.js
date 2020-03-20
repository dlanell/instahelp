/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {WelcomeScreen} from './src/components/WelcomeScreen';

AppRegistry.registerComponent(appName, () => WelcomeScreen);
