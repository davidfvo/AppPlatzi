import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, YellowBox, Image, ActivityIndicator, Button } from 'react-native';

function videos(state = {}, action) {
    const x = action.payload
    switch (action.type) {
        case 'SET_SEGGESTION_LIST': {
            return { ...state, ...action.payload }
        }
        case 'SET_CATEGORY_LIST': {
            return { ...state, ...action.payload }
        }
        case 'SET_BIGBUNNY_VIDEO': {
            return { ...state, ...action.payload }
        }
        case 'SET_ITEM_DETAIL': {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export default videos;