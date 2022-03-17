import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {GrabitTerms} from '../../json/terms';
import colors from '../../src/colors';
import styled from 'styled-components/native';

export const basicDimensions = {
  // 디자이너가 작업하고 있는 XD파일 스크린의 세로,가로
  height: 812,
  width: 375,
};

export const height = // 높이 변환 작업
(Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2);

export const width = // 가로 변환 작업
(Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2);

function ViewInvite(props) {
  return (
    <Modal
      isVisible={true}
      animationType="fade"
      statusBarTranslucent={true}
      transparent={true}>
      <View style={styles.viewInviteDiv}>
        <Text style={styles.inviteTitle}>친구 초대</Text>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View>
            <Image
              style={styles.inviteIcon}
              source={require('../../../image/kakao.png')}
            />
            <Text style={styles.inviteTxt}>카카오톡</Text>
          </View>

          <View>
            <Image
              style={styles.inviteIcon}
              source={require('../../../image/link.png')}
            />
            <Text style={styles.inviteTxt}>링크 복사</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.setViewInvite(false)}>
          <Text style={styles.inviteCancle}>취소</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

function Icon(props) {
  const [icon, setIcon] = useState(1);
  const [hobby, setHobby] = useState(false);

  return (
    <View style={styles.subDiv}>
      <Text>프로필로 사용할</Text>
      <Text>아이콘을 선택해 주세요!</Text>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(1)}>
          <Image
            style={icon == 1 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(2)}>
          <Image
            style={icon == 2 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(3)}>
          <Image
            style={icon == 3 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji3.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(4)}>
          <Image
            style={icon == 4 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji4.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(5)}>
          <Image
            style={icon == 5 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji5.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(6)}>
          <Image
            style={icon == 6 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji6.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(7)}>
          <Image
            style={icon == 7 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji7.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(8)}>
          <Image
            style={icon == 8 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji8.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(9)}>
          <Image
            style={icon == 9 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji9.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => setIcon(10)}>
          <Image
            style={icon == 10 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji10.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(11)}>
          <Image
            style={icon == 11 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji11.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIcon(12)}>
          <Image
            style={icon == 12 ? styles.iconstyle : styles.nonicon}
            source={require('../../../image/emoji12.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.setProfileEdit(false)}
        style={styles.purpleBtn}>
        <Text style={styles.purpleBtnTxt}>결정하기</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileEdit(props) {
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [icon, setIcon] = useState(false);

  return (
    <View style={styles.subDiv}>
      <Text style={styles.profileEditTxt}>이름</Text>
      <TextInput
        style={styles.textName}
        value={name}
        onChangeText={text => setContent(setName)}
      />
      <Text style={styles.profileEditTxt2}>
        *이름 수정은 최대 1회 가능합니다. 실명을 기입해 주세요.
      </Text>
      <Text style={styles.profileEditTxt}>소개글</Text>
      <TextInput
        style={styles.textContent}
        value={content}
        multiline={true}
        onChangeText={text => setContent(text)}
      />
      <TouchableOpacity
        style={{alignItems: 'center'}}
        activeOpacity={0.9}
        onPress={() => setIcon(true)}>
        <Text style={styles.editBtn}>수정 완료</Text>
      </TouchableOpacity>
      {icon ? <Icon setProfileEdit={props.setProfileEdit} /> : undefined}
    </View>
  );
}

function OfficialList(props) {
  const [arrow, setArrow] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.officiallistone}
        onPress={() => (arrow ? setArrow(false) : setArrow(true))}>
        <Text style={styles.officialdate}>{props.date}</Text>
        <Text style={styles.officialtitle}>{props.title}</Text>
        <View style={styles.officialarrow}>
          <Image
            source={
              arrow
                ? require('../../../image/topArrow.png')
                : require('../../../image/bottomArrow.png')
            }
          />
        </View>
      </TouchableOpacity>
      <View style={arrow ? styles.officialContent : {display: 'none'}}>
        <Text style={styles.officialtitle2}>{props.title}</Text>
        <Text>{props.content}</Text>
      </View>
    </>
  );
}

function Official() {
  const [official, setOfficial] = useState([
    {
      content: '',
      date: '',
      id: '',
      subject: '',
    },
  ]);
  useEffect(() => {
    fetch('http://193.123.253.133:5000/board/notices')
      .then(response => response.json())
      .then(data => {
        setOfficial(data);
      });
  }, []);

  return (
    <OfficialContainer>
      {official.map((notice, i) => {
        return (
          <OfficialList
            content={notice.content}
            date={notice.date}
            title={notice.subject}
          />
        );
      })}
    </OfficialContainer>
  );
}
const OfficialContainer = styled.View`
  height: 1500px;
  width: 100%;
  background-color: ${colors.white};
  position: absolute;
`;

function AddNotices() {
  fetch('http://193.123.253.133:5000/board/notice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: '공지사항 API 테스트 중입니다',
      subject: '공지사항 API 테스트 제목입니다',
    }),
  }).then(response => console.log(response));
}
function Service(props) {
  return (
    <View style={styles.subDivNotice}>
      <View style={styles.helplist}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            props.setPriInfo(true);
          }}
          style={styles.listone}>
          <Text style={styles.mypagelist}>개인정보처리 방침</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../../image/rightArrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            props.setServiceTxt(true);
          }}
          style={styles.listone}>
          <Text style={styles.mypagelist}>서비스 이용약관</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../../image/rightArrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            props.setQuesEmail(true);
          }}
          style={styles.listone}>
          <Text style={styles.mypagelist}>이메일 문의</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../../image/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      {props.priInfo && <PriInfo setService={props.setService} />}
      {props.serviceTxt && <ServiceTxt setService={props.setService} />}
      {props.quesEmail && <QuesEmail setService={props.setService} />}
    </View>
  );
}
function PriInfo() {
  return (
    <ScrollView style={styles.helpContainer}>
      <Text style={styles.txtHeader}> 제 1조(목적)</Text>
      <Text style={styles.txtBody}> 내용 텍스트</Text>
    </ScrollView>
  );
}
// 서비스 이용약관
function ServiceTxt() {
  return (
    <ScrollView style={styles.helpContainer} nestedScrollEnabled={true}>
      <View>
        {GrabitTerms.map((content, i) => {
          return (
            <View>
              <Text style={styles.txtHeader}> {content.head}</Text>
              <Text style={styles.txtBody}> {content.content}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
function QuesEmail() {
  return (
    <View style={styles.quesEmail}>
      <Image source={require('../../../image/Email2.png')} />
      <Text style={styles.txtEmail}> officialhabeat@gmail.com</Text>
    </View>
  );
}
function Logout2(props) {
  return (
    <Modal
      isVisible={true}
      animationType="fade"
      statusBarTranslucent={true}
      transparent={true}>
      <View style={[styles.logDiv]}>
        <Text style={{textAlign: 'center', fontWeight: '600'}}>
          로그아웃하시겠습니까?
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.logSubDivLeft}
            onPress={() => props.setApp('login')}>
            <Text style={{textAlign: 'center', fontWeight: '600'}}>확인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logSubDivRight}
            onPress={() => props.setLogout(false)}>
            <Text style={{textAlign: 'center', fontWeight: '600'}}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function Signout2(props) {
  return (
    <Modal
      isVisible={!props.visible}
      animationType="fade"
      statusBarTranslucent={true}
      transparent={true}>
      <View style={[styles.logDiv]}>
        <Text style={{textAlign: 'center', fontWeight: '600'}}>
          탈퇴하시겠습니까?
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.logSubDivLeft}
            onPress={() => props.setSignout3(true)}>
            <Text style={{textAlign: 'center', fontWeight: '600'}}>확인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logSubDivRight}
            onPress={() => props.setSignout(false)}>
            <Text style={{textAlign: 'center', fontWeight: '600'}}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function Signout3(props) {
  useEffect(() => {
    props.setVisible(true);

    fetch('http://193.123.253.133:5000/users/' + props.id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  });
  return (
    <View style={styles.signout}>
      <Image
        style={{marginTop: 150}}
        source={require('../../../image/signout.png')}
      />
      <Text style={styles.signoutTxt}>탈퇴가 완료되었습니다.</Text>
      <TouchableOpacity
        onPress={() => props.setApp('login')}
        style={[styles.prevBtn4, {borderColor: '#7D63EB'}]}>
        <Text style={styles.toHomeBtn}>홈으로 가기</Text>
        <Image
          source={require('../../../image/nextArrow2.png')}
          style={styles.prevArrow3}
        />
      </TouchableOpacity>
    </View>
  );
}

function Signout(props) {
  const [visible, setVisible] = useState(false);
  const [signout, setSignout] = useState(false);
  const [signout3, setSignout3] = useState(false);

  return (
    <View style={[styles.subDiv]}>
      <Image
        style={styles.outImage}
        source={require('../../../image/signout.png')}
      />
      <Text style={styles.outTxt}>그래빗에서 탈퇴하면</Text>
      <Text style={styles.outTxt}>참여했던 습관들에서 퇴장됩니다</Text>
      <Text style={styles.outTxt}>그래도 탈퇴하시겠어요?</Text>
      <TouchableOpacity
        onPress={() => props.setSignout(false)}
        style={styles.prevBtn4}>
        <Text style={styles.toHomeBtn}>회원 유지하기</Text>
        <Image
          source={require('../../../image/nextArrow2.png')}
          style={styles.prevArrow3}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSignout(true)}
        style={styles.logoutBtn}>
        <Text style={styles.logoutTxt}>회원 탈퇴하기</Text>
        <Image
          source={require('../../../image/nextArrow2.png')}
          style={styles.prevArrow2}
        />
      </TouchableOpacity>
      {signout ? (
        <Signout2
          setSignout={setSignout}
          setSignout3={setSignout3}
          visible={visible}
        />
      ) : undefined}
      {signout3 ? (
        <Signout3 setApp={props.setApp} setVisible={setVisible} id={props.id} />
      ) : undefined}
    </View>
  );
}

function Logout(props) {
  const [logout, setLogout] = useState(false);
  const [signout, setSignout] = useState(false);
  return (
    <View style={[styles.subDiv]}>
      <TouchableOpacity
        onPress={() => setLogout(true)}
        style={[styles.logoutBtn2, {marginTop: 180}]}>
        <Text style={styles.logoutTxt}>로그아웃하기</Text>
        <Image
          source={require('../../../image/nextArrow2.png')}
          style={styles.prevArrow2}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSignout(true)}
        style={styles.logoutBtn2}>
        <Text style={styles.logoutTxt}>회원 탈퇴하기</Text>
        <Image
          source={require('../../../image/nextArrow2.png')}
          style={styles.prevArrow2}
        />
      </TouchableOpacity>
      {logout ? (
        <Logout2 setLogout={setLogout} setApp={props.setApp} />
      ) : undefined}
      {signout ? (
        <Signout setSignout={setSignout} id={props.id} setApp={props.setApp} />
      ) : undefined}
    </View>
  );
}

export default function Footer(props) {
  const [viewInvite, setViewInvite] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://193.123.253.133:5000/users/${props.id}/profile`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setData(response);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return (
    <ScrollView style={styles.article} nestedScrollEnabled={true}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => props.setProfileEdit(true)}
          activeOpacity={1}
          style={styles.profileEdit}>
          <Image source={require('../../../image/profileEdit.png')} />
        </TouchableOpacity>
        <Image
          style={styles.profile}
          source={require('../../../image/userbaseIcon.png')}
        />
        <Text style={styles.profileName}>성장하는 {props.id}님</Text>
      </View>
      <View style={styles.challengeList}>
        <View style={styles.challenges}>
          <View style={styles.challengeName}>
            <Image
              style={styles.grape}
              source={require('../../../image/together_grapes.png')}
            />
            <Text style={styles.myhabit}>함께</Text>
          </View>
          <Text style={styles.challengNum}>3</Text>
        </View>
        <View style={styles.challengestwo}>
          <View style={styles.challengeName}>
            <Image
              style={styles.grape}
              source={require('../../../image/alone_grapes.png')}
            />
            <Text style={styles.myhabit}>혼자</Text>
          </View>
          <Text style={styles.challengNum}>2</Text>
        </View>
        <View style={styles.challenges}>
          <View style={styles.challengeName}>
            <Text style={styles.myhabit}>완료</Text>
          </View>
          <Text style={styles.challengNum}>5</Text>
        </View>
      </View>
      <View style={styles.mylist}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setViewInvite(true)}
          style={styles.listone}>
          <Text style={styles.mypagelist}>친구 초대</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../../image/rightArrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.setOfficial(true)}
          style={styles.listone}>
          <Text style={styles.mypagelist}>공지사항</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../../image/rightArrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.setService(true)}
          style={styles.listone}>
          <Text style={styles.mypagelist}>고객센터</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../../image/rightArrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.setLogout(true)}
          style={styles.listtwo}>
          <Text style={styles.mypagelist}>로그아웃/회원탈퇴</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../../image/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      {viewInvite ? <ViewInvite setViewInvite={setViewInvite} /> : undefined}
      {props.profileEdit ? (
        <ProfileEdit setProfileEdit={props.setProfileEdit} />
      ) : undefined}
      {props.official ? <Official /> : undefined}
      {props.service ? (
        <Service
          setService={props.setService}
          setPriInfo={props.setPriInfo}
          setServiceTxt={props.setServiceTxt}
          priInfo={props.priInfo}
          serviceTxt={props.serviceTxt}
          quesEmail={props.quesEmail}
          setQuesEmail={props.setQuesEmail}
        />
      ) : undefined}
      {props.logout ? (
        <Logout setApp={props.setApp} id={props.id} />
      ) : undefined}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  article: {
    height: 600,
    backgroundColor: 'white',
  },
  subDiv: {
    height: 1500,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    elevation: 6,
  },
  subDivNotice: {
    height: 150,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    elevation: 6,
  },
  profileName: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  profileEdit: {
    position: 'absolute',
    right: 10,
    top: 18,
  },
  challenges: {
    width: 120,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    zIndex: 1,
  },
  challengestwo: {
    width: 120,
    padding: 10,
    borderColor: '#cec6f2',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  challengeList: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 30,
    borderRadius: 10,
    borderColor: '#7d63eb',
    backgroundColor: '#ffffff',
  },
  challengeName: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  grape: {
    width: 18,
    height: 'auto',
    resizeMode: 'contain',
  },
  challengNum: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
  },
  mylist: {
    backgroundColor: '#fafafa',
    height: 300,
  },
  helplist: {
    backgroundColor: '#ffffff',
    height: 1500,
  },
  listone: {
    marginTop: 10,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingLeft: 8,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
    flexDirection: 'row',
  },
  listtwo: {
    marginTop: 10,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingLeft: 8,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  rightArrow: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  viewInviteDiv: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    alignSelf: 'center',
  },
  inviteTitle: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
  inviteIcon: {
    width: 80,
    height: 80,
    marginHorizontal: 20,
  },
  inviteTxt: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  inviteCancle: {
    width: '94%',
    textAlign: 'center',
    backgroundColor: '#D6D6D6',
    borderRadius: 10,
    height: 40,
    padding: 10,
    fontWeight: '700',
    color: 'white',
    margin: 10,
  },
  textName: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    marginLeft: 10,
    marginBottom: 10,
    height: 33,
    width: 360,
  },
  textContent: {
    borderWidth: 1,
    margin: 10,
    width: 360,
    height: 150,
    textAlignVertical: 'top',
    borderColor: '#DEDEDE',
  },
  editBtn: {
    width: '60%',
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: '#7D63EB',
    color: 'white',
    paddingVertical: 10,
    marginTop: 100,
    fontSize: 16,
  },
  officiallistone: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 15,
    padding: 10,
    flexDirection: 'row',
  },
  officialarrow: {
    paddingTop: 5,
    marginLeft: 'auto',
  },
  officialdate: {
    marginTop: 2,
  },
  officialtitle: {
    marginLeft: 10,
    fontSize: 17,
    color: 'black',
  },
  officialtitle2: {
    color: 'black',
    fontSize: 17,
    paddingBottom: 10,
  },
  officialContent: {
    display: 'flex',
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5B2',
  },
  prevBtn3: {
    position: 'absolute',
    borderColor: '#96E471',
    right: 80,
    bottom: 150,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
  },
  prevBtn4: {
    borderColor: '#7D63EB',
    borderWidth: 2,
    padding: 15,
    flexDirection: 'row',
    marginVertical: 10,
    marginTop: 30,
    borderRadius: 35,
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  prevArrow3: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  toHomeBtn: {
    fontWeight: '700',
    color: 'black',
    paddingLeft: 10,
    flex: 5,
  },
  logoutBtn: {
    flexDirection: 'row',
    borderRadius: 35,
    backgroundColor: '#EFEFEF',
    width: '60%',
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoutBtn2: {
    flexDirection: 'row',
    borderRadius: 35,
    backgroundColor: '#EFEFEF',
    width: '60%',
    marginVertical: 5,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  prevArrow2: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  logoutTxt: {
    fontWeight: '700',
    color: '#5C5C5C',
    paddingLeft: 10,
    flex: 5,
  },
  logDiv: {
    backgroundColor: 'white',
    position: 'absolute',
    paddingTop: 30,
    borderRadius: 20,
    alignSelf: 'center',
  },
  logSubDivLeft: {
    width: 125,
    backgroundColor: '#F0F0F0',
    marginTop: 30,
    padding: 10,
    borderBottomLeftRadius: 20,
  },
  logSubDivRight: {
    width: 125,
    backgroundColor: '#F0F0F0',
    marginTop: 30,
    padding: 10,
    borderBottomRightRadius: 20,
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
    margin: 10,
    opacity: 0.5,
  },
  outImage: {
    marginTop: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  outTxt: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000000',
    marginVertical: 1,
  },
  myhabit: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    margin: 5,
  },
  mypagelist: {
    fontWeight: '300',
    color: '#000000',
  },
  profileEditTxt: {
    fontSize: 16,
    color: '#3C3C43',
    marginLeft: 10,
    marginBottom: 10,
  },
  profileEditTxt2: {
    fontSize: 12,
    color: '#3C3C4380',
    marginLeft: 10,
    marginBottom: 10,
  },
  txtHeader: {
    color: '#000000',
    fontWeight: '600',
    marginLeft: 10,
  },
  txtBody: {
    fontSize: 12,
    color: '#7D7D7D',
    fontWeight: '400',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  txtEmail: {
    fontSize: 18,
    color: '#7D63EB',
    fontWeight: '400',
    marginVertical: 20,
    padding: 10,
    textDecorationLine: 'underline',
  },
  helpContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#ffffff',
    height: 1000,
    flex: 1,
  },
  quesEmail: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    height: 550,
    justifyContent: 'center',
    flexDirection: 'row',
    top: -50,
  },
  signout: {
    height: 1500,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    elevation: 6,
    alignItems: 'center',
  },
  signoutTxt: {
    marginVertical: 30,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});
