import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ItemSeparator(props) {
    return (
        <View 
            style={
            {
                borderTopColor: props.color ? props.color: 'green',
                borderRightColor: props.color ? props.color: 'green',
                borderTopWidth: props.horizontal ? 1 : 0,
                marginRight: props.vertical ? 5 : 0,
            }}
        />
    )
}