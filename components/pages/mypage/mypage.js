/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import Header from "./header";
 import Article from "./article";
 
 const App = (props) => {
  const [profileEdit, setProfileEdit] = useState(false);
  const [official, setOfficial] = useState(false);
  const [service, setService] = useState(false);
  const [logout, setLogout] = useState(false);
 
   return (
     <View>
       <Header service={service} setService={setService} logout={logout} setLogout={setLogout} profileEdit={profileEdit} setProfileEdit={setProfileEdit} official={official} setOfficial={setOfficial} />
       <Article service={service} setApp={props.setApp} setService={setService} logout={logout} setLogout={setLogout} profileEdit={profileEdit} setProfileEdit={setProfileEdit} official={official} setOfficial={setOfficial}  />
     </View>
   );
 };
 
 export default App;
 