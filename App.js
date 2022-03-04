/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  BackHandler,
  Alert,
} from 'react-native';

import Home from "./components/pages/home/home";
import Mypage from "./components/pages/mypage/mypage";
import Mychallenge from "./components/pages/mychallenge/mychallenge";
import Add from "./components/pages/add/add";
import Start from "./components/pages/start/start";
import Manual from "./components/pages/start/manual";
import Rooms from "./components/pages/rooms/rooms";
import Login from "./components/pages/login/login";
import Footer from "./components/footer";



const App = () => {
  const [app, setApp] = useState("start");
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  useEffect(() => {
    const backAction = () => {
      Alert.alert("grabit", "OK 버튼을 누르시면 앱이 종료됩니다.", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  
  return (
    <SafeAreaView style = {{flex : 1}}>
      <View style = {{flex : 0.923}}>
      {
        app === "mypage" ?
        <Mypage setApp={setApp} email={id} name={name}/> :
        app.indexOf("add",0) == 0 ?
        <Add app={app} setApp={setApp} email={id} /> :
        app === "mychallenge" ?
        <Mychallenge email={id} /> :
        app === "feed" ?
        <Rooms email={id} /> :
        app === "start" ?
        <Start setApp={setApp} email={id} /> :
        app === "manual" ?
        <Manual setApp={setApp} email={id} /> :
        app === "login" ?
        <Login setApp={setApp} setId={setId} setName={setName} /> :
        <Home app={app} setApp={setApp}/>
      }
      </View>
      {(app === "feed" || app === "mypage" || app === "mychallenge" || app === "home") &&
      <View style = {{flex : 0.07}}>
      <Footer app={app} setApp={setApp} />
      </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
