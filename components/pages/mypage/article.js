import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

function ViewInvite(props){
    return (
        <View style={styles.viewInviteDiv}>
            <Text style={styles.inviteTitle}>친구 초대</Text>
            <View style={{flexDirection:'row', justifyContent: 'center'}}>
            <View>
                <Image style={styles.inviteIcon} source={require("../../../image/kakao.png")} />
                <Text style={styles.inviteTxt}>카카오톡</Text>
            </View>
            <View>
                <Image style={styles.inviteIcon} source={require("../../../image/link.png")} />
                <Text style={styles.inviteTxt} >링크 복사</Text>
            </View>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={()=> props.setViewInvite(false)}>
                <Text style={styles.inviteCancle}>취소</Text>
            </TouchableOpacity>
        </View>
    )
}


function Icon(props){
    const [icon, setIcon]= useState(1);
    const [hobby, setHobby] = useState(false);

    return (
        <View style={styles.subDiv}>
            <Text>프로필로 사용할</Text>
            <Text>아이콘을 선택해 주세요!</Text>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => setIcon(1)}>
                    <Image style={icon == 1 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji1.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(2)}>
                    <Image style={icon == 2 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji2.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(3)}>
                    <Image style={icon == 3 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji3.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => setIcon(4)}>
                    <Image style={icon == 4 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji4.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(5)}>
                    <Image style={icon == 5 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji5.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(6)}>
                    <Image style={icon == 6 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji6.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => setIcon(7)}>
                    <Image style={icon == 7 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji7.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(8)}>
                    <Image style={icon == 8 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji8.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(9)}>
                    <Image style={icon == 9 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji9.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => setIcon(10)}>
                    <Image style={icon == 10 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji10.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(11)}>
                    <Image style={icon == 11 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji11.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIcon(12)}>
                    <Image style={icon == 12 ? styles.iconstyle : styles.nonicon} source={require("../../../image/emoji12.png")}/>
                </TouchableOpacity>
            </View> 
            <TouchableOpacity onPress={() => props.setProfileEdit(false)} style={styles.purpleBtn}>
                <Text style={styles.purpleBtnTxt}>결정하기</Text>
            </TouchableOpacity>
        </View>
    )
}

function ProfileEdit(props){
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [icon, setIcon] = useState(false)

    return (
        <View style={styles.subDiv}>
            <Text style={{margin: 10}}>이름</Text>
            <TextInput
                style={styles.textName}
                value={name}
                onChangeText={(text) => setContent(setName)}/>
            <Text style={{margin: 10}}>소개글</Text>
            <TextInput
                style={styles.textContent}
                value={content}
                multiline={true}
                onChangeText={(text) => setContent(text)}/>
            <TouchableOpacity activeOpacity={1} onPress={()=> setIcon(true)}>
                <Text style={styles.editBtn}>수정하기</Text>
            </TouchableOpacity>
            {icon ? <Icon setProfileEdit={props.setProfileEdit} /> : undefined}
        </View>
    )
}

function OfficialList(props){
    const [arrow, setArrow] = useState(false);
    return (
        <>
        <TouchableOpacity activeOpacity={1} style={styles.officiallistone} onPress={() => arrow ? setArrow(false) : setArrow(true)}>
            <Text style={styles.officialdate}>{props.date}</Text>
            <Text style={styles.officialtitle}>{props.title}</Text>
            <View style={styles.officialarrow}>
                <Image source={arrow
                    ? require('../../../image/topArrow.png')
                    : require('../../../image/bottomArrow.png')} />
            </View>
        </TouchableOpacity>
        <View style={arrow ? styles.officialContent : {display: 'none'}}>
            <Text style={styles.officialtitle2}>{props.title}</Text>
            <Text>{props.content}</Text>
        </View>
        </>
    )
}

