import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

function DayCalendar({day, dayname, isToday}){
    return (
        <View style={isToday ? styles.todaycalendar : styles.daycalendar}>
            <Text style={styles.day}>{dayname}</Text>
            <Text style={styles.day}>{day}</Text>
        </View>
    )
}

export default function Footer(){
    return (
        <View style={styles.header}>
            <Image style={styles.calendarDirection} source={require('../../../image/calenderLeft.png')} />
            <DayCalendar day={24} dayname={"일"} />
            <DayCalendar day={25} dayname={"월"} />
            <DayCalendar day={26} dayname={"화"} />
            <DayCalendar day={27} dayname={"수"} />
            <DayCalendar day={28} dayname={"목"} />
            <DayCalendar day={29} dayname={"금"} />
            <DayCalendar isToday={true} day={30} dayname={"토"} />
            <Image style={styles.calendarDirection} source={require('../../../image/calendarRight.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flex : 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    marginVertical: 10,
  },
  day:{
    textAlign: 'center',
    color: 'black',
    paddingVertical: 5,
  },
  calendarDirection:{
    marginVertical: 35,
    marginHorizontal: 5
  },
  todaycalendar:{
    backgroundColor: "white",
    elevation:1,
    paddingHorizontal: 18,
    marginHorizontal: 5,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#EDEDED',
    borderWidth: 1,
  },
  daycalendar: {
    paddingHorizontal: 9,
    marginHorizontal: 5,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
