import 'react-native-gesture-handler';
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import screen from './screen/Login.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => screen);
