/**
 * KYIV MEDIA
 * 25.11.2019
 */
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import App from './App';
//Components
import MainComponent from './components/MainComponent';
import DetailComponent from './components/DetailComponent';
import ThirdComponent from './components/ThirdComponent';
//Screen names
import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';

const App = StackNavigator({
    MainScreen: {
        screen: MainComponent,
    },
    DetailScreen: {
        screen: DetailComponent,
    },
    ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: {
            headerTitle: 'Third',
        },
    },
});
AppRegistry.registerComponent(appName, () => App);