import React from 'react';
import {View , Text , StyleSheet } from 'react-native';

export const Empty = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 20,
        width: '100%'
    },
})