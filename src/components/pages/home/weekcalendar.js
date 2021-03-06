import React, {useEffect, useState} from 'react';
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
var currentDay = new Date();
var theYear = currentDay.getFullYear();
var theMonth = currentDay.getMonth();
var theDate = currentDay.getDate();
var theDayOfWeek = currentDay.getDay();
var thisWeek = [];

for (var i = 0; i < 7; i++) {
  var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
  var yyyy = resultDay.getFullYear();
  var mm = Number(resultDay.getMonth()) + 1;
  var dd = resultDay.getDate();

  mm = String(mm).length === 1 ? '0' + mm : mm;
  dd = String(dd).length === 1 ? '0' + dd : dd;

  thisWeek[i] = dd;
}

function DayCalendar({day, dayname, isToday}) {
  return (
    <View style={isToday ? styles.todaycalendar : styles.daycalendar}>
      {isToday && (
          <Image
            source={require('../../../image/Union.png')}
            style={styles.union}
          />
      )}
      <Text style={styles.dayname}>{dayname}</Text>
      <Text style={styles.day}>{day}</Text>
    </View>
  );
}

export default function Footer() {
  const [todayNum, setTodayNum] = useState([]);
  const temp = [];
  useEffect(() => {
    isToday();
  }, []);
  const isToday = () => {
    for (var i = 0; i < 7; i++) {
      if (theDate === thisWeek[i]) {
        temp[i] = true;
      } else {
        temp[i] = false;
      }
    }
    setTodayNum(temp);
  };
  return (
    <View style={styles.header}>
      <Image
        style={styles.calendarDirection}
        source={require('../../../image/calenderLeft.png')}
      />
      <DayCalendar day={thisWeek[0]} dayname={'일'} isToday={todayNum[0]} />
      <DayCalendar day={thisWeek[1]} dayname={'월'} isToday={todayNum[1]} />
      <DayCalendar day={thisWeek[2]} dayname={'화'} isToday={todayNum[2]} />
      <DayCalendar day={thisWeek[3]} dayname={'수'} isToday={todayNum[3]} />
      <DayCalendar day={thisWeek[4]} dayname={'목'} isToday={todayNum[4]} />
      <DayCalendar day={thisWeek[5]} dayname={'금'} isToday={todayNum[5]} />
      <DayCalendar day={thisWeek[6]} dayname={'토'} isToday={todayNum[6]} />
      <Image
        style={styles.calendarDirection}
        source={require('../../../image/calendarRight.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    marginVertical: 10,
  },
  day: {
    textAlign: 'center',
    color: '#575555',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  dayname: {
    textAlign: 'center',
    color: '#B9B9B9',
    paddingVertical: 5,
  },
  calendarDirection: {
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  todaycalendar: {
    borderColor: '#EDEDED',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
    justifyContent: 'center',
    width : 53,
    height : 70,
  },
  daycalendar: {
    paddingHorizontal: 9,
    marginHorizontal: 6,
    justifyContent: 'center',
  },
  union: {
    position : 'absolute',
    resizeMode : 'stretch',
    height : 30,
    top : 45,
  },
});
