import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

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
  const [official, setOfficial] = useState(undefined);
  fetch('http://193.123.253.133:5000/board/notices', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(response => {
      response.map((el, key) => {
        <OfficialList date={el.date} title={el.subject} content={el.content} />;
      });
      setOfficial(official);
      console.log(response);
    });
  return (
    <View style={[styles.subDiv, styles.officialDiv]}>
      {official}
      <OfficialList
        date={'09.11'}
        title={'공지사항 제목'}
        content={'공지사항 내용을 입력해 주세요.'}
      />
      <TouchableOpacity
        style={{margin: 20, borderWidth: 2}}
        onPress={AddNotices}>
        <Text>공지사항 생성 테스트</Text>
      </TouchableOpacity>
    </View>
  );
}
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
    <View style={styles.helpContainer}>
      <ScrollView style={{flex: 1}}>
        <Text style={styles.txtHeader}> 제 1조 (목적)</Text>
        <Text style={styles.txtBody}>
          {`본 약관(이하 "약관")은 개발팀 ‘HABEAT’가 개발한 그래빗(Grabit)에서 제공하는 그래빗(Grabit) 어플리케이션 서비스(이하”서비스”) 내에서 회원의 습관개선을 위한 개인습관, 단체습관모임 개설 및 참여, 진행 방식과 관련하여 “HABEAT”와 “회원”의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.`}
        </Text>
        <Text style={styles.txtHeader}>제 2조 (용어의 정의)</Text>
        <Text style={styles.txtBody}>
          {`본 약관에서 사용하는 용어의 정의는 다음과 같습니다.

1. “Grabit”는 “회원”이 개인 습관을 기록 및 추적하고, 단체습관 모임의 개설 혹은 참여하여, 혼자서 또는 함께 습관 개선을 이루어나가는 서비스와 이외 부가적인 서비스를 제공하는 어플리케이션을 의미합니다. (이하 “그래빗” 또는 “서비스”라고 합니다.)
2. "회원"은 개발팀 HABEAT(이하 “개발팀”)에 개인정보를 제공하여 "회원" 등록을 한 자로서, 본 약관에 따라 개발팀과 이용계약을 체결하고 “서비스”를 이용하는 이용자를 의미합니다.
3. “단체습관”이란 서비스 내 가입 신청을 통해 타인과 함께 습관개선을 위해 개설 또는 참여할 수 있는 습관달성 모임을 의미합니다.
4. “개인습관"이란 “회원”이 개인의 습관 개선을 위해 개인으로 생성 및 참여하는 습관 기록 행위를 의미합니다.
5. “방장”이란 “단체습관”을 개설한 회원을 의미합니다.
6. “포도알”이란 습관달성 버튼을 클릭하여 해당일의 습관을 달성한 회원에게 기록 및 달성 추적의 의미로 부여하는 보상을 의미합니다.
7. 이 약관에 명시되지 아니한 사항에 대해서는 관계법령 및 서비스별 안내의 취지에 따라 적용할 수 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 3조 (약관의 효력 및 변경)</Text>
        <Text style={styles.txtBody}>
          {`1. "개발팀"은 약관 및 개인정보 수집방침을 "회원" 이 확인할 수 있도록 서비스 화면에 하이퍼링크의 형태 또는 메뉴의 형태 등으로 제공합니다.
2. 이 약관은 "회원"의 동의와 "개발팀"의 승낙으로 효력을 발생하며, "개발팀"은 관련 법령(약관의 규제에 관한 법률, 정보 통신망 이용 촉진 및 정보 보호 등에 관한 법률 등)을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.
3. "개발팀"이 이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 적용일자 7일 전부터 홈페이지 또는 앱 내 공지합니다.
4. 약관의 효력이 발생된 날로부터 14일 이후까지 거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우는 약관에 동의한 것으로 간주됩니다.
5. “회원”이 개정약관의 적용에 동의하지 않는 경우 “개발팀” 또는 “회원”은 이용계약을 해지할 수 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 4조 (약관의 명시와 개정)</Text>
        <Text style={styles.txtBody}>
          {`본 약관에서 정하지 않은 사항이나 해석에 대하여는 관련 법령 또는 상관례에 따릅니다.
1. "회원"은 "개발팀"이 제공하는 “서비스”를 이용함에 있어서 전자상거래 등에서의 소비자보호에 관한 법률, 전자거래기본법, 표시광고의 공정화에 관한 법률, 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관련법령을 준수하여야 하며, 이 약관의 규정을 들어 관련법령 위반에 대한 면책을 주장할 수 없습니다.
2. “개발팀”은 개별 서비스에 대해 별도의 이용약관 또는 정책(이하 “별도 약관”)을 둘 수 있으며, 그 내용이 본 약관과 충돌하는 경우 “별도 약관”이 우선하여 적용됩니다.
3. "회원"이 개정된 약관의 적용에 대하여 동의하지 않는 경우 "개발팀" 또는 "회원"은 "서비스" 이용계약을 해지할 수 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}>제 5조 (이용계약의 체결 및 거절)</Text>
        <Text style={styles.txtBody}>
          {`
1. “서비스”의 이용계약은 회원이 되고자 하는 자(이하 “가입신청자”)가 본 약관에 동의하고 가입을 신청한 다음 개발팀이 이를 수락함으로써 체결됩니다. 필요한 경우 개발팀은 본인 확인 기관을 통한 실명확인 및 본인인증을 요청할 수 있습니다.
2. 가입신청자는 가입신청 시 진실한 정보를 기재하여야 하며, 허위의 정보를 기재한 경우 서비스 이용에 제한이 있을 수 있고, 나아가 그로 인한 불이익 및 법적 책임은 가입신청자에게 있습니다.
3. 가입신청자가 이전에 회원자격을 상실한 적이 있는 경우, 허위의 명의 또는 타인의 명의를 이용한 경우, 기타의 사유로 개발팀의 판단 하에 승낙이 불가능한 사유가 있는 경우 이용계약의 승낙이 거부될 수 있습니다.
4. “개발팀”은 서비스 관련 설비의 여유 기타 기술상 또는 업무상의 이유로 이용계약의 승낙을 유보할 수 있습니다.
5. “개발팀”은 다음 각 호에 해당하는 가입신청에 대하여는 승낙을 하지 않거나, 승낙 이후라도 이용의 제한 또는 이용계약의 해지 등의 조치를 취할 수 있습니다.
① “개발팀”이 정한 서비스 제공환경이 아니거나 기술상 서비스 제공이 불가능한 경우
② 가입신청자가 신청시 제공한 정보에 허위, 누락이나 오류가 있거나, “개발팀”이 요구하는 기준을 충족하지 못하는 경우
③ 신청 명의가 가입신청자 본인의 명의가 아닌 경우
④ 기타 가입신청자의 귀책사유로 인하여 승낙이 불가능하거나 해당 가입신청이 법령, 본 약관 및 기타 개발팀이 정한 제반 사항에 배치되는 경우

“개발팀”의 해제, 해지 및 이용제한에 대하여 “회원”은 “개발팀”이 정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가 정당하다고 “개발팀”이 인정하는 경우, “개발팀”은 즉시 “서비스”의 이용을 재개합니다.
06. “개발팀”은 “회원”에게 “개발팀”의 “서비스”에 대한 다양하고 유익한 정보를 "서비스" 화면, 홈페이지, LMS/SMS, 알림 메시지(Push Notification), 이메일등을 통하여 제공할 수 있습니다. 단 회원이 위 열거한 정보제공 방법 중 그 수신방법을 거부하는 의사표시를 한 경우 예외로 합니다.`}
        </Text>
        <Text style={styles.txtHeader}>
          제 6조 (개발팀의 이용계약 해지 및 제한)
        </Text>
        <Text style={styles.txtBody}>
          {`
1. “개발팀”은 다음의 경우 사전통보 없이 해당 “회원”과의 이용계약을 해지하여 영구적으로 “회원” 자격을 상실시킬 수 있습니다. 이 경우 재가입을 막을 수 있습니다.
	①“회원”이 사망한 경우
	②타인의 개인정보 또는 모바일 기기를 사용한 경우
	③불법적 홍보행위, 직거래 행위, 재판매 목적의 거래행위 등을 하다 적발되는 경우
	④다른 “회원”의 서비스 이용을 방해하는 등 전자거래질서를 위	협하는 경우
	⑤서비스 내외에서 “개발팀”, 운영자, 임직원 등을 사칭하는 경우
	⑥무단으로 “개발팀”의 클라이언트 프로그램을 변경하거나 서버를 해킹하는등 시스템을 위협한 경우
	⑦허위사실 유포, 위계기타 방법으로 “개발팀”의 명예 또는 신용을 훼손하거나 업무를 방해한 경우
	⑧서비스에 관한 스팸성 홍보 활동을 하는 경우
	⑨기타 본 약관상의 의무 또는 법령에 위반되는 행위를 한 경우
	⑩복수의 회원들에게 다수의 신고를 받은 경우
	⑪개발팀이 판단하기에 규정을 악용하는 경우

02.“개발팀”은 위의 사유가 있는 경우 계약해지 및 자격상실 대신 “서비스” 이용의 제한을 가할 수 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 7조 (회원의 해제 및 해지)</Text>
        <Text style={styles.txtBody}>
          {`
1. "회원"은 "서비스" 이용계약을 해지(이하"회원탈퇴")할 수 있습니다. "회원"이 "회원탈퇴"를 하기 위해서는 "회원" 서비스 페이지상의 메뉴를 이용해 "회원탈퇴" 신청할 수 있으며, 탈퇴 완료 시 "회원"의 이용 정보(프로필 정보, 단체습관 모임 및 개인습관 참여 이력 등)는 모두 삭제되어 복구 및 이용이 불가능합니다.
2. "회원"이 "회원탈퇴"를 신청한 경우 "개발팀"은 "회원" 본인 여부를 확인할 수 있으며, 해당 "회원"이 본인으로 확인되는 경우 "회원"의 신청에 따른 조치를 취합니다.`}
        </Text>
        <Text style={styles.txtHeader}>제 8조 (회원의 계정)</Text>
        <Text style={styles.txtBody}>
          {`1. “회원”이 “서비스”를 이용하려면 서비스 계정(이하 “계정”이라고 합니다)을 개설하여야 하며, “계정” 개설 시 정확하고 완전한 정보를 제공하고, 정보에 변동이 있는 경우 이를 업데이트 해야 합니다.
2. “개발팀”은 부정한 방법으로 무분별하게 계정이 생성되는 것을 막기 위해 이메일 인증 등을 제공합니다. 계정 정보는 “서비스” 내 “회원” 본인을 제외한 타 회원에게 노출되지 않습니다.
3. “회원”은 “서비스” 내 마이페이지 화면을 통하여 본인의 개인정보를 일부 열람하고 수정할 수 있습니다.
4. “개발팀”은 다음의 사항을 금지합니다.
①타인의 이름을 사용자의 이름으로 선택하거나 사용하여 그 사람을 가장하는 행위(동명이인의 경우 제외)
②본인 이외의 사람 또는 단체의 이름을 적절한 허가 없이 사용하여 당사자의 권리를 침해하는 행위
③불쾌감을 주거나 저속, 외설적인 이름을 사용하여 타인에게 불쾌감을 주는 행위
05. “계정”에 대한 관리책임은 “회원” 본인에게 있으며, “회원”은 제3자에게 “계정”에 관한 정보를 알려주거나 이용하게 해서는 안됩니다.
06. “회원”이 자신의 “계정”을 도난당하거나 제3자가 사용하고 있음을 인지한 경우 즉시 “개발팀”에 통지하고 “개발팀”의 안내를 따라야합니다. “개발팀”에 통지하지 않거나, 안내에 따르지 않아 발생한 불이익에 대하여 “개발팀”은 책임지지 않습니다.
07. “개발팀”은 “계정”의 무단 도용으로 인하여 “회원”이 입은 손실에 대하여 책임을 지지 않습니다. 그러나 “회원”은 “계정”의 무단 도용으로 인해 “개발팀” 또는 타인이 입은 손해를 입게 된 경우 그 손해에 대해 책임을 질 수 있습니다. 단, “회원”에게 과실이 없는 때에는 그러하지 아니합니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 9조 (서비스의 내용 및 제공)</Text>
        <Text style={styles.txtBody}>
          {`
1. "Grabit(그래빗)"는 "회원”이 “단체습관”의 모임 개설 및 참여 또는 “개인습관”에 대해 기록하는 서비스 및 관련한 기타 서비스를 제공하는 서비스입니다.
2. "회원"은 활성화된 습관 달성의 버튼을 클릭함에 따라 "포도알"을 지급 받을 수 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 10조 (서비스의 제공 및 중단)</Text>
        <Text style={styles.txtBody}>
          {`
1. "서비스"는 "개발팀"의 영업방침에 따라 정해진 시간 동안 제공합니다. (별도의 안내가 없는 경우 연중무휴 1일 24시간 제공하는 것을 원칙으로 합니다) 단, 관련법령에서 정하는 바에 따라 "서비스" 제공시간 등에 제한을 두어야 하는 경우, "개발팀"은 별도의 사전 공지 없이 "서비스"의 제공시간을 제한 또는 변경할 수 있으며 이에 대하여 어떠한 책임도 부담하지 않습니다.
2. 제1항에도 불구하고, 아래 각 호의 어느 하나에 해당하는 경우에는 일정한 시간 동안 "서비스"가 제공되지 아니할 수 있으며, 해당 시간 동안 "개발팀"은 "서비스"를 제공할 의무가 없습니다.
• 컴퓨터 등 정보통신설비의 보수점검, 교체, 정기점검 또는 "서비스"의 내용 수정을 위하여 필요한 경우
• 해킹 등의 전자적 침해사고, 통신사고, "회원"들의 비정상적인 이용행태, 미처 예상하지 못한 "서비스"의 불안정성에 대응하기 위하여 필요한 경우
• 관련 법령에서 특정 시간 또는 방법으로 "서비스" 제공을 금지하는 경우
• 천재지변, 비상사태, 정전, "서비스" 설비의 장애 또는 "서비스" 이용의 폭주 등으로 정상적인 "서비스" 제공이 불가능할 경우
• "개발팀"의 분할, 합병, 영업양도, 영업의 폐지, 당해 "서비스"의 수익 악화 등 "개발팀"의 경영상 중대한 필요에 의한 경우
03. "개발팀"은 무료로 제공되는 "서비스"의 일부 또는 전부를 "개발팀"의 정책 및 운영 필요성에 의하여 수정, 중단, 변경할 수 있습니다. 이에 대하여 관계 법령에 특별한 규정이 없는 한 "개발팀"은 "회원"에게 기대수익의 상실, "개발팀"이 직접 제공하지 않은 수익의 상실 또는 기타 무료로 제공된 "서비스"의 수정, 중단, 변경 등으로 발생하는 손해에 대하여 별도의 보상을 하지 않습니다.`}
        </Text>
        <Text style={styles.txtHeader}>제 11조 (회원정보의 제공 및 변경)</Text>
        <Text style={styles.txtBody}>
          {`
1. "회원"은 본 약관에 의하여 "개발팀"에 정보를 제공하여야 하는 경우에는 진실된 정보를 제공하여야 하며, 허위의 정보 제공으로 인하여 발생한 불이익에 대해서는 보호받지 못합니다.
2. "회원"은 이용신청 시 기재한 사항이 변경되었을 경우, 즉시 해당 사항을 수정해야 합니다. 지체 없이 "서비스" 내 마이페이지나 "개발팀"의 고객센터 등을 통하여 변경된 정보로 수정하여야 합니다. 변경된 사항을 "개발팀"에 알리지 않아 발생한 불이익에 대해서 "개발팀"은 책임을 지지 않습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 12조 (개인정보의 보호 및 관리)</Text>
        <Text style={styles.txtBody}>
          {`
1. "개발팀"은 관계 법령이 정하는 바에 따라 "회원"의 개인정보를 보호하기 위해 노력합니다. "회원" 개인정보의 보호 및 사용에 대해서는 관계 법령 및 "개발팀"이 별도로 고지하는 개인정보취급방침이 적용됩니다.
2. "개발팀"은 "회원"의 귀책사유로 인하여 노출된 "회원"의 계정정보를 포함한 모든 정보에 대해서 일체의 책임을 지지 않습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 13조(회원의 권리 및 의무)</Text>
        <Text style={styles.txtBody}>
          {`
1. "회원" 은 "개발팀"이 서비스를 통해 제공하는 콘텐츠에 대하여 어떠한 권리도 취득하지 않습니다.
2. "회원" 은 "개발팀"의 동의 없이 콘텐츠를 서비스를 제공받는 용도 외로 이용하여서는 아니 되며, 특히 아래의 행위를 할 경우 그에 대한 모든 민형사상 책임을 지게 될 수 있습니다.
①콘텐츠를 임의로 별도의 동영상 파일 등으로 제작하는 행위
②콘텐츠를 임의로 인터넷에 게시하는 행위
③콘텐츠를 임의로 타인에게 제공하는 행위
④기타 콘텐츠에 대한 모든 저작권 침해 행위
⑤"개발팀"의 사전승낙 없이 콘텐츠를 이용한 영리활동을 하는 행위
03."회원"은 "서비스"의 서버와 네트워크 시스템에 허락되지 않은 방식으로 접근하는 일체의 행위(예를 들면 자동화 프로그램을 사용하여 서비스 서버와 네트워크에 접근하거나 콘텐츠 임의적 수집을 위해 서비스 시스템에 접근하는 행위) 또는 서비스의 제공을 방해하는 행위를 해서는 안됩니다.
04."회원"은 다음과 같은 행위를 해서는 안됩니다.
①"개발팀"에 허위정보를 제공하거나 타인의 정보를 도용하는 행위
②"개발팀"과 타인의 저작권 등 지식재산권에 대한 침해 행위
③다른 "회원"의 개인정보를 수집하거나 명예를 훼손하는 행위
④"개발팀"의 사전승낙 없이 "서비스"를 이용한 영리활동을 하는 행위
⑤"서비스"의 기술적 보호조치를 무력화하거나 정상적인 운영을 방해할 목적으로 "개발팀"이 제공 또는 승인하지 아니한 컴퓨터 프로그램이나 기기 또는 장치를 이용하는 행위
⑥다량의 정보를 전송하거나 동일한 또는 유사한 내용의 정보를 반복적으로 게시하여 "서비스"의 안정적인 운영을 방해하는 행위
⑦정보통신설비의 오작동이나 정보 등의 파괴를 유발하는 컴퓨터 바이러스 등을 유포하는 행위
⑧외설, 폭력적인 정보 등을 노출하는 행위
⑨범죄와 관련이 있다고 판단되는 활동을 하는 행위
⑩「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 에서 금지하는 행위 등 기타 불법적이거나 부당한 행위`}
        </Text>
        <Text style={styles.txtHeader}> 제 14조 (개발팀의 권리 및 의무)</Text>
        <Text style={styles.txtBody}>
          {`
1. "개발팀"은 관련 법령을 준수하고, 본 약관이 정하는 권리의 행사와 의무의 이행을 신의에 따라 성실하게 합니다.
2. ”개발팀”은 회원이 안전하게 서비스를 이용할 수 있도록 개인정보 보호를 위해 보안시스템을 갖추어야 하며, 개인정보취급방침을 공시하고 준수합니다.
3. "개발팀"은 본 약관 및 개인정보취급방침에서 정한 경우를 제외하고는 "회원"의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.
4. "개발팀"은 "서비스" 이용과 관련한 "회원"의 의견이나 불만사항 등을 경청하며, 정당하다고 인정할 경우 이를 처리하여야 합니다. 처리한 결과는 “서비스” 화면 또는 E-mail을 통해 “회원”에게 통지합니다.
5. ”개발팀”은 서비스의 개선, 고객 만족도 향상 등의 목적으로 회원의 사전 동의 없이 회원 전체 또는 일부의 개인 정보에 관한 통계 자료를 작성하여 이를 사용할 수 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 17조 (메모)</Text>
        <Text style={styles.txtBody}>
          {`
1. "메모"는 "회원"이 서비스를 이용하면서 단체습관 및 개인습관 의 과정에서 서비스 내에 업로드한 텍스트 내용물 일체를 의미합니다.
2. "메모"에는 아래의 내용이 포함되어서는 아니 됩니다.
①타인의 명예를 훼손하거나 근거 없이 비방하는 내용
②욕설, 음란/외설적 내용, 폭력적인 내용 등 미풍양속에 반하는 내용
③저작권을 포함한 타인의 지식재산권을 침해하는 내용
④근거 없이 공포심이나 불안감을 지속적으로 유발하는 내용
⑤선량한 풍속 기타 사회질서에 반하는 내용
⑥민감한 개인정보를 포함한 내용
03. "회원"이 제2항을 위반하는 경우, 아래와 같은 조치가 취해질 수 있습니다.
04. 제2항의 위반 사유가 확인되었거나 일정 횟수 이상 신고를 받은 “메모”의 내용에 대해서는 삭제 조치(임시 삭제를 포함)가 취해질 수 있습니다. 단, 해당 콘텐츠를 작성한 회원은 자신의 콘텐츠가 제2항의 위반 사유에 해당하지 않음을 소명하여 해당 조치를 해제할 수 있습니다.
05. “개발팀”은 제2항의 위반 사유가 확인되었거나 일정 횟수 이상 신고를 받은 “회원”에 대하여 “서비스”의 이용을 제한할 수 있으며 "계정"을 중지시키고 이용계약을 해지할 수 있습니다.
06. "개발팀"은 “회원”의 "메모"에 대해서는 적법성, 정확성, 진실성 등을 보증하지 않습니다.
07."개발팀"은 서비스의 홍보 내지 개선을 위해 "메모"를 사용할 수 있으며, 이러한 목적 범위 내에서 “메모”에 대`}
        </Text>
        <Text style={styles.txtHeader}>
          제 18조 (저작권의 귀속 및 이용제한)
        </Text>
        <Text style={styles.txtBody}>
          {`
1. "개발팀"의 상표, 로고, 서비스 및 광고 등 "개발팀"이 제작, 제공하는 것에 대한 지식재산권 등의 권리는 "개발팀"에 귀속합니다.
2. “개발팀”은 “회원”이 서비스 내에 게시한 게시물이 타인의 저작권 등 지적 재산권을 침해하더라도, 이에 대한 민ㆍ형사상의 책임을 지지 않습니다. 만약 “회원”이 타인의 저작권 등 지적 재산권을 침해하여 “개발팀”이 타인으로부터 손해배상 청구 등 이의제기를 받는다면 “회원”은 “개발팀”의 면책을 위하여 노력해야 하며, “개발팀”이 면책되지 못할 때에는 개발팀에 발생한 모든 손해를 부담해야 합니다.
3. “개발팀”은 게시한 “회원”의 동의 없이 게시물을 서비스 내 이용 외에 다른 목적으로 사용할 수 없습니다. 단, 개발팀의 서비스를 홍보할 목적으로 미디어, 통신사 등에 이용자의 게시물 내용을 보도, 방영하게 할 때에는 회원에게 미리 동의를 구합니다.
4. “회원”은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를 영리 목적으로 이용하거나 제3자에게 이용하게 할 수 없으며, 게시물에 대한 저작권 침해는 관계 법령의 적용을 받습니다.
5. “개발팀”은 “회원”이 탈퇴할 시 개인정보를 제외한 “회원”의 게시물을 사용할 수 있으며, “회원”이 탈퇴를 하더라도 일부 콘텐츠는 삭제가 불가합니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 19조 (개발팀의 면책)</Text>
        <Text style={styles.txtBody}>
          {`
1. “개발팀”은 전시, 사변, 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 기술적 결함 기타 불가항력적 사유로 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.
2. “개발팀”은 인터넷 이용자 또는 “회원”의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
3. “개발팀”은 “개발팀”이 제공하는 거래서비스를 통하지 아니하고 이루어지는 개별 계약과 “회원” 본인이 제공한 신상등록정보의 오류, 미비 등으로 인하여 발생하는 손해에 대해서는 책임을 지지 않습니다.
4. “개발팀”은 “회원”이 다른 “회원”에 의해 게재된 정보, 자료, 사실의 정확성 등을 신뢰함으로써 입은 손해에 대하여 책임을 지지 않습니다.
5. "개발팀"은 "회원"의 모바일 네트워크 또는 모바일 디바이스 환경으로 인하여 발생하는 제반 문제 또는 "개발팀"의 고의 또는 중대한 과실이 없는 네트워크 환경으로 인하여 발생하는 문제에 대해서 책임이 면제됩니다.
6. “개발팀”은 “회원”이 “개발팀”이 제공하는 정보에 관하여 그 수신을 거부하여 발생하는 손해에 대해서는 책임을 지지 않습니다.
7. “개발팀”은 “회원”이 개설한 단체습관 모임에서 발생하는 법적 분쟁 및 손해에 대해서는 책임지지 않습니다. 단체습관 모임 개설의 모든 책임은 “방장” 에게 있으며, 사용하는 텍스트 등 저작물에 대한 저작권 및 공약 이행에 관한 책임 역시 개설자에게 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 20조 (광고의 게재)</Text>
        <Text style={styles.txtBody}>
          {`
1. 개발팀"은 "서비스"의 운영과 관련하여 "서비스" 화면, 홈페이지, LMS/SMS, 알림 메시지(Push Notification), 이메일 등을 통하여 광고를 제공할 수 있습니다.
2. “개발팀”은 “서비스” 내 배너, PPL 등을 통하여 광고를 게재할 수 있습니다.
3. 해당 광고는 제3자가 제공하는 영역, 페이지와 연결될 수 있으며, 제3자가 제공하는 페이지로 연결될 경우 해당 페이지는 "개발팀"의 "서비스" 영역이 아니므로 "개발팀"은 해당 페이지의 신뢰성, 안정성 등을 보장하지 않으며 그로 인한 "회원"의 손해에 대하여 책임을 지지 않습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 21조 (마케팅 알림 동의)</Text>
        <Text style={styles.txtBody}>
          {`
1. Grabit(그래빗) 앱의 푸시 알림을 통해 Grabit(그래빗)과 제휴사의 상품, 서비스, 이벤트, 맞춤 혜택 및 서비스 정보 등의 안내 등 마케팅 정보를 수신하는 것에 동의합니다.
2. 본 동의는 고객님이 Grabit(그래빗) 앱을 설치, 이용하시는 동안 유효합니다. 고객은 동의를 거부할 권리가 있으나, 상기 동의사항은 상거래관계의 설정, 유지에 필수적이거나, 상거래 관계에 따라 귀하에게 제공되는 서비스와 직접적으로 관련되어 있는 것으로서 위 사항에 동의하지 않으실 경우 거래관계의 설정 또는 유지가 불가능할 수 있습니다.
3. 동의하지 않으신 경우에도, 마케팅 정보 외에 고객님께 알려드릴 필요가 있는 중요한 내용들은 전송될 수 있습니다.`}
        </Text>
        <Text style={styles.txtHeader}> 제 22조 (이용자 이용 제한)</Text>
        <Text style={styles.txtBody}>
          {`
1. 개발팀은 아래 사항에 포함하는 이용자들에 대해 사용을 무기한 정지할 수 있습니다.
①다른 이용자들로부터 복수의 신고를 받은 경우
②개발팀에 직접적, 간접적으로 피해를 준 경우
③개발팀이 악성유저라고 판단하는 경우
④개발팀의 규정을 악용하고 있다고 개발팀이 판단하는 경우
⑤본인 명의의 핸드폰 번호가 아닌 번호를 사용하는 경우
⑥본인 명의의 이메일이 아닌 이메일을 사용하는 경우`}
        </Text>
        <Text style={styles.txtHeader}> 제 23조 (준거법 및 합의 관할)</Text>
        <Text style={styles.txtBody}>
          {`
1. "개발팀"과 "회원" 간에 제기된 법적 분쟁은 대한민국 법을 준거법으로 합니다.
2. "개발팀”과 회원간 발생한 분쟁에 관한 소송은 제소 당시의 회원의 주소에 의하고 주소가 없는 경우 “거소를 관할하는 지방법원의 전속관할로 합니다. 단 제소 당시 회원의 주소 또는 거소가 명확하지 아니한 경우의 관할법원은 민사소송법에 따라 정합니다.
3. 해외에 주소나 거소가 있는 회원의 경우 개발팀과 회원간 발생한 분쟁에 관한 소송은 전항에도 불구하고 대한민국 서울중앙지방법원을 관할 법원으로 합니다.`}
        </Text>
        <Text style={styles.txtHeader}>
          {`공고일자 : 2021년 12월 20일
 시행일자 : 2021년 12월 20일

`}
        </Text>
      </ScrollView>
    </View>
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
        <Signout3 setApp={props.setApp} setVisible={setVisible} id={props.id}/>
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

  useEffect(() => {
    fetch(`http://193.123.253.133:5000/users/${props.id}/profile`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <ScrollView style={styles.article}>
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
        <Text style={styles.profileName}>성장하는 {props.name}님</Text>
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
    height: 500,
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
  profile: {},
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
    elevation: 5,
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
  officialDiv: {
    paddingTop: 40,
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
    backgroundColor: 'white',
    height: 550,
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
