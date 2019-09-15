import React, {Component} from 'react';
import {View, Text} from 'react-native';
import EventCal from '../../components/eventCal/'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <EventCal/>
      </View>
    );
  }
}
