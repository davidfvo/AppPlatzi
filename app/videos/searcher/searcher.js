import React,{Component} from 'react';
import {View, TextInput} from 'react-native';

export default class Searcher extends Component {
    constructor(){
        super()
        this.state = {
            field: ""
        }
    }
    _textHandler = key => val => {
        this.setState({ [key]: val })
    }

    render(){
        return(
            <View>
                <TextInput 
                    onChangeText={this._textHandler('field')} 
                    value={this.state.field} 
                    autoCorrent={false}
                    autoCapitalize="none"
                    /* revisar esta parte */
                    onSubmitEditing={() => this.props.onSubmitHandler(this.state)}
                    placeholder="Enter a word to search"
                    placeholderTextColor="gray"
                />
            </View>
        )
    }
}