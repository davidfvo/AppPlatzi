/* import React, { Component } from 'react';
import { View , ActivityIndicator , Dimensions} from 'react-native';
import Video from 'react-native-video';
import Layout from './layout';

import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        list: state.videoURL
    }
}


class VideoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false
        }
    }
    onBuffer = ({isBuffering}) => {
        this.setState(
            {loading: isBuffering}
        )
    }
    onLoad = () => {
        this.setState(
            { loading: false }
        )
    }
    render() {
        return(
            <Layout
                loader={
                    this.state.loading &&
                    <ActivityIndicator size="large" color='red' />
                }
            >
                <Video
                    source={{uri: this.props.list}}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    }}
                    onBuffer={this.onBuffer}
                    // onLoad={this.onLoad}
                    resizeMode="cover" />
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(VideoComponent)
 */
