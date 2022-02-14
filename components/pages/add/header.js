import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

function HeaderTxt(props) {
  if (props.app === "addImg") {
    return (
      <View>
        <Text style={styles.title}>기본 커버 선택</Text>
      </View>
    )
  }
  else {
    return (<View></View>)
  }
}

function HeaderImg(props) {
  if (props.app === "add")
    return (<Image style={styles.headerIcon2} source={require('../../../image/challen.png')} />)
  else if (props.app === "add3" || props.app === "add5" || props.app === "add7")
    return (<Image style={styles.headerIcon} source={require('../../../image/aloneHeader2.png')} />)
    else if (props.app === "addImg")
    return (<Image style={styles.headerIcon} source={require('../../../image/togetherHeader.png')} />)
  else
    return (<Image style={styles.headerIcon} source={require('../../../image/selectHeader.png')} />)
}


export default function Header(props) {
  return (
    <View style={styles.header}>
      <HeaderImg app={props.app} />
      <Text style={styles.title}><HeaderTxt app={props.app} /></Text>
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
    height: 160
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
    justifyContent: 'center',
    color: 'white'

  },
  preBtn: {
    position: 'absolute',
    top: 15,
    left: -20
  },
  headerIcon: {
    position: 'absolute',
    width: '120%',
    resizeMode : 'stretch',
  },
  headerIcon2: {
    position: 'absolute',
    width: 300,
    height: 80,
    marginTop: 60
  },
});
