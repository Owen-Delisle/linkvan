import React, {Component} from 'react';
import Map from './Map';
export default class MapContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      focusedLocationID: '',
      locations: [
        {
          type: 'shelter',
          id: '1',
          longitude: '-123.124432',
          latitude: '49.281058',
          title: '1',
          description: '1',
        },
        {
          type: 'shelter',
          id: '2',
          longitude: '-123.143947',
          latitude: '49.290786',
          title: '2',
          description: '2',
        },
        {
          type: 'food',
          id: '3',
          longitude: '-123.146740',
          latitude: '49.274334',
          title: '3',
          description: '3',
        },
        {
          type: 'hospital',
          id: '4',
          longitude: '-123.102799',
          latitude: '49.265380',
          title: '4',
          description: '4',
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({
      locations: this.filterLocations(this.state.locations, this.state.type),
    });
  }

  setType(type) {
    this.setState({type});
  }

  filterLocations(locations, type) {
    return locations.filter(location => location.type == type);
  }

  render() {
    return (
      <Map locations={this.state.locations} setType={this.setType.bind(this)} />
    );
  }
}