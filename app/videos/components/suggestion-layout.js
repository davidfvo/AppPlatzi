import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export class Layout extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                <ImageBackground
                    source={{ uri: this.props.backGround }}
                    style={[styles.container]}
                >
                    <View>
                        {this.props.children}
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,

    },
    container: {
        width: '100%',
    }
})