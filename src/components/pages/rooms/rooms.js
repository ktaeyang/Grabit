import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function Oneroom(props) {
  const [bI, setbI] = useState(require('../../../image/room1.png'));
  const [des, setdes] = useState('습관 설명 칸입니다.');
  const [na, setna] = useState('매일 아침에 일기 쓰기');
  const [pe, setpe] = useState(3);
  const [userlist, setUL] = useState([
    {name: '사용자', Icon: require('../../../image/userbaseIcon.png')},
  ]);
  useEffect(() => {
    fetch('http://193.123.253.133:5000/challenges/' + props.view, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        // setbI(response.backgroundImage);
        // setdes(response.description);
        // setna(response.name);
        // setpe(response.period);
        // setUL(response.userList);
        console.log(response);
      });
  }, []);
  function join() {
    // useEffect(() => {
    //     fetch('http://193.123.253.133:5000/users/' + props.userId + '/challenges/' + props.view, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             challengeId: props.view,
    //             userId: props.userId
    //         })
    //     }).then(response => response.json())
    //     .then(response => {
    //     })
    // }, [])
  }

  return (
    <ScrollView style={styles.subDiv}>
      <Image
        style={styles.headerIcon}
        source={require('../../../image/selectHeader.png')}
      />
      <View style={styles.subDiv2}>
        <Image style={styles.backgroundSub} source={bI} />
        <Text style={styles.dday2}>D-13</Text>
        <Text style={styles.onetitle}>{na}</Text>
        <Text style={styles.daymeet}>{pe}일 습관 모임</Text>
      </View>
      <View style={{padding: 20, borderBottomWidth: 4, borderColor: '#f5f5f5'}}>
        <Text style={styles.Explanation}>습관 설명</Text>
        <Text style={styles.SubExplanation}>{des}</Text>
      </View>
      <View style={{padding: 20, borderBottomWidth: 4, borderColor: '#f5f5f5'}}>
        <Text style={{fontSize: 15, marginBottom: 10, fontWeight: '900'}}>
          참가자
        </Text>
        <View style={{flexDirection: 'row'}}>
          {userlist.map((el, key) => {
            <View style={{marginHorizontal: 10}}>
              <Image style={{width: 50, height: 50}} source={el.Icon} />
              <Text style={{width: 50, textAlign: 'center'}}>{el.name}</Text>
            </View>;
          })}
        </View>
      </View>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => props.viewRoom(null)}
          style={styles.purpleBtn2}>
          <Text style={styles.purpleBtnTxt2}>뒤로 가기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => join()} style={styles.purpleBtn}>
          <Text style={styles.purpleBtnTxt}>참가하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Room(props) {
  return (
    <TouchableOpacity
      onPress={() => props.viewRoom(props.id)}
      style={styles.room}>
      <Image source={require('../../../image/thum1.png')} />
      <View style={styles.roomInfo}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.include}명 참여</Text>
      </View>
      <Text style={styles.dday}>D-{props.d}</Text>
    </TouchableOpacity>
  );
}

