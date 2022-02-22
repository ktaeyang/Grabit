import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
} from 'react-native';
import CheckList from './checklist';

function ViewEachHabit(props) {
  return (
    <View style={styles.subDiv}>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../../../image/alo0.png')} />
        <Text>12일차</Text>
        <View>
          <Text>3주 습관</Text>
          <Text>매일 하루 하나의 캘리그라피를 3주 동안 진행합니다 :)</Text>
        </View>
      </View>
      <View>
        <Text>000님은 현재</Text>
        <Text>
          <Text>7등</Text>/16명
        </Text>
      </View>
      <View>
        <Text>그룹 습관 메모</Text>
        <Text>
          <Text>참가자 1</Text> 오늘은 할 만 했다. 음 열심히 했군
        </Text>
        <Text>
          <Text>참가자 1</Text> 오늘은 할 만 했다. 음 열심히 했군
        </Text>
      </View>
    </View>
  );
}

export default function Article() {
  const [c, setC] = useState('a');
  const [habitId, viewEachHabit] = useState(0);
  return (
    <View style={styles.article}>
      <View style={styles.selectDivs}>
        <TouchableOpacity
          onPress={() => setC('a')}
          style={c === 'a' ? styles.selectC : styles.nonSelectC}>
          <Text
            style={[
              {textAlign: 'center', fontWeight: '900'},
              c === 'a' ? {color: '#7D63EB'} : {color: '#6D6D6D'},
            ]}>
            진행 중 습관
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setC('b')}
          style={c === 'b' ? styles.selectC : styles.nonSelectC}>
          <Text
            style={[
              {textAlign: 'center', fontWeight: '900'},
              c === 'b' ? {color: '#7D63EB'} : {color: '#6D6D6D'},
            ]}>
            예정 습관
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setC('c')}
          style={c === 'c' ? styles.selectC : styles.nonSelectC}>
          <Text
            style={[
              {textAlign: 'center', fontWeight: '900'},
              c === 'c' ? {color: '#7D63EB'} : {color: '#6D6D6D'},
            ]}>
            종료 습관
          </Text>
        </TouchableOpacity>
      </View>
      <CheckList c={c} viewEachHabit={viewEachHabit} />
      {habitId === 0 ? undefined : <ViewEachHabit id={habitId} />}
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    height: 550,
    backgroundColor: 'white',
    zIndex: 20,
  },
  subDiv: {
    height: 550,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 20,
    width: '100%',
  },
  selectDivs: {
    flexDirection: 'row',
  },
  selectC: {
    width: '34%',
    color: '#7D63EB',
    borderBottomColor: '#7D63EB',
    borderBottomWidth: 2,
    paddingTop: 30,
    paddingBottom: 15,
  },
  nonSelectC: {
    width: '33%',
    paddingTop: 30,
    paddingBottom: 15,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
  },
});
