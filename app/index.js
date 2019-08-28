/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, YellowBox, Image, ActivityIndicator, Button, Vibration , Dimensions , TouchableOpacity} from 'react-native';
import Home from './screens/Home';
import { Header } from './sections/header';
import MovieSection from './videos/movieListComponent/movieSection';
import CategorySection from './videos/categoryComponents/categorySection';
import VideoComponent from './videos/videoComponent/videoComponent';
import { source } from './api/source';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import { video } from './api/source';
import NavigationService from './NavigationService';
import {Loading} from './videos/components/loading';
import Searcher from './videos/searcher/searcher';
import {movieSearch , movieList} from './videos/components/api';

const DURATION = 10000;
const PATTERN = [10, 2000, 10];
const deviceWidth = Math.round(Dimensions.get('window').width)

export default class App extends Component {
  static show() {
    NavigationService.navigate("HomeMovie");
  }
  _handlePress = itemDetail => {
    store.dispatch({
      type: 'SET_ITEM_DETAIL',
      payload: {
        itemDetail
      }
    })
    this.props.navigation.navigate("DetailMovie")
  }
  _handleSubmit = async (item) => {
    if ((item.field).length > 3) {
      const suggestionList = await movieSearch(item.field);
      store.dispatch({
        type: 'SET_SEGGESTION_LIST',
        payload: {
          suggestionList
        }
      })
    }
  }
  _refeshMovieList = async () => {
    try {
      const suggestionList = await movieList();
      store.dispatch({
        type: 'SET_SEGGESTION_LIST',
        payload: {
          suggestionList
        }
      })
      this.props.navigation.navigate("HomeMovie")
      /* const test = await moviTest()
      this.setState({ test: test }) */
    } catch (err) {
      console.warn("Error en MovieSection Service: " + err)
    }
  }

  componentWillMount() {
    const videoURL = video.bigBunny
    store.dispatch({
      type: 'SET_BIGBUNNY_VIDEO',
      payload: {
        videoURL
      }
    })
  }
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Home>
            <Header onImagePress={this._refeshMovieList} disabled={false} /* navigationButton={null} *//>
            <ScrollView>
              {/*<Button title="Go Detail" onPress={() => this.props.navigation.navigate("DetailMovie")}/>
              <VideoComponent />
              <Text>Searcher</Text> */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => Vibration.vibrate(5000/* DURATION *//* PATTERN, true */)}>
                  <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Vibration.cancel()}>
                  <Text style={styles.buttonText}>Pause</Text>
                </TouchableOpacity>
              </View>
              <Searcher onSubmitHandler={this._handleSubmit} />
              <CategorySection />
              <MovieSection onDetail={this._handlePress}/>
            </ScrollView>
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 30,
    alignSelf: "center",
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  button:{
    marginHorizontal: 5,
    backgroundColor: "green",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 5,
    width: deviceWidth/3
  },
  buttonText:{
    color: "white",
    alignSelf:"center"
  }
});
// react-native run-android --port 8097
// react-native start --port 8097
// react-native link
// react-native run-android --variant=release
// adb reverse tcp:8097 tcp:8097