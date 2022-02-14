import React from 'react';
import {
  View,
} from 'react-native';

import Header from "./header";
import Article from "./article";

const App = (props) => {

  return (
    <View>
      <Header app={props.app} />
      <Article app={props.app} setApp={props.setApp}  />
    </View>
  );
};
export default App;
