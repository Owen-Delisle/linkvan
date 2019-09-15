import React, {Component} from "react";
import {View, Text} from "react-native";
import TopBar from "./topBar"

export default class TopBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
        
        render() {
            return(<TopBar addType={this.props.addType} removeType={this.props.removeType}/>)
        }
    }