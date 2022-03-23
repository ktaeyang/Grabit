import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TextInput,
} from 'react-native';
import { aloneImages,togetherImages } from '../../../images';
export default function Footer(props) {
  const [alone_add, setAlone] = useState(false);
  const [together_add, setTogether] = useState(false);

  const setPrev = isTrue => {
    if (isTrue) {
      setAlone(false);
      setTogether(false);
      props.setApp('add');
    }
  };

  return (
    <View style={styles.article}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Text style={[styles.addTitle, {marginTop: 40}]}>혼자, 함께</Text>
      <Text style={[styles.addTitle, {marginBottom: 40}]}>시작해볼까요?</Text>
      <View style={styles.addDiv}>
        <TouchableOpacity
          onPress={() => setAlone(true)}
          style={[styles.startAdd, {borderColor: '#96E471'}]}>
          <Image
            style={styles.addImg}
            source={require('../../../image/alone_grapes.png')}
          />
          <Text style={styles.addTxt}>혼자 도전하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTogether(true)}
          style={[styles.startAdd, {borderColor: '#7D63EB'}]}>
          <Image
            style={styles.addImg}
            source={require('../../../image/together_grapes.png')}
          />
          <Text style={styles.addTxt}>같이 도전하기</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.setApp('home')}
        style={styles.prevBtn}>
        <Image
          source={require('../../../image/prevArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      {!alone_add && !together_add
        ? undefined
        : aloneAdd(alone_add, props.setApp, setPrev)}
    </View>
  );
}

function aloneAdd(alone_add, setApp, setPrev) {
  if (alone_add) {
    return <Add1 isAlone={true} setPrev={setPrev} setApp={setApp} />;
  } else {
    //setApp("add2");
    return <Add1 isAlone={false} setPrev={setPrev} setApp={setApp} />;
  }
}

