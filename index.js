/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppContainer from './app/navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppContainer);
