/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';



// import App from './App';
// AppRegistry.registerComponent(appName, () => App);

import Login from "./js/view/login/Login";
AppRegistry.registerComponent("Login",() => Login)