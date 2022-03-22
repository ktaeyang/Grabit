import React, { useEffect } from 'react';
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

export default function Footer(props) {
  if (props.app === "3Days") {
    return (
      <View style={styles.header}>
        <StatusBar
          animated={true}
          backgroundColor="#7D63EB"
          barStyle='light-content' />
          <Image style={styles.headerTogether} source={require('../../../image/selectHeader.png')} />
      </View>)
  }
  else {
    return (
      <View style={styles.header}>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          barStyle='dark-content' />
        <Text style={styles.title}>GRABIT</Text>
        {/* <Image style={styles.headerIcon} source={require('../../../image/user.png')} /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.3,
    paddingTop: 35,
    paddingVertical: 15,
    marginBottom: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    //IOS
    shadowColor: "#000000", //그림자색
    shadowOpacity: 0.3,//그림자 투명도
    shadowOffset: { width: 2, height: 2 }, //그림자 위치
    //ANDROID
    elevation: 1,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    justifyContent: 'center',
    marginHorizontal: 90,
    // marginLeft: 120,
    color: 'black'

  },
  headerIcon: {
    width: 25,
    height: 24,
    marginVertical: 10,
  },
  headerTogether: {
    position: 'absolute',
    width: '120%',
    resizeMode : 'stretch',
  },
});
