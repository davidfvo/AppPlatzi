import React, {Component} from 'react';
import {TouchableHighlight , Text} from 'react-native';

export function PlayPause(props) {
    return(
        <TouchableHighlight onPress={props.onPress}>
            {props.pause ? <Text>Pause</Text> : <Text>Play</Text>}            
        </TouchableHighlight>
    )
} 