import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import {source} from '../../api/source'
import Colors from '../../constant-list'

export class LoaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={this.props.color ? this.props.color : "red"} styles={styles.loader} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 20,
        width: '100%',
    },
    loader: {
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
})

export const Loading = () => {
    return (
        <View style={{flex: 1, backgroundColor: Colors.backgroundColor, justifyContent: "center", alignItems: "center"}}>
            <Image
                style={{resizeMode: 'cover',height: 50, width: /* 200 */200}}
                source={{ uri: source.logo }}
            />
            <ActivityIndicator size="large" color="red" />
        </View>
    )
}