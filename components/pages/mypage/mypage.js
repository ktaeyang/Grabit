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

import Header from './header';
import Article from './article';

const App = props => {
  const [profileEdit, setProfileEdit] = useState(false);
  const [official, setOfficial] = useState(false);
  const [service, setService] = useState(false);
  const [service1, SetService1] = useState(false);
  const [service2, SetService2] = useState(false);
  const [logout, setLogout] = useState(false);

  return (
    <View>
      <Header
        service={service}
        service1={service1}
        service2={service2}
        setService={setService}
        SetService1={SetService1}
        SetService2={SetService2}
        logout={logout}
        setLogout={setLogout}
        profileEdit={profileEdit}
        setProfileEdit={setProfileEdit}
        official={official}
        setOfficial={setOfficial}
      />
      <Article
        service={service}
        service1={service1}
        service2={service2}
        setApp={props.setApp}
        setService={setService}
        SetService1={SetService1}
        SetService2={SetService2}
        logout={logout}
        setLogout={setLogout}
        profileEdit={profileEdit}
        setProfileEdit={setProfileEdit}
        official={official}
        setOfficial={setOfficial}

      />
    </View>
  );
};

export default App;