function NewRoom(props) {
  useEffect(() => {
    fetch(`http://193.123.253.133:5000/users/${props.id}/challenges/${props.d}`)
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => {
        console.log(error);
      });
    console.log(props);
  });
  return (
    <TouchableOpacity
      onPress={() => props.viewRoom(props.id)}
      style={styles.newroom}>
      <Image source={require('../../../image/thum1.png')} />
      <View style={styles.roomInfo}>
        <Text style={styles.newtitle}>{props.title}</Text>
        <Text style={styles.newsubtitle}>{props.include}명 참여</Text>
      </View>
      <Text style={styles.newdday}>D-{props.d}</Text>
    </TouchableOpacity>
  );
}
export default function Rooms(props) {
  const [view, viewRoom] = useState(null);
  const [category, setCategory] = useState('HEALTH');
  const [search, setSearch] = useState('');
  const [newChallenges, setNewChallenges] = useState('');
  function searchs() {
    fetch('http://193.123.253.133:5000/challenges')
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetch('http://193.123.253.133:5000/challenges/new')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <ScrollView
        style={[
          styles.background,
          view == null ? {height: 670} : {height: 1000},
        ]}>
        <StatusBar
          animated={true}
          backgroundColor="#7D63EB"
          barStyle="light-content"
        />
        <View>
          <Image
            style={{width: '100%', resizeMode: 'stretch', zIndex: 2, top: -30}}
            source={require('../../../image/selectHeader.png')}
          />

          <View>
            <View style={styles.category}>
              <TextInput
                style={styles.addHabitTxt}
                placeholder={''}
                onChangeText={text => setSearch(text)}
              />
              <TouchableOpacity
                onPress={() => searchs()}
                style={[
                  styles.addHabit,
                  {backgroundColor: '#7D63EB', color: 'white'},
                ]}>
                <Text style={{backgroundColor: '#7D63EB', color: 'white'}}>
                  검색
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  paddingLeft: 18,
                  color: 'black',
                  paddingTop: 20,
                }}>
                새로 열린 습관모임
              </Text>

              <NewRoom
                viewRoom={viewRoom}
                id={1}
                title={'매일 아침에 일기 쓰기'}
                include={32}
                d={1}
              />
            </View>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                paddingLeft: 18,
                color: 'black',
                paddingTop: 20,
              }}>
              습관모임
            </Text>
            <Room
              viewRoom={viewRoom}
              id={1}
              title={'매일 아침에 일기 쓰기'}
              include={32}
              d={1}
            />
            <Room
              viewRoom={viewRoom}
              id={2}
              title={'하루 5분 명상하기'}
              include={32}
              d={1}
            />
            <Room
              viewRoom={viewRoom}
              id={3}
              title={'하루 하나 캘리그라피'}
              include={32}
              d={1}
            />
            <Room
              viewRoom={viewRoom}
              id={4}
              title={'약 먹기'}
              include={32}
              d={1}
            />
            <Room
              viewRoom={viewRoom}
              id={5}
              title={'운동하기'}
              include={32}
              d={1}
            />
          </View>
        </View>
      </ScrollView>
      {view == null ? undefined : (
        <Oneroom userId={props.email} view={view} viewRoom={viewRoom} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
  },
  subDiv: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: 'white',
    height: '100%',
  },
  room: {
    backgroundColor: '#ffffff',
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    elevation: 2,
  },
  newroom: {
    backgroundColor: '#7D63EB',
    borderWidth: 1,
    borderColor: '#000000A0',
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    height: 94,
  },
  roomInfo: {
    width: 240,
  },
  dday: {
    backgroundColor: '#7d63e8',
    height: 20,
    padding: 2,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  newdday: {
    backgroundColor: '#ffffff',
    height: 20,
    padding: 2,
    borderRadius: 10,
    color: '#7D63EB',
    paddingHorizontal: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  dday2: {
    fontWeight: '700',
    backgroundColor: '#7d63e8',
    borderRadius: 100,
    color: 'white',
    marginTop: 160,
    marginBottom: 10,
    zIndex: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontWeight: '700',
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    marginVertical: 8,
  },
  newtitle: {
    fontWeight: '700',
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 5,
    color: 'black',
  },
  newsubtitle: {
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
  },
  sort: {
    marginLeft: 250,
  },
  backgroundSub: {
    zIndex: 1,
    width: '100%',
    position: 'absolute',
  },
  onetitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    zIndex: 3,
  },
  daymeet: {
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#7d63eb',
    borderRadius: 20,
    marginTop: 10,
    padding: 4,
    marginBottom: 50,
    zIndex: 3,
    paddingHorizontal: 10,
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
  },
  purpleBtn2: {
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 0,
    padding: 20,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#7d63e8',
  },
  purpleBtnTxt2: {
    color: '#7d63e8',
    textAlign: 'center',
  },
  category: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  addHabitTxt: {
    borderWidth: 1,
    marginVertical: 10,
    borderColor: '#E0E0E0',
    height: 40,
    width: 270,
    padding: 2,
    marginLeft: 15,
    paddingLeft: 20,
    borderRadius: 20,
  },
  addHabit: {
    backgroundColor: '#96E471',
    marginVertical: 10,
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 15,
  },
  headerIcon: {
    position: 'absolute',
    width: '100%',
    resizeMode: 'stretch',
    zIndex: 2,
    top: -40,
  },
  subDiv2: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  Explanation: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '900',
    color: '#000000',
    marginTop: 10,
  },
  SubExplanation: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '400',
    color: '#000000',
    marginTop: 10,
  },
});
