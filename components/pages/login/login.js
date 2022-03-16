import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select';
import {GrabitTerms} from '../../json/terms';
import colors from '../../src/colors';
import styled from 'styled-components/native';
import {loginImages} from '../../src/images';

function CompleteJoin(props) {
  return (
    <Container>
      <Image
        style={[styles.checkImg, {marginTop: 200}]}
        source={
          props.isAlone
            ? require('../../../image/aloneCheck.png')
            : require('../../../image/togetherCheck.png')
        }
      />
      <Text
        style={{
          marginVertical: 20,
          color: 'black',
          fontWeight: '900',
          textAlign: 'center',
          fontSize: 20,
        }}>
        <Text style={{color: '#7D63EB'}}>회원가입</Text> 완료
      </Text>
      <Text style={{textAlign: 'center', color: 'black'}}>
        습관을 바꾸는 것만으로도
      </Text>
      <Text style={{textAlign: 'center', color: 'black'}}>
        자신의 인생을 바꿀 수 있다.
      </Text>
      <Text style={{textAlign: 'center', color: 'black'}}>
        - <Text>윌리엄 제임스</Text> -
      </Text>
      <TouchableOpacity
        onPress={() => props.setApp('home')}
        style={styles.prevBtn3}>
        <Text style={styles.purpleBtnTxt}>홈으로 가기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setApp('add')}
        style={styles.purpleBtn}>
        <Text style={styles.purpleBtnTxt}>습관 모임 만들기</Text>
      </TouchableOpacity>
    </Container>
  );
}

function Hobby(props) {
  const [complete, setComplete] = useState(false);
  const [h, setH] = useState('');
  function setHobby(hobby) {
    let hs = h + hobby + ',';
    setH(h);
  }

  function joinComplete() {
    fetch('http://193.123.253.133:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age: props.age,
        gender: props.gender,
        iconId: props.iconId,
        id: props.email,
        interestCategoryList: ['ECONOMY'],
        name: props.name,
        password: props.pswd,
      }),
    })
      .then(data => {
        setComplete(true);
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  return (
    <View style={styles.subDiv2}>
      <Text style={[styles.addTitle, {marginTop: 10}]}>관심 분야를</Text>
      <Text style={[styles.addTitle, {marginBottom: 40}]}>선택해 주세요!</Text>
      <View style={[styles.category, {marginTop: 80}]}>
        <TouchableOpacity
          onPress={() => setHobby('LIFE')}
          style={styles.categoryBtn}>
          <Image source={require('../../../image/habit1.png')} />
          <Text style={styles.categoryTxt}>생활습관</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHobby('HEALTH')}
          style={styles.categoryBtn}>
          <Image source={require('../../../image/habit2.png')} />
          <Text style={styles.categoryTxt}>건강습관</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <TouchableOpacity
          onPress={() => setHobby('GROW')}
          style={styles.categoryBtn}>
          <Image source={require('../../../image/habit3.png')} />
          <Text style={styles.categoryTxt}>성장습관</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setHobby('ECONOMY')}
          style={styles.categoryBtn}>
          <Image source={require('../../../image/habit4.png')} />
          <Text style={styles.categoryTxt}>경제습관</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <TouchableOpacity
          onPress={() => setHobby('FOR_ME')}
          style={styles.categoryBtn}>
          <Image source={require('../../../image/habit5.png')} />
          <Text style={styles.categoryTxt}>나를 위한 습관</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.setHobby(false)}
        style={[styles.prevBtn, {marginTop: 175}]}>
        <Image
          source={require('../../../image/prevArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => joinComplete()} style={styles.purpleBtn}>
        <Text style={styles.purpleBtnTxt}>결정하기</Text>
      </TouchableOpacity>
      {complete ? <CompleteJoin setApp={props.setApp} /> : undefined}
    </View>
  );
}

