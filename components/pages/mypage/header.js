import React, {useEffect} from 'react';
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

function Title(props) {
  useEffect(()=>{console.log(props)})
  return (
    
    <>
      {props.props.profileEdit ? (
        <Text>프로필 수정</Text>
      ) : props.props.official ? (
        <Text>공지사항</Text>
      ) : (props.props.service & !props.props.priInfo & !props.props.serviceTxt & !props.props.quesEmail) ? (
        <Text>고객센터</Text>
      ) : (props.props.service & props.props.priInfo) ? (
        <Text>개인정보 처리방침</Text>
      ) : (props.props.service & props.props.serviceTxt) ? (
        <Text>서비스 이용약관</Text>
      ) : (props.props.service & props.props.quesEmail) ? (
        <Text>이메일 문의</Text>
      ) : props.props.logout ? (
        <Text>로그아웃/회원탈퇴</Text>
      ) : (
        <Text>마이페이지</Text>
      )}
    </>
  );
}

function PreBtn(props) {
  if (props.props.profileEdit) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          props.props.setProfileEdit(false);
        }}>
        <Image
          style={styles.preBtn}
          source={require('../../../image/preBtn.png')}
        />
      </TouchableOpacity>
    );
  } else if (props.props.official) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          props.props.setOfficial(false);
        }}>
        <Image
          style={styles.preBtn}
          source={require('../../../image/preBtn.png')}
        />
      </TouchableOpacity>
    );
  } else if (props.props.service & !props.props.priInfo & !props.props.serviceTxt  & !props.props.quesEmail) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          {
            props.props.setService(false);
          }
        }}>
        <Image
          style={styles.preBtn}
          source={require('../../../image/preBtn.png')}
        />
      </TouchableOpacity>
    );
  } else if (props.props.service & props.props.priInfo) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={async() => {
          props.props.setService(true);
          await props.props.setPriInfo(false);
        }}>
        <Image
          style={styles.preBtn2}
          source={require('../../../image/preBtn.png')}
        />
      </TouchableOpacity>
    );
  } else if (props.props.service & props.props.serviceTxt) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={async() => {
          props.props.setService(true);
          await props.props.setServiceTxt(false);
        }}>
        <Image
          style={styles.preBtn2}
          source={require('../../../image/preBtn.png')}
        />
      </TouchableOpacity>
    );
  } else if (props.props.service & props.props.quesEmail) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={async() => {
          props.props.setService(true);
          await props.props.setQuesEmail(false);
        }}>
        <Image
          style={styles.preBtn}
          source={require('../../../image/preBtn.png')}
        />
      </TouchableOpacity>
    );
  } else if (props.props.logout) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          props.props.setLogout(false);
        }}>
        <Image
          style={styles.preBtn2}
          source={require('../../../image/preBtn.png')}
        />
      </TouchableOpacity>
    );
  } else {
    return <View></View>;
  }
}

export default function Footer(props) {
  return (
    <View style={styles.header}>
      <StatusBar
        animated={true}
        backgroundColor="#7D63EB"
        barStyle="light-content"
      />
      <Image
        style={styles.headerIcon}
        source={require('../../../image/selectHeader.png')}
      />
      <PreBtn props={props} />
      <Text style={styles.title}>
        <Title props={props} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 130,
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  preBtn: {
    position: 'absolute',
    top: 5,
    right: 120,
  },
  preBtn2: {
    position: 'absolute',
    top: 5,
    right: 80,
  },
  headerIcon: {
    position: 'absolute',
    width: '120%',
    resizeMode: 'stretch',
    top: -10,
  },
});
