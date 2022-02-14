import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  StatusBar
} from 'react-native';

export default function Header(props){
    return (
        <View style={styles.header}>
          <StatusBar
                animated={true}
                backgroundColor="#7D63EB"
                barStyle='light-content' />
          <Image style={styles.headerIcon} source={require('../../../image/selectHeader.png')} />
          <Text style={styles.title}>나의 습관</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '20%'
  },
  title:{
    fontWeight: '700',
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white'
  },
  preBtn:{
    position: 'absolute',
    top: 15,
    left: -20
  },
  headerIcon: {
    position: 'absolute',
    width: '120%',
    height: 120,
    marginTop:-20
  },
});