function Icon(props) {
  const [icon, setIcon] = useState(0);
  const [hobby, setHobby] = useState(false);
  const IconImage = styled.Image`
    margin: 20px;
    opacity: ${props => (icon === props.num ? 1 : 0.5)};
  `;
  const IconContainer = styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: ${colors.white};
    position: absolute;
    top : 20px;
  `;
  return (
    <IconContainer>
      <Text
        style={{marginTop: 10, marginLeft: 40, fontSize: 20, color: 'black'}}>
        프로필로 사용할
      </Text>
      <Text style={{marginLeft: 40, fontSize: 20, color: 'black'}}>
        아이콘을 선택해 주세요!
      </Text>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(1)}>
          <IconImage source={require('../../../image/emoji1.png')} num={1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(2)}>
          <IconImage source={require('../../../image/emoji2.png')} num={2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(3)}>
          <IconImage source={require('../../../image/emoji3.png')} num={3} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(4)}>
          <IconImage source={require('../../../image/emoji4.png')} num={4} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(5)}>
          <IconImage source={require('../../../image/emoji5.png')} num={5} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(6)}>
          <IconImage source={require('../../../image/emoji6.png')} num={6} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(7)}>
          <IconImage source={require('../../../image/emoji7.png')} num={7} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(8)}>
          <IconImage source={require('../../../image/emoji8.png')} num={8} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(9)}>
          <IconImage source={require('../../../image/emoji9.png')} num={9} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(10)}>
          <IconImage source={require('../../../image/emoji10.png')} num={10} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(11)}>
          <IconImage source={require('../../../image/emoji11.png')} num={11} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(12)}>
          <IconImage source={require('../../../image/emoji12.png')} num={12} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.setIcon(false)}
        style={styles.prevBtn}>
        <Image
          source={require('../../../image/prevArrow.png')}
          style={styles.prevArrow}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setHobby(true)} style={styles.purpleBtn}>
        <Text style={styles.purpleBtnTxt}>결정하기</Text>
      </TouchableOpacity>
      {hobby ? (
        <Hobby
          age={props.age}
          gender={props.gender}
          email={props.email}
          name={props.name}
          pswd={props.pswd}
          setHobby={setHobby}
          iconId={icon}
          setApp={props.setApp}
        />
      ) : undefined}
    </IconContainer>
  );
}

function ForgotPW(props) {
  const [email, setEmail] = useState('');
  const [text, setContent] = useState('');
  function forgotPasword() {
    fetch('http://193.123.253.133:5000/users/password', {
      method: 'POST',
      body: JSON.stringify({
        id: email,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        props.setForgotPW(false);
      });
    // props.setForgotPW(false);
  }

  return (
    <Container>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '900',
          marginTop: 200,
          fontSize: 25,
          color: 'black',
        }}>
        비밀번호 찾기
      </Text>
      <Text style={{textAlign: 'center', paddingTop: 10}}>
        가입하신 이메일로 비밀번호 변경 메일을
      </Text>
      <Text style={{textAlign: 'center', paddingBottom: 40}}>
        보내드립니다.
      </Text>
      <View>
        <Image
          style={styles.icon}
          source={require('../../../image/email.png')}
        />
        <TextInput
          placeholder="이메일"
          style={styles.textName}
          value={email}
          onChangeText={text => setContent(setEmail)}
        />
      </View>
      <TouchableOpacity
        onPress={() => forgotPasword()}
        style={styles.purpleBtn}>
        <Text style={styles.purpleBtnTxt}>계속하기</Text>
      </TouchableOpacity>
    </Container>
  );
}

function UserPromise(props) {
  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
        hidden={true}
      />
      <Image
        style={{width: '100%'}}
        source={require('../../../image/selectHeader.png')}
      />
      <View style={{position: 'absolute', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            props.setUserPromise(false);
          }}>
          <Image
            style={styles.preBtn}
            source={require('../../../image/preBtn.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            width: 400,
            marginLeft: 120,
            fontWeight: '900',
            top: 30,
          }}>
          서비스 이용약관
        </Text>
      </View>
      <Text style={{marginTop: 20, marginLeft: 20}}>서비스 이용약관</Text>
      <View style={{height: 250}}>
        <ScrollView
          style={{
            backgroundColor: '#F5F5F5B2',
            margin: 20,
            marginBottom: 10,
            padding: 10,
            borderRadius: 15,
          }}>
          {GrabitTerms.map((content, i) => {
            return (
              <View key={i}>
                <Text> {content.head}</Text>
                <Text> {content.content}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Text style={{marginTop: 20, marginLeft: 20}}>개인정보 이용방침</Text>
    </Container>
  );
}

function Join(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [gender, setGender] = useState(true);
  const [age, setAge] = useState(80);
  const [icon, setIcon] = useState(false);
  const [userPromise, setUserPromise] = useState(false);
  const [warn, setWarn] = useState('');

  function isJoin() {
    var num = pswd.search(/[0-9]/g);
    var eng = pswd.search(/[a-z]/gi);
    if (name.length > 15) {
      setWarn('이름이 너무 깁니다.(15자 이하)');
    } else if (!email.includes('@') || !email.includes('.')) {
      setWarn('이메일 형식이 맞지 않습니다.');
    } else if (pswd.length < 8) {
      setWarn('비밀번호 길이가 너무 짧습니다.(8자 이상)');
    } else if (num < 0 || eng < 0) {
      setWarn('비밀번호는 영어와 숫자가 하나 이상 있어야 합니다.');
    } else if (age == 80) {
      setWarn('나이대를 선택해주세요.');
    } else if (!isSelected) {
      setWarn('이용약관에 동의하지 않으시면 가입이 제한됩니다.');
    } else {
      fetch('http://193.123.253.133:5000/users/' + email + '/exist')
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data) {
            setWarn('이메일이 중복됩니다.');
          } else setIcon(true);
        })
        .catch(error => console.log(error));
    }
    setIcon(true);
  }

  return (
    <Container>
      <Text style={styles.loginTxt3}>회원가입</Text>
      <Text style={styles.loginTxt4}>
        아이디를 만들어 그래빗을 시작해보세요!
      </Text>
      <LoginInputContainer>
        <LoginIconImg source={loginImages.user} />
        <TextInput
          placeholder="이름(실명 입력)"
          style={{marginLeft: 35}}
          value={name}
          onChangeText={text => setName(text)}
        />
      </LoginInputContainer>

      <LoginInputContainer>
        <LoginIconImg source={loginImages.email} />
        <TextInput
          placeholder="이메일"
          style={{marginLeft: 35}}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </LoginInputContainer>
      <LoginInputContainer>
        <LoginIconImg source={loginImages.pswd} />
        <TextInput
          placeholder="비밀번호"
          style={{marginLeft: 35}}
          value={pswd}
          secureTextEntry={true}
          onChangeText={text => setPswd(text)}
        />
      </LoginInputContainer>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TouchableOpacity
          style={gender ? styles.thisGender : styles.noGender}
          onPress={() => setGender(true)}>
          <Text>남</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={gender ? styles.noGender : styles.thisGender}
          onPress={() => setGender(false)}>
          <Text>여</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{padding: 10, marginTop: 10}}>나이대</Text>
        <RNPickerSelect
          onValueChange={value => setAge(value)}
          items={[
            {label: '0대', value: 0},
            {label: '10대', value: 10},
            {label: '20대', value: 20},
            {label: '30대', value: 30},
            {label: '40대', value: 40},
            {label: '50대', value: 50},
            {label: '60대 이상', value: 60},
          ]}
        />
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <View>
          <Text>
            계정을 생성함으로써 귀하는 당사의{' '}
            <TouchableOpacity onPress={() => setUserPromise(true)}>
              <Text style={{color: colors.purple, fontWeight: '700'}}>
                이용 약관
              </Text>
            </TouchableOpacity>
            에
          </Text>
          <Text>동의하는 것입니다.</Text>
        </View>
      </View>
      <Text style={{color: 'red', paddingLeft: 20, paddingTop: 10}}>
        {warn}
      </Text>
      <TouchableOpacity onPress={() => isJoin()} style={styles.purpleBtn}>
        <Text style={styles.purpleBtnTxt}>회원가입</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginHorizontal: 120}}>
        <Text>계정이 있으신가요? </Text>
        <TouchableOpacity onPress={() => props.setJoin(false)}>
          <Text style={{color: '#7d63e8'}}>로그인</Text>
        </TouchableOpacity>
      </View>
      {userPromise ? (
        <UserPromise setUserPromise={setUserPromise} />
      ) : undefined}
      {icon ? (
        <Icon
          age={age}
          gender={gender ? 'MALE' : 'FEMALE'}
          email={email}
          name={name}
          pswd={pswd}
          setIcon={setIcon}
          setApp={props.setApp}
        />
      ) : undefined}
    </Container>
  );
}

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [join, setJoin] = useState(false);
  const [forgotPW, setForgotPW] = useState(false);

  function insertLogin(email, pswd) {
    fetch('http://193.123.253.133:5000/users/login', {
      method: 'PATCH',
      body: JSON.stringify({
        id: email,
        password: pswd,
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.id === email) {
          props.setId(email);
          props.setName(props.name);
          props.setApp('home'); // 서버에러 해결되면 지우기
          if (data.key === pswd) {
            // props.setApp('home'); // 서버에러있어서 잠깐 주석처리
          }
        }
      });
  }

  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor={`${colors.white}`}
        barStyle="dark-content"
      />
      <LoginHeaderTxt>안녕하세요, 반가워요!</LoginHeaderTxt>
      <LoginSubTxt>계정에 로그인하세요.</LoginSubTxt>
      <LoginInputContainer>
        <LoginIconImg source={loginImages.email} />
        <TextInput
          placeholder="이메일"
          value={email}
          onChangeText={text => setEmail(text)}
          style={{marginLeft: 35}}
        />
      </LoginInputContainer>
      <LoginInputContainer>
        <LoginIconImg source={loginImages.pswd} />
        <TextInput
          placeholder="비밀번호"
          value={pswd}
          secureTextEntry={true}
          onChangeText={text => setPswd(text)}
          style={{marginLeft: 35}}
        />
      </LoginInputContainer>
      <TouchableOpacity onPress={() => setForgotPW(true)}>
        <Text style={styles.forgotPswd}>비밀번호를 잊으셨나요?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => insertLogin(email, pswd)}
        style={styles.purpleBtn}>
        <Text style={styles.purpleBtnTxt}>로그인</Text>
      </TouchableOpacity>
      <Text style={styles.joinP}>
        <Text>계정이 없으신가요? </Text>
        <TouchableOpacity onPress={() => setJoin(true)}>
          <Text style={styles.join}>회원가입</Text>
        </TouchableOpacity>
      </Text>
      {forgotPW ? <ForgotPW setForgotPW={setForgotPW} /> : undefined}
      {join ? <Join setJoin={setJoin} setApp={props.setApp} /> : undefined}
    </Container>
  );
}
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: ${colors.white};
  position: absolute;
`;
const LoginHeaderTxt = styled.Text`
  font-size: 25px;
  color: ${colors.black};
  margin-top: 140px;
  margin-left: 30px;
  font-weight: bold;
`;
const LoginSubTxt = styled.Text`
  margin-left: 30px;
  margin-bottom: 80px;
`;
const LoginIconImg = styled.Image`
  position: absolute;
  margin-top: 15px;
  margin-left: 10px;
`;
const LoginInputContainer = styled.View`
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.purple};
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;

const styles = StyleSheet.create({
  subDiv2: {
    width: '100%',
    height: 1000,
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 3,
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

  loginTxt3: {
    fontSize: 25,
    color: 'black',
    marginTop: 40,
    marginLeft: 30,
    fontWeight: '900',
  },
  loginTxt4: {
    marginLeft: 30,
    marginBottom: 40,
  },
  forgotPswd: {
    textAlign: 'right',
    marginRight: 30,
    marginBottom: 20,
  },
  joinP: {
    marginLeft: 100,
  },
  join: {
    color: '#7d63eb',
    marginLeft: 10,
    paddingTop: 20,
  },
  iconView: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 40,
  },
  iconstyle: {
    margin: 20,
  },
  nonicon: {
    margin: 20,
    opacity: 0.5,
  },
  category: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  categoryBtn: {
    borderRightColor: '#0000001A',
    borderRightWidth: 1,
    borderBottomColor: '#0000001A',
    borderBottomWidth: 3,
    borderRadius: 40,
    width: 160,
    height: 50,
    margin: 10,
    flexDirection: 'row',
    padding: 10,
  },
  categoryImg: {
    width: 20,
    height: 20,
    margin: 2,
    marginLeft: 10,
  },
  categoryTxt: {
    color: 'black',
    marginVertical: 2,
    width: '100%',
    textAlign: 'center',
  },
  prevBtn: {
    //   position: 'absolute',
    borderColor: '#C2C2C2',
    marginLeft: 340,
    //   marginTop: 180,
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
    width: 45,
  },
  addTitle: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 30,
  },
  prevBtn3: {
    position: 'absolute',
    borderColor: '#96E471',
    right: 100,
    bottom: 80,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
  },
  checkImg: {
    marginTop: 100,
    marginLeft: 140,
  },
  prevBtn3: {
    position: 'absolute',
    borderColor: '#96E471',
    right: 100,
    bottom: 80,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
  },
  toHomeBtn: {
    fontWeight: '700',
    color: 'black',
    paddingRight: 70,
    paddingLeft: 10,
  },
  noGender: {
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#F9F9FA',
    borderRadius: 20,
  },
  thisGender: {
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#7d63e8',
    borderRadius: 20,
  },
  preBtn: {
    top: 10,
    left: 30,
    marginVertical: 20,
    zIndex: 5,
  },
});
