import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import CheckList from './checklist';
import styled from 'styled-components/native';
import colors from '../../src/colors';
import {detailImages} from '../../src/images';

function ViewEachHabit(props) {
  return (
    <HabitContainer>
      <View style={{flexDirection: 'row'}}>
        <EllipseContainer>
          <EllipseImg
            source={detailImages.ellipse}
            style={{resizeMode: 'contain'}}
          />
          <EllipseTxt>12일차</EllipseTxt>
        </EllipseContainer>

        <HeaderContainer>
          <Header>
            <HeaderTxt>3주 습관</HeaderTxt>
          </Header>
          <ContentsTxt>
            매일 하루 하나의 캘리그라피를 3주 동안 진행합니다 :)
          </ContentsTxt>
        </HeaderContainer>
      </View>

      <GrapeContainer></GrapeContainer>
    </HabitContainer>
  );
}

export default function Article() {
  const [c, setC] = useState('a');
  const [habitId, viewEachHabit] = useState(0);
  const alert = () => {
    Alert.alert('Grabit','준비 중입니다.');
  };
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
const HabitContainer = styled.View`
  height: 550px;
  background-color: ${colors.white};
  position: absolute;
  z-index: 20;
  width: 100%;
`;
const EllipseContainer = styled.View`
  justify-content: center;
  margin: 20px;
  flex: 1;
`;
const EllipseImg = styled.Image`
  align-self: center;
`;
const EllipseTxt = styled.Text`
  font-weight: bold;
  color: ${colors.purple};
  position: absolute;
  align-self: center;
`;
const HeaderContainer = styled.View`
  flex: 3;
`;
const Header = styled.View`
  width: 70px;
  height: 30px;
  background-color: #f1f1f1;
  border-radius: 100px;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 10px;
`;
const HeaderTxt = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${colors.purple};
  text-align: center;
`;
const ContentsTxt = styled.Text`
  font-weight: 500;
  color: ${colors.black};
  text-align: left;
  margin: 5px;
  margin-right: 20px;
`;
const GrapeContainer = styled.View`
  width: 90%;
  height: 190px;
  background-color: #f5f5f5;
  border-radius: 20px;
  justify-content: center;
  margin-bottom: 20px;
  align-self: center;
`;
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
