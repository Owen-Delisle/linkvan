import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {View, Image} from 'react-native';
import styles from './styles';
import {Marker} from 'react-native-maps';
import TopBar from '../../components/topBar';

const marker = require('../../assets/asset_index/pin_unselected.png');
const selectedMarker = require('../../assets/asset_index/pin_selected.png');

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedMarkerIndex: '', type: 'food'};
  }

  onPressMarker(e, index) {
    this.setState({selectedMarkerIndex: index});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 49.281058,
            longitude: -123.124432,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.props.locations.map((location, i) => (
            <Marker
              onPress={e => this.onPressMarker(e, i)}
              key={location.id}
              coordinate={{
                longitude: location.longitude,
                latitude: location.latitude,
              }}
              title={location.title}
              description={location.description}>
              <Image
                style={(style = {height: 30, width: 20})}
                source={
                  this.state.selectedMarkerIndex === i ? selectedMarker : marker
                }
              />
            </Marker>
          ))}
        </MapView>
        <TopBar setType={this.props.addType} />
      </View>
    );
  }
}
