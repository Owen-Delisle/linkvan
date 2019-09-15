import React, {Component} from 'react';
import Map from './Map';
import {View, Text, ActivityIndicator} from 'react-native';
import {Query} from 'react-apollo';
import {QueryLocations} from '../../api';
export default class MapContainer extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      types: ['food', 'shelter'],
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
      locations: this.filterLocations(this.state.locations, this.state.types),
    });
  }

  addType(type) {
    this.setState({types: this.state.types.push(type)});
  }

  removeType(type) {
    this.setState({types: this.state.types.splice(type, 1)});
  }

  filterLocations(locations, types) {
    return locations.filter(location => types.includes(location.type));
  }

  render() {
    return (
      <Query query={QueryLocations}>
        {({loading, error, data}) => {
          console.log(data);
          if (loading) {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: '#1D2C4D',
                }}>
                <ActivityIndicator size="large" color="white" />
              </View>
            );
          }
          if (error) {
            return (
              <View>
                <Text>{error}</Text>
              </View>
            );
          }
          if (data) {
            return (
              <Map
                locations={this.state.locations}
                addType={this.addType.bind(this)}
                removeType={this.removeType.bind(this)}
                data={data}
              />
            );
          }
        }}
      </Query>
    );
  }
}
