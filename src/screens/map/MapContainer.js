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
      types: [],
      focusedLocationID: '',
      filteredLocations: [],
      locations: [
        {
          type: 'shelter',
          id: '1',
          longitude: '-123.124432',
          latitude: '49.281058',
          title: 'Directions Youth Safehouse',
          description: 'Shelter: Open (5)',
        },
        {
          type: 'wifi',
          id: '2',
          longitude: '-123.143947',
          latitude: '49.290786',
          title: 'Dugout Drop-in Centre',
          description: 'Wifi: Open',
        },
        {
          type: 'food',
          id: '3',
          longitude: '-123.146740',
          latitude: '49.274334',
          title: 'Strathcona Community Centre',
          description: 'Food: Avaliable (15)',
        },
        {
          type: 'medical',
          id: '4',
          longitude: '-123.102799',
          latitude: '49.265380',
          title: 'Yaletown Medical Clinic',
          description: 'medical: Open till 4pm',
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({
      filteredLocations: this.state.locations
    })
  }

  addType(type) {
    let newTypes = this.state.types
    newTypes.push(type)
    this.setState({types: newTypes});
    this.setState({
      filteredLocations: this.filterLocations(this.state.locations, this.state.types)
    });
    // console.log("ADD TYPE", this.state.types);
  }

  removeType(t) {
    let newTypes = this.state.types
    // let filteredTypes = newTypes.filter(type => type != t)
    let filteredTypes = newTypes.filter(type => type != t)
    // if(filteredTypes.length == 0){
    //   filteredTypes = ['food','medical','shelter','wifi']
    // }
    this.setState({types: filteredTypes}, ()=> {
      // console.log("REMOVE TYPE", filteredTypes);
      this.setState({
        filteredLocations: this.filterLocations(this.state.locations, this.state.types)
      });
    })

    
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
                locations={this.state.filteredLocations}
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
