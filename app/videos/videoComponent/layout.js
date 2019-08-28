import React, { Component } from 'react';
import { View, StyleSheet , Dimensions } from 'react-native';
import { switchCase } from '@babel/types';

/* let orientation = () => {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
        return true;
    }
    else {
        return false
    }
};

const videoHeight = orientation ? 200 : 400; */

export default class Layout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.video}> 
                    <View style={styles.loader}>
                        {this.props.loader}
                    </View>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    video: {
        backgroundColor: 'black',
        height: 200
    },
    loader:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom:0,
        zIndex: 1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center"
    },
})