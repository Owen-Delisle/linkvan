import React, {Component} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

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
            shelterSelected: true,
            foodSelected: true,
            medicalSelected: true,
            wifiSelected: true
        }
    }


    render() {
        
        return(
            <View style={styles.topBarView}>
                <Text style={styles.topBarText}>When you will arrive:</Text>
                <Text style={styles.topBarText}>Something</Text>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => this.setState({shelterSelected: !this.state.shelterSelected})} >
                    <Image style={styles.topBarIcon} source={this.state.shelterSelected === true ? shelterOn : shelterOff}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({foodSelected: !this.state.foodSelected})} >
                    <Image style={styles.topBarIcon} source={this.state.foodSelected === true ? foodOn : foodOff}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({medicalSelected: !this.state.medicalSelected})} >
                    <Image style={styles.topBarIcon} source={this.state.medicalSelected === true ? medicalOn : medicalOff}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({wifiSelected: !this.state.wifiSelected})} >
                    <Image style={styles.topBarIcon} source={this.state.wifiSelected === true ? wifiOn : wifiOff}></Image>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topBarView: {
        backgroundColor: '#018495',
        flex: 3/10,
        flexDirection: 'column',
        justifyContent: 'center',
      },
    topBarText: {
        color: '#F1E3A7',
        fontSize: 20,
        textAlign: 'left',
        textAlignVertical:'center',
        marginVertical: 10,
        marginHorizontal:50,
      },
    topBarIcon:{
        height: 50,
        width:50,
    },
    iconBar:{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection:'row'
    },
    red: {
      color: 'red',
    },
  });