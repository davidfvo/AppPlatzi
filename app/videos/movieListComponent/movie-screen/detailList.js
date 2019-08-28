import React, { Component } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Image , Linking} from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../../../sections/header';
import VideoComponent from './video-view';
import { ImdButton , YtsButton , DownloadButton} from './buttons';
import StarRating from './rating-component'
import Colors from '../../../constant-list'

function mapStateToProps(state) {
    return {
        list: state.itemDetail
    }
}

class DetailList extends Component {
    _LinkingTo = url => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err))
    }
    /* VideoPlay = () => {
        return (
            <VideoComponent youTubeId={this.props.list.youTubeId} />
        )
    }
    componentWillMount() {
        this.VideoPlay()
    }
    componentWillUnmount() {
        this.VideoPlay()
    } */
    render() {
        return (
            <View style={styles.container}>
                <Header title={`${this.props.list.title}`} onImagePress={this.props.onImagePress} disabled={false}/>
                <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.scrollViewContainer}>
                    <View style={styles.movieDetail}>
                        <View style={styles.photoDetail}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: this.props.list.photo }}
                                />
                            </View>
                            <View style={styles.titleContainer}>
                                {/* <Text style={styles.title}>{this.props.list.title}</Text> */}
                                <View style={styles.buttonContainer}>
                                    <ImdButton onPress={() => this._LinkingTo(`https://www.imdb.com/title/${this.props.list.imdbId}`)} />
                                    <YtsButton onPress={() => this._LinkingTo(this.props.list.ytsURL)} />
                                    <DownloadButton onPress={() => this._LinkingTo(this.props.list.firstTorrent)} />
                                </View>
                                <View style={styles.infoPlus}>
                                    {/* <MyButton onPress={() => this._LinkingToImdb()} /> */}
                                    <Text style={styles.summaryText}>Year: {this.props.list.year}</Text>
                                    <Text style={styles.summaryText}>Genre: {this.props.list.genre}</Text>
                                    <StarRating value={this.props.list.rating/2} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.summaryContainer}>
                            <Text style={styles.summaryText}>{this.props.list.summary}</Text>
                        </View>
                        <VideoComponent youTubeId={this.props.list.youTubeId} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollViewContainer:{
        backgroundColor: Colors.backgroundColor
    },
    movieDetail: {
        paddingHorizontal: 5,
        paddingBottom: 10
    },
    photoDetail: {
        paddingVertical: 15,
        flexDirection: 'row',
    },
    image: {
        width: 160,
        height: 200,
        resizeMode: 'contain',
    },
    imageContainer:{
        width: "40%"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'center',
    },
    titleContainer:{
        width: '60%',
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        flex: 1,
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignContent: 'space-around',
    },
    infoPlus:{
        justifyContent: "center",
        alignContent: "center",
    },
    summaryContainer: {
        alignContent: "flex-start",
        paddingBottom: 10,
    },
    summaryText:{
        fontSize: 16
    },
    qwerty:{
        
    }
})

export default connect(mapStateToProps)(DetailList)