function Official(){
    const [official, setOfficial] = useState(undefined);
    fetch('http://193.123.253.133:5000/board/notices', {
        method: 'GET',
    }).then(response => response.json())
    .then(response => {
       thisOfficial = response.map((el, key) => {
        <OfficialList date={el.date} title={el.subject} content={el.content} />
    })
       setOfficial(official);
    })
    return (
        <View style={[styles.subDiv, styles.officialDiv]}>
            {official}
            <OfficialList date={"09.11"} title={"공지사항 제목"} content={"공지사항 내용을 입력해 주세요. 공지사항 내용을 입력해 주세요. 공지사항 내용을 입력해 주세요. 공지사항 내용을 입력해 주세요. 공지사항 내용을 입력해 주세요."} />
            
        </View>
    )
}
function Service(){
    return (
        <View style={[styles.subDiv]}>
            <Image style={{marginHorizontal:160, marginTop: 120, marginBottom: 20}} source={require("../../../image/question_icon.png")} />
            <Text style={{color:'black', textAlign:'center'}}>궁금한 점이 있으신가요?</Text>
            <TouchableOpacity onPress={() => console.log("..")} style={[styles.prevBtn3, {borderColor: "#7D63EB"}]}>
                <Text style={styles.toHomeBtn}>이메일 문의하기</Text>
                <Image source={require("../../../image/nextArrow2.png")} style={styles.prevArrow} />
            </TouchableOpacity>
        </View>
    )
}

function Logout2(props){
    return (
        <View style={[styles.logDiv]}>
        <Text style={{textAlign:'center'}}>로그아웃하시겠습니까?</Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.logSubDiv} onPress={() => props.setApp("login")}>
                <Text style={{textAlign:'center'}}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logSubDiv} onPress={() => props.setLogout(false)}>
                <Text style={{textAlign:'center'}}>취소</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

function Signout2(props){
    return (
        <View style={[styles.logDiv]}>
        <Text style={{textAlign:'center'}}>탈퇴하시겠습니까?</Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.logSubDiv} onPress={() => props.setSignout3(true)}>
                <Text style={{textAlign:'center'}}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logSubDiv} onPress={() => props.setSignout(false)}>
                <Text style={{textAlign:'center'}}>취소</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

function Signout3(props){
    return (
        <View style={[styles.subDiv]}>
            <Image source={require("../../../image/signout.png")} />
            <Text>탈퇴가 완료되었습니다.</Text>
            <TouchableOpacity style={[styles.prevBtn4, {borderColor: "#7D63EB"}]}>
                <Text style={styles.toHomeBtn}>홈으로 가기</Text>
                <Image source={require("../../../image/nextArrow2.png")} style={styles.prevArrow3} />
            </TouchableOpacity>
        </View>
    )
}

function Signout(props){
    const [signout, setSignout] = useState(false);
    const [signout3, setSignout3] = useState(false);

    function pleaseOut(){
        fetch('http://193.123.253.133:5000/users/' + props.email, {
            method: 'DELETE',
        }).then(response => response.json())
        .then(response => {
           setSignout(true)
        })
        // setSignout(true)
    }
    return (
        <View style={[styles.subDiv]}>
            <Image source={require("../../../image/signout.png")} />
            <Text>그래빗에서 탈퇴하면</Text>
            <Text>참여했던 습관들에서 퇴장됩니다</Text>
            <Text>그래도 탈퇴하시겠어요?</Text>
            <TouchableOpacity onPress={() => props.setSignout(false)} style={[styles.prevBtn4, {borderColor: "#7D63EB"}]}>
                <Text style={styles.toHomeBtn}>회원 유지하기</Text>
                <Image source={require("../../../image/nextArrow2.png")} style={styles.prevArrow3} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pleaseOut()} style={styles.logoutBtn}>
                <Text style={styles.logoutTxt}>탈퇴하기</Text>
                <Image source={require("../../../image/nextArrow2.png")} style={styles.prevArrow2} />
            </TouchableOpacity>
            {signout ? <Signout2 setSignout={setSignout} setSignout3={setSignout3} /> : undefined}
            {signout3 ? <Signout3 /> : undefined}
        </View>
    )
}

