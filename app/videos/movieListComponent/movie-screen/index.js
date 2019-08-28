import React, { Component } from 'react';
import { View, ScrollView, Text, Button, Keyboard} from 'react-native';
import { Header } from '../../../sections/header';
import { connect } from 'react-redux';
import NavigationService from '../../../NavigationService';
import VideoComponent from '../../videoComponent/videoComponent';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../../../store';
import Home from '../../../screens/Home'
import {Loading} from '../../components/loading';
import DetailList from './detailList'

export default class MovieDetailScreen extends Component {
    static show() {
        NavigationService.navigate("DetailMovie");
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
                        <DetailList onImagePress={() => this.props.navigation.navigate("HomeMovie")} /* navigationButton={() => this.props.navigation.navigate("HomeMovie")}  *//>
                    </Home>
                </PersistGate>
            </Provider>
        )
    }
}