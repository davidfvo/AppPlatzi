import React, { Component } from 'react';
import { FlatList, View, Text, Button, TextInput, StyleSheet , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../../constant-list'

export const ImdButton = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.ImdButton,{ backgroundColor: "black"}]} onPress={props.onPress}>
                <Icon
                    name="imdb"
                    color="yellow"
                    size={50}
                    style={styles.icon}
                    selectedIconColor={Colors.backgroundColor}
                />
            </TouchableOpacity>
        </View>
    )
}

export const YtsButton = props => (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.ImdButton, { borderRadius: 8, backgroundColor: "green" }]} onPress={props.onPress}>
            <Icon
                name="yc-square"
                color="black"
                size={50}
                style={styles.icon}
                selectedIconColor={Colors.backgroundColor}
            />
        </TouchableOpacity>
    </View>
);

export const DownloadButton = props => (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.ImdButton, { }]} onPress={props.onPress}>
            <Icon
                name="download"
                size={50}
                style={styles.icon}
                selectedIconColor={Colors.backgroundColor}
            />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container:{
        marginBottom: 5,
        flexDirection: "row",
    },
    ImdButton:{
        justifyContent:"center",
        alignContent:"center",
        paddingHorizontal: 0,
        paddingVertical: 0,
        height:42,
        borderRadius:5
    },
    icon:{
    },
    qwerty:{
        
    }
})