function Add1(props) {
  const [prev, setPrev] = useState(false);
  const [category, setCategory2] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const challengeList = [
    [
      [
        <Image
          source={require('../../../image/habit1.png')}
          style={styles.categoryImg}
        />,
        '생활습관',
        'LIFE',
      ],
      [
        <Image
          source={require('../../../image/habit2.png')}
          style={styles.categoryImg}
        />,
        '건강습관',
        'HEALTH',
      ],
    ],
    [
      [
        <Image
          source={require('../../../image/habit3.png')}
          style={styles.categoryImg}
        />,
        '성장습관',
        'GROW',
      ],
      [
        <Image
          source={require('../../../image/habit4.png')}
          style={styles.categoryImg}
        />,
        '경제습관',
        'ECONOMY',
      ],
    ],
    [
      [
        <Image
          source={require('../../../image/habit5.png')}
          style={styles.categoryImg}
        />,
        '나를 위한 습관',
        'FOR_ME',
      ],
      [
        <Image
          source={require('../../../image/plusEtc.png')}
          style={styles.categoryImg}
        />,
        '기타',
        'ETC',
      ],
    ],
  ];
  function setCategory(categoryName, category) {
    setCategory2(category);
    setCategoryName(categoryName);
    setPrev(true);
  }

  useEffect(() => {
    if (props.isAlone) {
      props.setApp('add3');
    } else {
      props.setApp('add4');
    }
  }, []);
  return (
    <View style={styles.subDiv}>
      <StatusBar
        animated={true}
        backgroundColor={props.isAlone ? '#96E471' : '#7D63EB'}
        barStyle={props.isAlone ? 'dark-content' : 'light-content'}
      />
      <Text style={[styles.addTitle, {marginTop: 40}]}>
        원하는 습관 카테고리를
      </Text>
      <Text style={[styles.addTitle, {marginBottom: 40}]}>선택해 보세요!</Text>
      {challengeList.map((el, key) => (
        <View style={styles.category} key={key}>
          <TouchableOpacity
            onPress={() => setCategory(el[0][1], el[0][2])}
            style={styles.categoryBtn}>
            {el[0][0]}
            <Text style={styles.categoryTxt}>{el[0][1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCategory(el[0][1], el[0][2])}
            style={styles.categoryBtn}>
            {el[1][0]}
            <Text style={styles.categoryTxt}>{el[1][1]}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.setPrev(true)}
        style={styles.prevBtn}>
        <Image
          source={require('../../../image/prevArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      {prev ? (
        <Add2
          isAlone={props.isAlone}
          categoryName={categoryName}
          category={category}
          setPrev={setPrev}
          setApp={props.setApp}
        />
      ) : undefined}
    </View>
  );
}

function Add2(props) {
  const [prev, setPrev] = useState(false);
  const [challengeList, setChallengeList] = useState([[]]);
  const [categoryName, setCategoryName] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (props.isAlone) {
      props.setApp('add3');
    } else {
      props.setApp('add4');
    }
    if (props.category === 'LIFE') {
      setChallengeList([
        ['아침 기상', '하루 계획하기'],
        ['취미 만들기', '식물 물 주기'],
      ]);
    } else if (props.category === 'HEALTH') {
      setChallengeList([
        ['헬스장 가기', '걷기&산책'],
        ['홈트레이닝', '등산하기'],
        ['영양제 먹기'],
        '식단조절하기',
      ]);
    } else if (props.category === 'GROW') {
      setChallengeList([
        ['독서하기', '자기계발'],
        ['신문 읽기', '외국어 공부'],
      ]);
    } else if (props.category === 'ECONOMY') {
      setChallengeList([['가계부 작성', '저금하기']]);
    } else if (props.category === 'FOR_ME') {
      setChallengeList([
        ['명상하기', '감사일기쓰기'],
        ['5줄 일기 쓰기', '휴식하기'],
      ]);
    }
  }, []);

  function writeCategory(category) {
    setCategoryName(category);
    setPrev(true);
  }

  return (
    <View style={styles.subDiv}>
      <Text style={[styles.addTitle, {marginTop: 40}]}>
        {props.categoryName} 중
      </Text>
      <Text style={[styles.addTitle, {marginBottom: 20}]}>
        도전하고 싶은 것은?
      </Text>
      <View style={styles.category}>
        <TextInput
          style={styles.addHabitTxt}
          onChangeText={text => setTitle(text)}
          placeholder={'직접 추가해주세요'}
        />
        <TouchableOpacity
          onPress={() => writeCategory(title)}
          style={[
            styles.addHabit,
            props.isAlone
              ? {backgroundColor: '#96E471', color: 'black'}
              : {backgroundColor: '#7D63EB', color: 'white'},
          ]}>
          <Text
            style={[
              styles.addHabitBtnTxt,
              props.isAlone
                ? {backgroundColor: '#96E471', color: 'black'}
                : {backgroundColor: '#7D63EB', color: 'white'},
            ]}>
            입력
          </Text>
        </TouchableOpacity>
      </View>
      {challengeList.map((el, key) => (
        <View style={styles.category} key={key}>
          <TouchableOpacity
            onPress={() => writeCategory(el[0])}
            style={styles.categoryBtn}>
            <Text style={styles.addcategoryTxt}>{el[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => writeCategory(el[1])}
            style={styles.categoryBtn}>
            <Text style={styles.addcategoryTxt}>{el[1]}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => props.setPrev(false)}
        style={styles.prevBtn}>
        <Image
          source={require('../../../image/prevArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      {prev ? (
        <Add3
          isAlone={props.isAlone}
          categoryName={categoryName}
          category={props.category}
          setPrev={setPrev}
          setApp={props.setApp}
        />
      ) : undefined}
    </View>
  );
}

function Add3(props) {
  const [prev, setPrev] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (props.isAlone) {
      props.setApp('add5');
    } else {
      props.setApp('add6');
    }
  }, []);

  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    return [
      this.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd,
    ].join('-');
  };

  const addProject = () => {
    fetch('http://193.123.253.133:5000/challenges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: props.category,
        description: '챌린지 설명입니다',
        imageField: 1,
        name: props.name,
        startDate: date.yyyymmdd(),
        period: 21,
        public: !props.isAlone,
      }),
    })
      .then(response => {
        setPrev(true);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.subDiv}>
      <Text style={[styles.addTitle, {marginTop: 40}]}>언제부터</Text>
      <Text style={[styles.addTitle, {marginBottom: 40}]}>
        시작하실 건가요?
      </Text>
      <DatePicker
        style={styles.datepicker}
        mode="date"
        date={date}
        onDateChange={setDate}
      />
      <TouchableOpacity
        onPress={() => props.setPrev(false)}
        style={styles.prevBtn2}>
        <Image
          source={require('../../../image/prevArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => addProject()}
        style={[
          styles.nextBtn,
          props.isAlone ? {borderColor: '#96E471'} : {borderColor: '#7D63EB'},
        ]}>
        <Image
          source={require('../../../image/nextArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      {prev ? (
        props.isAlone ? (
          <Add4
            isAlone={props.isAlone}
            categoryName={props.categoryName}
            category={props.category}
            date={date}
            setPrev={setPrev}
            setApp={props.setApp}
          />
        ) : (
          <Add5
            isAlone={props.isAlone}
            categoryName={props.categoryName}
            category={props.category}
            date={date}
            setPrev={setPrev}
            setApp={props.setApp}
          />
        )
      ) : undefined}
    </View>
  );
}

function Add4(props) {
  useEffect(() => {
    if (props.isAlone) {
      props.setApp('add7');
    } else {
      props.setApp('add8');
    }
  }, []);

  function goHome() {
    props.setApp('home');
  }
  const makeMore = async () => {
    await props.setApp('home');
    await props.setApp('add');
  };
  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    return [
      this.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd,
    ].join('-');
  };

  return (
    <View style={styles.subDiv}>
      <Image
        style={styles.checkImg}
        source={
          props.isAlone
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
        <Text style={props.isAlone ? {color: '#96E471'} : {color: '#7D63EB'}}>
          {props.isAlone ? `3일 개인 습관` : `3일 습관 모임`}
        </Text>{' '}
        만들기 완료
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontWeight: '600',
          fontSize: 16,
        }}>
        {props.date.yyyymmdd()}부터 딱 3일 도전해보기!
      </Text>
      <TouchableOpacity
        onPress={() => goHome()}
        style={[
          styles.prevBtn3,
          props.isAlone ? {borderColor: '#96E471'} : {borderColor: '#7D63EB'},
        ]}>
        <Text style={styles.purpleBtnTxt2}>홈으로 가기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => makeMore()}
        style={[
          styles.purpleBtn,
          props.isAlone
            ? {backgroundColor: '#96E471'}
            : {backgroundColor: '#7D63EB'},
        ]}>
        <Text style={styles.purpleBtnTxt}>
          {props.isAlone ? `추가 습관 만들기` : `추가 습관 모임 만들기`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Add5(props) {
  const [prev, setPrev] = useState(false);
  const [text, onChangeText] = useState('');
  const [addImg, setAddImg] = useState(false);
  const [CoverImg, setCoverImg] = useState('');

  useEffect(() => {
    props.setApp('add10');
  }, []);
  return (
    <View style={styles.subDiv}>
      <Text style={styles.addTitle2}>습관 모임 대표 이미지</Text>
      <View style={styles.addImgContainer}>
        <TouchableOpacity
          style={styles.addImg2}
          onPress={() => setAddImg(true)}>
          {CoverImg === '' ? (
            <Image
              source={require('../../../image/photo_select.png')}
              style={styles.selectImg}
            />
          ) : (
            <Image source={CoverImg} style={styles.selectImg2} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.addTitle3}>어떤 습관 모임인가요?</Text>
      <View style={styles.addTxtInput}>
        <TextInput
          style={styles.addTxtInput2}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity
          style={{flex: 0.4, alignItems: 'flex-end', marginRight: 10}}>
          <Image source={require('../../../image/profileEdit.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.setPrev(false)}
        style={styles.prevBtn2}>
        <Image
          source={require('../../../image/prevArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPrev(true)}
        style={[styles.nextBtn, {borderColor: '#7D63EB'}]}>
        <Image
          source={require('../../../image/nextArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      {prev ? (
        <Add4
          isAlone={props.isAlone}
          categoryName={props.categoryName}
          category={props.category}
          date={props.date}
          setPrev={setPrev}
          setApp={props.setApp}
        />
      ) : undefined}
      {addImg ? (
        <ChooseCover
          setApp={props.setApp}
          setAddImg={setAddImg}
          CoverImg={CoverImg}
          setCoverImg={setCoverImg}
        />
      ) : undefined}
    </View>
  );
}

function ChooseCover(props) {
  useEffect(() => {
    props.setApp('addImg');
  }, []);
  const ChooseImg = [
    require('../../../image/back1.png'),
    require('../../../image/back2.png'),
    require('../../../image/back3.png'),
    require('../../../image/back4.png'),
    require('../../../image/back5.png'),
    require('../../../image/back6.png'),
    require('../../../image/back7.png'),
    require('../../../image/back8.png'),
    require('../../../image/back9.png'),
    require('../../../image/back10.png'),
    require('../../../image/back11.png'),
    require('../../../image/back12.png'),
    require('../../../image/back13.png'),
    require('../../../image/back14.png'),
    require('../../../image/back15.png'),
  ];
  const choiceImg = image => {
    props.setCoverImg(image);
    props.setApp('add10');
    props.setAddImg(false);
  };
  return (
    <ScrollView
      style={styles.subDiv2}
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {ChooseImg.map((image, i) => {
        return (
          <TouchableOpacity
            style={styles.chooseCover}
            onPress={() => choiceImg(image)}>
            <Image source={image} key={i} style={{resizeMode: 'contain'}} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  article: {
    height: '100%',
    backgroundColor: 'white',
    zIndex: 20,
  },
  subDiv: {
    height: 600,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 20,
    width: '100%',
  },
  subDiv2: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  addTitle: {
    marginLeft: 30,
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  addTitle2: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    marginVertical: 20,
  },
  addTitle3: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
    marginTop: 50,
  },
  addDiv: {
    // flexDirection: 'row',
    marginHorizontal: 30,
  },
  startAdd: {
    width: '95%',
    marginLeft: '2.5%',
    borderWidth: 2,
    height: 150,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  addImg: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: '43%',
    width: 50,
    height: 50,
  },
  addImg2: {
    backgroundColor: '#DEDEDE',
    width: 106,
    height: 106,
    borderRadius: 10,
    justifyContent: 'center',
  },
  addImgContainer: {
    alignItems: 'center',
  },
  selectImg: {
    alignSelf: 'center',
  },
  selectImg2: {
    alignSelf: 'center',
    width: 106,
    height: 106,
    borderRadius: 10,
  },
  addTxtInput: {
    marginTop: 20,
    width: '85%',
    alignSelf: 'center',
    height: 120,
    borderWidth: 2,
    borderColor: '#DEDEDE',
    borderRadius: 10,
  },
  addTxtInput2: {
    flex: 1,
    marginLeft: 5,
    marginTop: -40,
    color: 'black',
  },
  addTxt: {
    textAlign: 'center',
    color: 'black',
  },
  prevBtn: {
    position: 'absolute',
    borderColor: '#C2C2C2',
    right: 40,
    bottom: 80,
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  prevBtn2: {
    position: 'absolute',
    borderColor: '#C2C2C2',
    right: 100,
    bottom: 80,
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  checkImg: {
    marginTop: 100,
    marginLeft: 140,
  },
  toHomeBtn: {
    fontWeight: '700',
    toHomeBtn: {
      fontWeight: '700',
      color: 'black',
      paddingRight: 70,
      paddingLeft: 10,
    },
    color: 'black',
    paddingRight: 70,
    paddingLeft: 10,
  },
  nextBtn: {
    position: 'absolute',
    borderColor: '#96E471',
    right: 40,
    bottom: 80,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  categoryBtn: {
    flexDirection: 'row',
    borderRightColor: '#0000001A',
    borderRightWidth: 1,
    borderBottomColor: '#0000001A',
    borderBottomWidth: 3,
    borderRadius: 40,
    width: 150,
    height: 50,
    marginTop: 10,
    margin: 5,
    padding: 10,
  },
  categoryImg: {
    flex: 0.2,
    marginLeft: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  addcategoryTxt: {
    flex: 1,
    color: 'black',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  categoryTxt: {
    flex: 0.8,
    color: 'black',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '500',
  },
  addHabitTxt: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 40,
    width: 250,
    marginLeft: 10,
    paddingLeft: 20,
    borderRadius: 20,
  },
  addHabit: {
    backgroundColor: '#96E471',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 20,
    textAlign: 'center',
  },
  addHabitBtnTxt: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
  datepicker: {
    //marginHorizontal: 40
    alignSelf: 'center',
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
  prevBtn3: {
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 0,
    padding: 20,
    borderRadius: 60,
  },
  chooseCover: {
    width: 163.5,
    height: 163.5,
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
