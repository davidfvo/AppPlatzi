import React, {Component} from 'react';
import {View , Text, Image , StyleSheet , TouchableHighlight , Dimensions} from 'react-native';
import Color from '../../constant-list'

const deviceWidth = Math.round(Dimensions.get('window').width)/3

export default function RenderItem(props){
    return(
        <TouchableHighlight onPress={() => props.onDetail(props)} style={styles.button}>
            <View style={[styles.container,
                        {
                            paddingHorizontal: props.padH,
                            backgroundColor: Color.backgroundColor /* props.isPair ? "rgba(15,157,88, 0.2)" : "rgba(66,133,244, 0.2)" */,
                        }]}>
                <View style={styles.imageSection}>
                        <View>
                            {props.photo ?
                                (<Image
                                    source={{ uri: props.photo }}
                                    style={[styles.images,
                                    {
                                        // width: props.size ? props.size : 100,
                                        width: 80,
                                        height: props.size ? props.size : 100,
                                        borderRadius: props.size ? props.size / 10 : 100
                                    }]}

                                />) : (<Text>Error al mostrar imagen</Text>)}
                        </View>
                        <View style={styles.genre}>
                            <Text style={styles.genreText}>{props.genre}</Text>
                        </View>
                </View>
                
                {/* <View style={styles.infoSection}>
                    <Text style={styles.movieTitle}>{props.title}</Text>
                    {props.year &&
                    <Text style={styles.infoSectionYear}>{props.year}</Text>}
                    <Text>{props.rating}</Text>
                </View> */}
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'white',
    },
    container: {
        paddingVertical: 8,
        width: deviceWidth,
        justifyContent:'center',
        alignContent:"center"
    },
    images: {
        resizeMode: 'contain',
    },
    imageSection: {
        marginHorizontal:5,
        alignSelf:'center'
    },
    infoSection: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    infoSectionYear: {
        backgroundColor: 'green',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    genreText: {
        backgroundColor: 'black',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    genre:{
        position: 'absolute',
        zIndex: 1,
    },
    qwerty:{
        
    }
})