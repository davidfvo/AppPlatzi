import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import MovieList from './index';
import MovieDetailList from './videos/movieListComponent/movie-screen/index'


const stackNavigator = createSwitchNavigator({
    HomeMovie: MovieList,
    DetailMovie: MovieDetailList
    }, {
        initialRouteName: 'HomeMovie'
    }
)


const AppContainer = createAppContainer(stackNavigator);


export default class App extends Component {
    render(){
        return(
            <AppContainer />
        )
    }
}
