import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';

function Final(props) {

    return (
        <View style={styles.subDiv}>
            <Text style={[styles.manualTxt, { marginTop: 30 }]}>사람들과의 모임을 통해</Text>
            <Image style={[styles.manualImg, { marginTop: 20 }]} source={require("../../../image/home4.png")} />
            <Text style={styles.manualTxt2}>습관을 만들어보세요</Text>
            <TouchableOpacity onPress={() => props.setApp("login")} style={styles.purpleBtn}>
                <Text style={styles.purpleBtnTxt}>다음</Text>
            </TouchableOpacity>
        </View>
    )

}


function Manual3(props) {

    return (
        <View style={styles.subDiv}>
            <View style = {{flex:0.2, alignItems : 'flex-end'}}><TouchableOpacity onPress={() => props.setApp("login")} style={styles.skip}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity></View>
            <Image style={styles.manualImg} source={require("../../../image/home3.png")} />
            <Image style={styles.dotImg} source={require("../../../image/dot3.png")} />
            <Text style={styles.manualTxt}>습관을 만들기 위해</Text>
            <Text style={styles.manualTxt2}>얼마나 노력하고 있나요?</Text>
            <TouchableOpacity onPress={() => { props.setFinal(true); props.setManual3(false) }} style={styles.purpleBtn}>
                <Text style={styles.purpleBtnTxt}>시작하기</Text>
            </TouchableOpacity>
        </View>
    )

}

function Manual2(props) {

    return (
        <View style={styles.subDiv}>
            <View style = {{flex:0.2, alignItems : 'flex-end'}}><TouchableOpacity onPress={() => props.setApp("login")} style={styles.skip}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity></View>
            <Image style={styles.manualImg} source={require("../../../image/home2.png")} />
            <Image style={styles.dotImg} source={require("../../../image/dot2.png")} />
            <Text style={styles.manualTxt}>어떤 습관을 가지고 있느냐에 따라</Text>
            <Text style={styles.manualTxt2}>나를 성장시킬 수 있습니다.</Text>
            <TouchableOpacity onPress={() => { props.setManual3(true); props.setManual2(false) }} style={styles.purpleBtn}>
                <Text style={styles.purpleBtnTxt}>다음</Text>
            </TouchableOpacity>
        </View>
    )

}

export default function Manual1(props) {
    const [manual2, setManual2] = useState(false);
    const [manual3, setManual3] = useState(false);
    const [final, setFinal] = useState(false);

    return (
        <View style={styles.background}>
            <StatusBar
                animated={true}
                backgroundColor="#ffffff"
                barStyle='dark-content' />

            <View style = {{flex:0.2, alignItems : 'flex-end'}}><TouchableOpacity onPress={() => props.setApp("login")} style={styles.skip}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity></View>
            <Image style={styles.manualImg} source={require("../../../image/home1.png")} />
            <Image style={styles.dotImg} source={require("../../../image/dot1.png")} />
            <Text style={styles.manualTxt}>우리 행동의 40% 이상이</Text>
            <Text style={styles.manualTxt2}>습관에 의한 결정입니다.</Text>
            <TouchableOpacity onPress={() => setManual2(true)} style={styles.purpleBtn}>
                <Text style={styles.purpleBtnTxt}>다음</Text>
            </TouchableOpacity>
            {manual2 ? <Manual2 setManual3={setManual3} setFinal={setFinal} setManual2={setManual2}/> : undefined}
            {manual3 ? <Manual3 setFinal={setFinal} setManual3={setManual3} /> : undefined}
            {final ? <Final setApp={props.setApp} /> : undefined}
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 1000,
        backgroundColor: 'white'
    },
    subDiv: {
        width: '100%',
        height: 1000,
        position: 'absolute',
        backgroundColor: 'white'
    },
    skip: {
        marginTop: 30,
        marginRight : 30,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        borderRadius: 10,
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent : 'center'
        
    },
    skipText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    manualTxt: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    manualTxt2: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 50
    },
    purpleBtn: {
        backgroundColor: '#7d63e8',
        margin: 20,
        padding: 20,
        borderRadius: 60
    },
    purpleBtnTxt: {
        color: 'white',
        textAlign: 'center'
    },
    manualImg: {
        marginLeft: 70,
        marginBottom: 20,
        marginTop: 100
    },
    dotImg: {
        marginLeft: 170,
        margin: 20,
        marginBottom: 50
    }
})