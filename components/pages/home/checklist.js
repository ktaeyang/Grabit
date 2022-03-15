import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import PerImage from '../perImage';

const url = "http://193.123.253.133:5000"
function Check({
  checked,
  setComplete,
  title,
  isTogether,
  done,
  whole,
  week,
  challenge,
}) {
  return (
    <View
      style={
        whole == 0
          ? [styles.prevCheck, styles.noneCheck]
          : checked
          ? isTogether
            ? [styles.togetherCheck, styles.noneCheck]
            : [styles.aloneCheck, styles.noneCheck]
          : [{backgroundColor: '#FFFFFF'}, styles.noneCheck]
      }>
      <View style={styles.chartView}>
        <Text
          style={
            checked ? [styles.chartPst, {color: '#ffffff'}] : styles.chartPst
          }>
          {week
            ? Math.round((done / challenge / 7) * 100, 2)
            : Math.round((done / challenge) * 100, 2)}
          %
        </Text>
        <Image
          style={styles.chartPer}
          source={require('../../../image/nonO.png')}
        />
        <PerImage
          isTogether={isTogether}
          per={
            week
              ? Math.round((done / challenge / 7) * 100, 2)
              : Math.round((done / challenge) * 100, 2)
          }
        />
      </View>
      <View style={styles.habitInfo}>
        <Text
          style={
            whole == 0
              ? [styles.togetherNoChk, styles.noneTog]
              : checked
              ? isTogether
                ? [styles.togetherChk, styles.noneTog]
                : [styles.aloneChk, styles.noneTog]
              : isTogether
              ? [styles.togetherNoChk, styles.noneTog]
              : [styles.aloneNoChk, styles.noneTog]
          }>
          <Text style={{fontWeight: '500', fontSize: 14}}>
            {challenge}
            <Text>{week ? '주' : '일'}</Text> 습관
          </Text>{' '}
          | {whole}일차
        </Text>

        <Text
          style={
            checked
              ? {color: 'white', fontWeight: '600', marginLeft: 2}
              : {color: 'black', fontWeight: '600', marginLeft: 2}
          }>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setComplete(true)}
        style={styles.checkInfo}>
        <Image
          source={
            checked
              ? require('../../../image/checked.png')
              : require('../../../image/nonChecked.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
}

export default function CheckList(props) {
  const [official, setOfficial] = useState([
    {
      achievementDays: ['', ''],
      achievementDaysCount: '',
      challengeCategory: '',
      completeChallenge: true,
      endDate: '',
      name: '',
      period: 21,
      progressChallenge: '',
      scheduledChallenge: true,
      startDate: '',
    },
  ]);
  useEffect(() => {
    fetch(
      `${url}/users/${props.props.email}/challenges/progress`,
    )
      .then(response => response.json())
      .then(data => {
        setOfficial(data);
        console.log(official);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={styles.checklist}>
      <ScrollView>
        <Check
          setComplete={props.setComplete}
          checked={true}
          title={'매일 아침에 일기 쓰기'}
          done={2}
          isTogether={true}
          whole={21}
          challenge={3}
          week={true}
        />
        <Check
          setComplete={props.setComplete}
          checked={false}
          title={'손톱 물어뜯지 않기'}
          isTogether={false}
          done={1}
          whole={3}
          challenge={3}
          week={false}
        />
        <Check
          setComplete={props.setComplete}
          checked={false}
          title={'독일어 공부하기'}
          done={17}
          isTogether={true}
          whole={21}
          challenge={9}
          week={true}
        />
        <Check
          setComplete={props.setComplete}
          checked={false}
          title={'독일어 공부하기'}
          done={0}
          isTogether={true}
          whole={0}
          challenge={3}
          week={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  checklist: {
    flex: 1,
    justifyContent: 'center',
  },
  chartView: {
    width: 50,
    height: 50,
    marginRight: 10,
    flex: 2,
    //justifyContent : 'center'
  },
  habitInfo: {
    flex: 7,
  },
  checkInfo: {
    flex: 1,
  },
  chartPst: {
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 5,
    fontWeight: '600',
    color: '#8A8A8A',
  },
  noneTog: {
    borderRadius: 25,
    width: 120,
    paddingHorizontal: 7,
    paddingVertical: 2,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 8,
    fontSize: 12,
  },
  aloneNoChk: {
    borderColor: '#F1F1F1',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    color: '#96E471',
  },
  togetherNoChk: {
    backgroundColor: '#F1F1F1',
    color: '#7D63EB',
  },
  aloneChk: {
    backgroundColor: 'white',
    color: '#71BC4E',
  },
  togetherChk: {
    backgroundColor: 'white',
    color: '#7D63EB',
  },
  chart: {
    width: 50,
    height: 50,
    borderColor: '#EDEDED',
    borderWidth: 3,
    borderRadius: 25,
  },
  chartPer: {
    position: 'absolute',
    right: 0,
  },
  chartPer2: {
    position: 'absolute',
    right: 1,
  },
  prevCheck: {
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
  togetherCheck: {
    backgroundColor: '#7D63EB',
    borderRadius: 10,
  },
  aloneCheck: {
    backgroundColor: '#96E471',
    borderRadius: 10,
  },
  noneCheck: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 12,
    paddingBottom: 18,
    borderRadius: 10,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    margin: 5,
    elevation: 1,
    //IOS
    shadowColor: Platform.OS === 'ios' && '#F3F3F3', //그림자색
    shadowOpacity: Platform.OS === 'ios' && 0.3, //그림자 투명도
    shadowOffset: Platform.OS === 'ios' && {width: 2, height: 2}, //그림자 위치
  },
  daycalendar: {
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#EDEDED',
    borderWidth: 1,
  },
  detailTxt: {
    color: 'black',
    textAlign: 'right',
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    justifyContent: 'center',
    marginHorizontal: 90,
    marginLeft: 120,
    color: 'black',
  },
  headerIcon: {
    width: 25,
    height: 24,
    marginVertical: 10,
  },
});
