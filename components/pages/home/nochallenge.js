import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../src/colors';
import Colors from '../../src/colors';
import {homeImages} from '../../src/images';
const NoChallengeScreen = () => {
  return (
    <NoCLGContainer>
      <GrayLine />
      <HeaderImgContainer>
        <ExclamationImg source={homeImages.Exclamation} />
        <ExclamationTxt>진행 중인 챌린지가 없어요!</ExclamationTxt>
      </HeaderImgContainer>

      <BtnContainer>
          <CreateBtn><BtnTxt>습관 만들기</BtnTxt></CreateBtn>
          <SeeingBtn><BtnTxt>습관 둘러보기</BtnTxt></SeeingBtn>
      </BtnContainer>
    </NoCLGContainer>
  );
};
const GrayLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.gray};
  margin-top: 20px;
`;
const NoCLGContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
const HeaderImgContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 60px;
`;
const BtnContainer = styled.View`
  flex: 3;
  justify-content: center;
`;
const ExclamationImg = styled.Image`
  width: 35px;
  height: 35px;
  align-self: center;
`;
const ExclamationTxt = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  align-self: center;
  margin-top: 20px;
`;
const CreateBtn = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: ${colors.purple};
  align-content: center;
  border-radius: 100px;
  justify-content: center;
`;
const SeeingBtn = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: ${colors.green};
  align-content: center;
  border-radius: 100px;
  margin-top: 10px;
  justify-content: center;
`;
const BtnTxt = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: ${colors.white};
  text-align: center;
`;
export default NoChallengeScreen;
