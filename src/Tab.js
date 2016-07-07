import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class Tab extends Component {
  render() {
    return (
      <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel='Home'>My</Text>
        <Text tabLabel='Favourites'>favorite</Text>
        <Text tabLabel='Relay'>project</Text>
      </ScrollableTabView>
    )
  }
}
