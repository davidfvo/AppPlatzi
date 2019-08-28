import React, {Component} from 'react';
import {View} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Colors from '../../../constant-list'

export default class StarRating extends Component {
    render(){
        return(
            <View>
                <Rating 
                    type="custom"
                    ratingBackgroundColor='gray'
                    ratingCount={5}
                    imageSize={30}
                    startingValue={this.props.value}
                    readonly={true}
                    style={{ paddingVertical: 10}}
                    ratingTextColor="black"
                    tintColor={Colors.backgroundColor}
                    ratingColor="green"
                />
            </View>
        )
    }
}