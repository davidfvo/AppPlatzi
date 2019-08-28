import React, {Component} from 'react';
import {View , Text, Image , StyleSheet , SafeAreaView , TouchableOpacity} from 'react-native';
import { source } from '../api/source'

export class Header extends Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.rowTitle}>
                    <TouchableOpacity style={styles.imageContainer} onPress={this.props.onImagePress} disabled={this.props.disabled}>
                        <View >
                            <Image
                                style={styles.image}
                                source={{uri: source.logo}}
                            />
                        </View>
                    </TouchableOpacity>
                    {(this.props.title !== undefined) ? <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View> : null }
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 2,
        paddingHorizontal: 10, //probar
        /* backgroundColor: "#87ceeb" */
    },
    imageContainer:{
        width: "30%",
        justifyContent: "center"
    },
    image: {
        resizeMode: 'cover',
        height: 30,
        width: /* 200 */'100%',
    },
    title:{
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: "bold",
    },
    titleContainer: {
        width: '70%',
        marginLeft: 5,
        paddingLeft: 5,
        borderLeftWidth: 1,
        borderLeftColor: "green"
    },
    rowTitle: {
        flexDirection: 'row',   
    },
    qwerty:{
        
        /* "cover" | "contain" | "stretch" | "repeat" | "center" */
    }
})