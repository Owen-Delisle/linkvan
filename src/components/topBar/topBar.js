import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const shelterOn = require('../../assets/asset_index/mapServiceBtn_shelter_selected.png');
const shelterOff = require('../../assets/asset_index/mapServiceBtn_shelter_default.png');
const foodOn = require('../../assets/asset_index/mapServiceBtn_food_selected.png');
const foodOff = require('../../assets/asset_index/mapServiceBtn_food_default.png');
const medicalOn = require('../../assets/asset_index/mapServiceBtn_medical_selected.png');
const medicalOff = require('../../assets/asset_index/mapServiceBtn_medical_default.png');
const wifiOn = require('../../assets/asset_index/mapServiceBtn_wifi_selected.png');
const wifiOff = require('../../assets/asset_index/mapServiceBtn_wifi_default.png');

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      curDate: ['15','September','2019'],
      monthsL: [{value: "January"},{value: "Feburary"},{value: "March"},{value: "April"},{value: "May"},{value: "June"},{value: "July"},{value: "August"},{value: "September"},{value: "October"},{value: "November"},{value: "December"}],
      datesL: [{value: '1 st'},{value: '2 nd'},{value: '3 rd'},{value: '4 th'},{value: '5 th'},{value: '6 th'},{value: '7 th'},{value: '8 th'},{value: '9 th'},{value: '10 th'},
              {value: '11 th'},{value: '12 th'},{value: '13 th'},{value: '14 th'},{value: '15 th'},{value: '16 th'},{value: '17 th'},{value: '18'},{value: '19 th'},{value: '20 th'},{value: '21 st'},{value: '22 nd'},{value: '23 rd'},{value: '24 th'},{value: '25 th'},{value: '26 th'},{value: '27 th'},{value: '28 th'},{value: '29 th'},{value: '30 th'},{value: '31 th'}],
      shelterSelected: true,
      foodSelected: true,
      medicalSelected: true,
      wifiSelected: true,
    };
  }
  componentDidMount() {

    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      date:
        [date, month, year],
    });
    // setdate(date,month);


  }

  // setdate(date, month){
  //   let d = this.state.datesL[date-1]
  //   let m = this.state.monthsL[month]
  //   curDate= [d,m]
  //   this.setState({curDate: curDate})
  // }

  render() {
    return (
      <View style={styles.topBarView}>
        <Text style={styles.topBarText}>When you will arrive:</Text>
        <View style={styles.dropBar}>
          <View style={{flex: 1}}>
          <Dropdown  
            ref={'this.state.curDate[0]'}
            data={this.state.datesL}/>
          </View>
          <View style={{flex: 1}}>
          <Dropdown 
            ref={this.state.curDate[1]} 
            data={this.state.monthsL}/>
          </View>
        </View>
        <Text style={styles.topBarText}>Find a service near you:</Text>
        <View style={styles.iconBar}>
          <TouchableOpacity
            onPress={() =>{
              this.setState({shelterSelected: !this.state.shelterSelected})
              this.state.shelterSelected ? this.props.addType('shelter') : this.props.removeType('shelter')
            }
            }>
            <Image
              style={styles.topBarIcon}
              source={
                this.state.shelterSelected === true ? shelterOn : shelterOff
              }></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({foodSelected: !this.state.foodSelected}),
              this.state.foodSelected ? this.props.addType('food') : this.props.removeType('food')
            }
            }>
            <Image
              style={styles.topBarIcon}
              source={
                this.state.foodSelected === true ? foodOn : foodOff
              }></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>{
              this.setState({medicalSelected: !this.state.medicalSelected}),
              this.state.medicalSelected ? this.props.addType('medical') : this.props.removeType('medical')
            }
            }>
            <Image
              style={styles.topBarIcon}
              source={
                this.state.medicalSelected === true ? medicalOn : medicalOff
              }></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>{
              this.setState({wifiSelected: !this.state.wifiSelected})
              this.state.wifiSelected ? this.props.addType('wifi') : this.props.removeType('wifi')
            }
            }>
            <Image
              style={styles.topBarIcon}
              source={
                this.state.wifiSelected === true ? wifiOn : wifiOff
              }></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBarView: {
    backgroundColor: '#018495',
    flex: 3 / 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  topBarText: {
    color: '#F1E3A7',
    fontSize: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
    marginLeft: '10%'
  },
  topBarIcon: {
    height: 50,
    width: 50,
  },
  dropBar: {
    width: '50%',
    marginLeft: '10%',
    flexDirection: 'row',
    color: 'red'
  },
  iconBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  red: {
    color: 'red',
  },
});
