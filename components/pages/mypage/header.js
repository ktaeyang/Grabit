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
  TouchableOpacity,
} from 'react-native';

function Title(props){
  if(props.props.profileEdit){
    return ( <Text>프로필 수정</Text> )
  } else if(props.props.official){
    return ( <Text>공지사항</Text> )
  } else if(props.props.service){
    return ( <Text>고객센터</Text> )
  }else if(props.props.logout){
    return ( <Text>로그아웃/회원탈퇴</Text> )
  }
  if(props.props.profileEdit){
    return ( <Text>프로필 수정</Text> )
  }
  if(props.props.profileEdit){
    return ( <Text>프로필 수정</Text> )
  }
  if(props.props.profileEdit){
    return ( <Text>프로필 수정</Text> )
  }
  return ( <Text>마이페이지</Text> )
}

function PreBtn(props){
  if(props.props.profileEdit){
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => {props.props.setProfileEdit(false)}}>
        <Image style={styles.preBtn} source={require("../../../image/preBtn.png")} />
      </TouchableOpacity>
    )
  } else if(props.props.official){
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => {props.props.setOfficial(false)}}>
        <Image style={styles.preBtn} source={require("../../../image/preBtn.png")} />
      </TouchableOpacity>
    )
  } else if(props.props.service){
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => {props.props.setService(false)}}>
        <Image style={styles.preBtn} source={require("../../../image/preBtn.png")} />
      </TouchableOpacity>
    )
  } else if(props.props.logout){
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => {props.props.setLogout(false)}}>
        <Image style={styles.preBtn} source={require("../../../image/preBtn.png")} />
      </TouchableOpacity>
    )
  }
  else{
    return (
      <View></View>
    )
  }
}

export default function Footer(props){
    return (
        <View style={styles.header}>
          <StatusBar
        animated={true}
        backgroundColor="#7D63EB"
        barStyle='light-content' />
            <Image style={styles.headerIcon} source={require('../../../image/selectHeader.png')} />
            <PreBtn props={props} />
            <Text style={styles.title}><Title props={props} /></Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 160
  },
  title:{
    fontWeight: '700',
    fontSize: 25,
    marginTop: 10,
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