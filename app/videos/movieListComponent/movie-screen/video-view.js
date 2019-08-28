import React, { Component } from 'react';
import { View , StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';


const makeHTML = (id) => {
  return (`
    <style>
      .video {
        position: relative;
        padding-bottom: 56.25%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `)
}


export default class VideoWeb extends React.Component {
  render() {
      return (
        <View style={styles.trailer}>
          <WebView
            source={{ html: makeHTML(this.props.youTubeId) }}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  trailer: {
    height: 200,
    marginBottom: 5,
  },
})