import React, {Component} from 'react';
import {View, Text} from 'react-native';
import News from './News';

export default class NewsContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: 'terry',
    };
  }

  render() {
    return <News name={this.state.terry} />;
  }
}
