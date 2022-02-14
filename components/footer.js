import React from 'react';
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
  ProgressViewIOSComponent,
  Dimensions,
  Platform
} from 'react-native';

export default function Footer(props) {


  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerContainer} onPress={() => props.setApp("home")}>
          <Image style={styles.footerIcon} source={props.app === "home" ?
            require('../image/home_active.png') :
            require('../image/home_nonactive.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerContainer} onPress={() => props.setApp("feed")}>
          <Image style={styles.footerIcon} source={props.app === "feed" ?
            require('../image/feed_active.png') :
            require('../image/feed_nonactive.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addIcon} onPress={() => props.setApp("add")}>
          <Image source={props.app === "add" ?
            require('../image/alone_add.png') :
            require('../image/together_add.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerContainer} onPress={() => props.setApp("mychallenge")}>
          <Image style={styles.footerIcon} source={props.app === "mychallenge" ?
            require('../image/challenge_active.png') :
            require('../image/challenge_nonactive.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerContainer} onPress={() => props.setApp("mypage")}>
          <Image style={styles.footerIcon} source={props.app === "mypage" ?
            require('../image/user_active.png') :
            require('../image/user_nonactive.png')} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#aaaaaa',
  },
  footer: {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  footerContainer: {
    borderTopWidth : 0.5,
    borderTopColor : '#aaaaaa',
    flex: 1,
    alignItems: 'center',
    paddingVertical : 5,
  },
  footerIcon: {
    marginTop : 10,
  },
  addIcon: {
    flex: 1,
    alignItems: 'center',
    elevation: (Platform.OS === 'android') ? 1 : 0,
    bottom : 20,
  },
});
