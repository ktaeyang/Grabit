import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import Header from './header';
import WeekCalendar from './weekcalendar';
import CheckList from './checklist';
import NoChallengeScreen from './nochallenge';
import styled from 'styled-components/native';
import {homeImages,aloneImages,togetherImages} from '../../../images'

function Complete(props) {
  return (
    <View style={styles.complete}>
      <TouchableOpacity onPress={() => props.setComplete(false)}>
        <Text
          style={{
            textAlign: 'right',
            color: '#CDCDCD',
            fontSize: 25,
            marginRight: 10,
          }}>
          ×
        </Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', color: 'black'}}>
        오늘의 습관은 어땠나요?
      </Text>
      <View
        style={{flexDirection: 'row', marginHorizontal: 90, marginVertical: 5}}>
        <TouchableOpacity>
          <Image source={homeImages.smile} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 5}}>
          <Image source={homeImages.soso} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={homeImages.bad} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => props.setComplete3Days(true)}>
        <Text
          style={{
            color: 'white',
            backgroundColor: '#7D63EB',
            margin: 5,
            marginHorizontal: 80,
            borderRadius: 15,
            padding: 5,
            textAlign: 'center',
          }}>
          확인
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Complete3Days(props, isTogether) {
  useEffect(() => {
    props.setApp('3Days');
    console.log(props);
  }, []);
  const goHome = async () => {
    await props.setComplete3Days(false);
    props.setComplete(false);
    await props.setApp('home');
  };
  return (
    <View style={styles.subDiv}>
      <Image
        style={styles.checkImg}
        source={
          isTogether
            ? aloneImages.aloneCheck
            : togetherImages.togetherCheck
        }
      />
      <Text
        style={{
          marginVertical: 20,
          color: 'black',
          fontWeight: '600',
          textAlign: 'center',
          fontSize: 20,
        }}>
        <Text style={isTogether ? {color: '#96E471'} : {color: '#7D63EB'}}>
          3일 습관
        </Text>{' '}
        달성!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontWeight: '500',
          fontSize: 16,
          padding: 5,
        }}>
        {`  작심삼일을 이겨낸 당신!

    그래빗과 함께 3주 습관도 진행해 볼까요?
    
    
    `}
      </Text>
      <TouchableOpacity
        style={[
          styles.prevBtn3,
          isTogether ? {borderColor: '#96E471'} : {borderColor: '#7D63EB'},
        ]}>
        <Text style={styles.purpleBtnTxt2}>3주 습관 도전하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          goHome();
        }}
        style={[
          styles.purpleBtn,
          isTogether
            ? {backgroundColor: '#96E471'}
            : {backgroundColor: '#7D63EB'},
        ]}>
        <Text style={styles.purpleBtnTxt}>
          {isTogether ? `다음에 도전하기` : `모임 나가기`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function HomeScreen(props, isTogether) {
  const [complete, setComplete] = useState(false);
  const [id, setId] = useState(1);
  const [complete3Days, setComplete3Days] = useState(false);
  const [isChallenge, setChallenge] = useState(false);
  var theMonth = new Date().getMonth() + 1;
  var theDate = new Date().getDate();
  var theDayOfWeek = new Date().getDay();
  const calDay = () => {
    if (theDayOfWeek === 0) return '일';
    else if (theDayOfWeek === 1) return '월';
    else if (theDayOfWeek === 2) return '화';
    else if (theDayOfWeek === 3) return '수';
    else if (theDayOfWeek === 4) return '목';
    else if (theDayOfWeek === 5) return '금';
    else if (theDayOfWeek === 6) return '토';
  };
  return (
    <>
      <Header setApp={props.setApp} app={props.app} />
      <View style={styles.article}>
        <View>
          <Text
            style={
              styles.date
            }>{`${theMonth}월 ${theDate}일 ${calDay()}요일`}</Text>
        </View>
        <View style={styles.wise}>
          <Text style={styles.wiseTxt}>
            “인생은 모아보면 풍성한 포도 한 송이와 같다“
          </Text>
        </View>
        {!complete3Days && <WeekCalendar day={props.day} />}
        {isChallenge ? (
          <CheckList setComplete={setComplete} props={props} />
        ) : (
          <NoChallengeScreen />
        )}
      </View>
      {complete ? (
        <Complete
          id={id}
          setComplete={setComplete}
          setComplete3Days={setComplete3Days}
        />
      ) : undefined}
      {complete3Days && (
        <Complete3Days
          setComplete3Days={setComplete3Days}
          setApp={props.setApp}
          setComplete={setComplete}
          isTogether={props.isTogether}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  article: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    flex: 5,
  },
  date: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    paddingTop: 15,
    paddingBottom: 5,
  },
  wise: {
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 30,
    height: 30,
    justifyContent: 'center',
  },
  wiseTxt: {
    color: '#000000',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '500',
  },
  footerIcon: {
    marginTop: 30,
    width: 30,
    height: 32,
    marginHorizontal: 20,
  },
  addIcon: {},
  highlight: {
    fontWeight: '700',
  },
  complete: {
    backgroundColor: 'white',
    zIndex: 3,
    position: 'absolute',
    width: 300,
    height: 200,
    top: 300,
    left: 50,
    borderRadius: 5,
  },

  subDiv: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    marginTop: '20%',
  },
  checkImg: {
    marginTop: 100,
    alignSelf: 'center',
  },
  prevBtn3: {
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 0,
    padding: 20,
    borderRadius: 60,
  },
  purpleBtn: {
    backgroundColor: '#7d63e8',
    margin: 20,
    padding: 20,
    borderRadius: 60,
  },
  purpleBtnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  purpleBtnTxt2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});
