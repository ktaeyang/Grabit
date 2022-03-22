/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
  const [logout, setLogout] = useState(false);
  const [priInfo, setPriInfo] = useState(false);
  const [serviceTxt, setServiceTxt] = useState(false);
  const [quesEmail, setQuesEmail] = useState(false);
  return (
    <View>
      <Header
        service={service}
        setService={setService}
        priInfo={priInfo}
        serviceTxt={serviceTxt}
        quesEmail={quesEmail}
        setPriInfo={setPriInfo}
        setServiceTxt={setServiceTxt}
        setQuesEmail={setQuesEmail}
        logout={logout}
        setLogout={setLogout}
        profileEdit={profileEdit}
        setProfileEdit={setProfileEdit}
        official={official}
        setOfficial={setOfficial}
      />
      <Article
        service={service}
        setApp={props.setApp}
        setService={setService}
        priInfo={priInfo}
        serviceTxt={serviceTxt}
        quesEmail={quesEmail}
        setPriInfo={setPriInfo}
        setServiceTxt={setServiceTxt}
        setQuesEmail={setQuesEmail}
        logout={logout}
        setLogout={setLogout}
        profileEdit={profileEdit}
        setProfileEdit={setProfileEdit}
        official={official}
        setOfficial={setOfficial}
        id = {props.email}
      />
    </View>
  );
};

export default App;
