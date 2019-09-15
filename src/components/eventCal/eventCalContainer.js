import React, {Component} from "react";
import {View, Text} from "react-native";
import EventCal from "./eventCal"

export default class EventCalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
        
        render() {
            return(<EventCal/>
                )
        }
    }