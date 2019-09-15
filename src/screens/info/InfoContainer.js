import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Info from './Info';

export default class InfoContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Info />;
  }
}
