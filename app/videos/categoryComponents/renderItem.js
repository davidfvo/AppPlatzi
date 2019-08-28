import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight , TouchableOpacity} from 'react-native';

export default function RenderItem(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={styles.container}>
            <ImageBackground
                source={{
                    uri: props.backGround
                }}
                style={styles.backGround}
                imageStyle={{ borderRadius: 10 }}
            >
                <Text style={[styles.genreText, { fontSize: props.textSize }]}>{props.genre}</Text>
            </ImageBackground>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 10  
    },
    backGround: {
        width: 150,
        height: 75,
        justifyContent: "center",
    },
    genreText: {
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
        textShadowColor: 'rgba(0,0,0, 1)',
        textShadowRadius: 15,
    },
    // fasdedr: {

    // }
})