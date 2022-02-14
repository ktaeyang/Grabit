import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  StatusBar
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StartLoading(props){
  useEffect(() => {
    setTimeout(() => {
      // AsyncStorage.setItem(
      //   'userData',
      //   JSON.stringify({
      //     token: token,
      //     userId: userId
      //   })
      // );
     
    // tokenId, userId 불러오기
    // const userData = await AsyncStorage.getItem('userData');
    // if(userId === null){
      props.setApp("manual");
    // }else{
    //   props.setApp("home");
    // }
    }, 1000)
  },[]);

    return(
        <View style={styles.background}>
          <Image style={styles.home} source={require("../../../image/home.png")} />
          <Image style={styles.homeLoading} source={require("../../../image/dot0.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
  background:{
    height:1000
  },
  home:{
    marginTop: 230,
    marginLeft: 130
  },
  homeLoading:{
    marginLeft: 160,
    margin: 20
  }
})