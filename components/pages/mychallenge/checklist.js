import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PerImage from '../perImage';

function writeMemory(checked, setCheck){
  checked ? setCheck(false) : setCheck(true);
}

function Check({checked, setCheck, title, isTogether, done, whole, week, challenge, viewEachHabit}){
    return (
        <View style={whole == 0 ? [styles.prevCheck, styles.noneCheck] : (checked ? (isTogether ? [styles.togetherCheck, styles.noneCheck] : [styles.aloneCheck, styles.noneCheck]) : styles.noneCheck) }>
            <View style={styles.chartView}>
              <Text style={styles.chartPst}>{week ? Math.round(done/challenge/7*100,2) : Math.round(done/challenge*100,2)}%</Text>
              <Image style={styles.chartPer} source={require("../../../image/nonO.png")} />
              <PerImage isTogether={isTogether} per={week ? Math.round(done/challenge/7*100,2) : Math.round(done/challenge*100,2)} />
            </View>
            <TouchableOpacity onPress={() => viewEachHabit(true)} style={styles.habitInfo}>
                <Text style={checked ? (isTogether ? [styles.togetherChk, styles.noneTog] 
                  : [styles.aloneChk, styles.noneTog]) : (isTogether ? [styles.togetherNoChk, styles.noneTog] 
                  : [styles.aloneNoChk , styles.noneTog]) }>
                    <Text style={{fontWeight:'900'}}>
                      {challenge}<Text>{week ? "주" : "일"}</Text> 습관</Text> | {whole}일차
                </Text>
                <Text style={checked ? {color:'white',fontWeight:'900', marginLeft: 2} : {color:'black',fontWeight:'900', marginLeft: 2}}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => writeMemory(checked, setCheck)} style={styles.checkInfo}>
              <Image source={checked ? require('../../../image/checked.png') : require('../../../image/nonChecked.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default function CheckList(props){
  
  const [ch1, setCh1] = useState(false);
  const [ch2, setCh2] = useState(false);
  const [ch3, setCh3] = useState(true);

    return (
        <View style={styles.checklist}>
          <View style={styles.selectOrder}>
            <Text style={styles.selectTxt}>많이 실천한 순</Text>
            <Image style={styles.selectArrow} source={require("../../../image/bottomArrow.png")} />
          </View>
            <ScrollView style={{height:500}}>
              <Check viewEachHabit={props.viewEachHabit} id={1} checked={ch1} setCheck={setCh1} title={"매일 아침에 일기 쓰기"} done={2} isTogether={true} whole={21} challenge={3} week={true} />
              <Check viewEachHabit={props.viewEachHabit} id={2} checked={ch2} setCheck={setCh2} title={"손톱 물어뜯지 않기"} done={1} whole={3} challenge={3} week={false} />
              <Check viewEachHabit={props.viewEachHabit} id={3} checked={ch3} setCheck={setCh3} title={"독일어 공부하기"} done={17} isTogether={true} whole={21} challenge={9} week={true} />
              <Check viewEachHabit={props.viewEachHabit} id={4} checked={false} setChk={setCh1} title={"독일어 공부하기"} done={0} isTogether={true} whole={0} challenge={3} week={false} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  checklist: {
    justifyContent: 'center',
    height: 400
  },
  chartView:{
    width: 50,
    height: 50,
    marginRight: 10,
    flex: 2
  },
  habitInfo:{
    flex: 8
  },
  selectOrder:{
    flexDirection:'row',
    marginTop: 10,
    marginBottom: 5
  },
  selectTxt:{
    marginLeft: 270
  },
  selectArrow:{
    marginTop: 5,
    marginLeft: 5
  },
  checkInfo:{
    flex: 1
  },
  chartPst:{
    textAlign: 'center',
    paddingTop: 19
  },
  noneTog:{
    borderRadius: 25,
    width: 120,
    paddingHorizontal: 7,
    paddingVertical: 2,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 8,
    fontSize: 12,
  },
  aloneNoChk:{
    borderColor: '#F1F1F1',
    borderWidth: 1,
    backgroundColor: 'white',
    color: '#96E471' 
  },
  togetherNoChk:{
    backgroundColor: '#F1F1F1',
    color: '#7D63EB'
  },
  aloneChk:{
    backgroundColor: 'white',
    color: '#71BC4E'
  },
  togetherChk:{
    backgroundColor: 'white',
    color: '#7D63EB'
  },
  chart:{
    width: 50,
    height: 50,
    borderColor: '#EDEDED',
    borderWidth: 3,
    borderRadius: 25
  },
  chartPer:{
    position:'absolute',
    right:0,
  },
  chartPer2:{
    position:'absolute',
    right:1,
  },
  prevCheck:{
    backgroundColor: '#F3F3F3'
  },
  togetherCheck: {
    backgroundColor: "#7D63EB"
  },
  aloneCheck: {
    backgroundColor: "#96E471"
  },
  noneCheck: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 12,
    paddingBottom: 18,
    borderRadius: 10,
    margin: 5,
    marginHorizontal: 10,
    //IOS
    shadowColor: "#000000", //그림자색
    shadowOpacity: 0.3,//그림자 투명도
    shadowOffset: { width: 2, height: 2 }, //그림자 위치
    //ANDROID
    elevation: 1,
  },
  daycalendar: {
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#EDEDED',
    borderWidth: 1,
  },
  detailTxt:{
    color: 'black',
    textAlign: 'right'
  },
  title:{
      fontWeight: '700',
      fontSize: 30,
      justifyContent: 'center',
      marginHorizontal: 90,
      marginLeft: 120,
      color: 'black'

  },
  headerIcon: {
    width: 25,
    height: 24,
    marginVertical: 10,
  },
});