function Logout(props){
    const [logout, setLogout] = useState(false);
    const [signout, setSignout] = useState(false);
    return(
        <View style={[styles.subDiv]}>
            <TouchableOpacity onPress={()=> setLogout(true)} style={[styles.logoutBtn, {marginTop: 180}]}>
                <Text style={styles.logoutTxt}>로그아웃하기</Text>
                <Image source={require("../../../image/nextArrow2.png")} style={styles.prevArrow2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSignout(true)} style={styles.logoutBtn}>
                <Text style={styles.logoutTxt}>회원 탈퇴하기</Text>
                <Image source={require("../../../image/nextArrow2.png")} style={styles.prevArrow2} />
            </TouchableOpacity>
            {logout ? <Logout2 setLogout={setLogout} setApp={props.setApp} /> : undefined}
            {signout ? <Signout setSignout={setSignout} email={props.email} /> : undefined}
        </View>
    )
}

export default function Footer(props){
    const [viewInvite, setViewInvite] = useState(false);
    return (
        <ScrollView style={styles.article}>
            <View style={{justifyContent:'center',alignItems: 'center', paddingTop: 10}}>
                <TouchableOpacity onPress={() => props.setProfileEdit(true)} activeOpacity={1} style={styles.profileEdit} >
                    <Image source={require("../../../image/profileEdit.png")} />
                </TouchableOpacity>
                <Image style={styles.profile} source={require("../../../image/userbaseIcon.png")} />
                <Text style={styles.profileName}>성장하는 김OO님</Text>
                <Text style={styles.profile}>본인을 소개해주세요</Text>
            </View>
            <View style={styles.challengeList}>
                <View style={styles.challenges}>
                    <View style={styles.challengeName}>
                        <Image style={styles.grape} source={require("../../../image/together_grapes.png")} />
                        <Text>같이</Text>
                    </View>
                    <Text style={styles.challengNum}>3</Text>
                </View>
                <View style={styles.challengestwo}>
                    <View style={styles.challengeName}>
                        <Image style={styles.grape} source={require("../../../image/alone_grapes.png")} />
                        <Text>혼자</Text>
                    </View>
                    <Text style={styles.challengNum}>2</Text>
                </View>
                <View style={styles.challenges}>
                    <View style={styles.challengeName}>
                        <Text>완료</Text>
                     </View>
                    <Text style={styles.challengNum}>5</Text>
                </View>
            </View>
            <View style={styles.mylist}>
                <TouchableOpacity activeOpacity={1} onPress={() => setViewInvite(true)} style={styles.listone}>
                    <Text>친구 초대</Text>
                    <Image style={styles.rightArrow} source={require("../../../image/rightArrow.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.setOfficial(true)} style={styles.listone}>
                    <Text>공지사항</Text>
                    <Image style={styles.rightArrow} source={require("../../../image/rightArrow.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.setService(true)} style={styles.listone}>
                    <Text>고객센터</Text>
                    <Image style={styles.rightArrow} source={require("../../../image/rightArrow.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => props.setLogout(true)} style={styles.listtwo}>
                    <Text>로그아웃/회원탈퇴</Text>
                    <Image style={styles.rightArrow} source={require("../../../image/rightArrow.png")} />
                </TouchableOpacity>
            </View>
            {viewInvite ? <ViewInvite setViewInvite={setViewInvite} />: undefined}
            {props.profileEdit ? <ProfileEdit setProfileEdit={props.setProfileEdit} />: undefined}
            {props.official ? <Official />: undefined}
            {props.service ? <Service />: undefined}
            {props.logout ? <Logout setApp={props.setApp} email={props.email} />: undefined}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    article:{
        height: 1500,
        backgroundColor: 'white'
    },
    subDiv:{
        height: 1500,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 20,
        width: '100%'
    },
    profileName:{
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
    },
    profile:{
    },
    profileEdit:{
        position: 'absolute',
        right: 10,
        top: 18
    },
    challenges:{
        width: 120,
        padding: 10,
        marginTop: 15,
        marginBottom: 15
    },
    challengestwo:{
        width: 120,
        padding: 10,
        borderColor: '#cec6f2',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: 15,
        marginBottom: 15
    },
    challengeList:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 50,
        // padding: 10,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 10,
        zIndex: 1,
        borderColor: '#7d63eb',
    },
    challengeName:{
        justifyContent: 'center',
        flexDirection: 'row',
    },
    grape:{
        width: 18,
        height: 'auto'
    },
    challengNum:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        color: 'black'
    },
    mylist:{
        backgroundColor: "#fafafa",

    },
    listone:{
        marginTop: 10,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingLeft: 8,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        flexDirection: 'row',
    },
    listtwo:{
        marginTop: 10,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingLeft: 8,
        paddingBottom: 20,
        flexDirection: 'row',
    },
    rightArrow:{
        marginLeft: 'auto',
        marginRight: 10
    },
    viewInviteDiv:{
        position: 'absolute',
        zIndex: 20,
        top: 90,
        left: 50,
        width: 300,
        backgroundColor: 'white',
        elevation: 4,
        padding: 5,
        borderRadius: 20
    },
    inviteTitle:{
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        color: 'black',
        marginTop: 20,
        marginBottom: 10
    },
    inviteIcon:{
        width: 100,
        height: 100
    },
    inviteTxt:{
        textAlign:'center',
        color:'black'
    },
    inviteCancle:{
        width: '94%',
        textAlign: 'center',
        backgroundColor: '#D6D6D6',
        borderRadius: 10,
        height: 40,
        padding: 10,
        fontWeight: '700',
        color: 'white',
        margin: 10
    },
    textName:{
        borderWidth: 1,
        margin: 10,
        marginTop: 0,
    },
    textContent:{
        borderWidth: 1,
        margin: 10,
        marginTop: 0,
        height: 150,
        textAlignVertical:"top"
    },
    editBtn:{
        width: '80%',
        textAlign: 'center',
        marginHorizontal: '10%',
        borderRadius: 20,
        backgroundColor: '#7D63EB',
        color: 'white',
        paddingVertical: 10,
        marginTop: 120
    },
    officialDiv:{
        paddingTop: 40
    },
    officiallistone:{
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        paddingVertical: 15,
        padding: 10,
        flexDirection: 'row'
    },
    officialarrow:{
        paddingTop: 5,
        marginLeft: 'auto',
    },
    officialdate:{
        marginTop: 2
    },
    officialtitle:{
        marginLeft: 10,
        fontSize: 17,
        color: 'black'
    },
    officialtitle2:{
        color: 'black',
        fontSize: 17,
        paddingBottom: 10
    },
    officialContent:{
        display: 'flex',
        marginHorizontal: 10, 
        paddingTop: 10, 
        paddingBottom: 20, 
        paddingHorizontal: 10, 
        backgroundColor: '#F5F5F5B2'
    },
    prevBtn3:{
        position: 'absolute',
        borderColor: '#96E471',
        right: 80,
        bottom: 150,
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        flexDirection: 'row'
    },
    prevBtn4:{
        borderColor: '#96E471',
        borderWidth: 2,
        borderRadius: 50,
        padding: 15,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 60
    },
    prevArrow3:{
        marginLeft: 55
    },
    toHomeBtn:{
        fontWeight: '700',
        color: 'black',
        paddingRight: 70,
        paddingLeft: 10
    },
    logoutBtn:{
        flexDirection: 'row',
        borderRadius: 35,
        backgroundColor: '#EFEFEF',
        marginHorizontal: 60,
        marginVertical: 5,
        padding: 20
    },
    prevArrow2:{
        position: 'absolute',
        right: 15,
        top: 18
    },
    logoutTxt:{
        marginLeft: 5,
        color: 'black'
    },
    logDiv:{
        backgroundColor: 'white',
        position: 'absolute',
        width: 252,
        marginHorizontal: 70,
        marginTop: 170,
        paddingTop: 30,
        borderColor: 'black',
        borderWidth: 1,
    },
    logSubDiv:{
        width: 125,
        backgroundColor: '#F0F0F0',
        marginTop: 30,
        padding: 10,
    },
    iconView:{
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 40
    },
    iconstyle:{
        margin: 20
    },
    nonicon:{
        margin: 20,
        opacity: 0.5
    },
});
