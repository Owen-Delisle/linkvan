import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class TopBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          
    };
    this.onDayPress = this.onDayPress.bind(this);
}

render() {
    return(
        <View style={styles.calendarBackground}>
            <Calendar 
                style={styles.calendarStyle}
                onDayPress={this.onDayPress}
                markedDates={{[this.state.selected]: {selected: true}}}
                theme={{
                    backgroundColor: '#018495',
                    calendarBackground: '#018495',
                    textSectionTitleColor: '#018495',
                    selectedDayBackgroundColor: '#F1E3A7',
                    selectedDayTextColor: '#018495',
                    todayTextColor: '#F1E3A7',
                    dayTextColor: '#FF8587',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#F1E3A7',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    monthTextColor: '#F1E3A7',
                    indicatorColor: 'blue',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 14
                  }}
                //   markedDates={{
                //     '2019-09-17': { marked: true},
                //     // '2019-09-20': { marked: true, selectedColor: 'blue'},
                //     // '2019-09-22': { marked: true, selectedColor: 'blue'},
                //     // '2019-09-05': { marked: true, selectedColor: 'blue'},
                //     // '2019-09-10': { marked: true, selectedColor: 'blue'},
                //     // '2019-09-01': { marked: true, selectedColor: 'blue'},
                    
                // }}
                  hideArrows={false}
            />
        </View>

    );
}
onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
    calendarStyle: {
        paddingTop: '5%',
        borderWidth: 1,
        borderColor: '#018495',
        height: '12.5%'
 
    },
    calendarBackground:{
        backgroundColor: "#F1E3A7",
        height: '100%',
    }
    
});
