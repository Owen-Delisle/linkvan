import React, {Component} from 'react';
import Facilities from './Facilities';

export default class FacilitiesContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Facilities />;
  }
}
