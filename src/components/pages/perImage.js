import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

export default function PerImage({isTogether, per}){
    let per1 = parseInt(per / 5) * 5
    let per2 = per % 5
    if (per2 > 2.5){
      per1 += 5
    }
    if(isTogether){
      if(per1 == 0){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog0.png")} />
        )
      }else if(per1 == 5){
        return (
          <Image style={[styles.chartPer2, {right: 18}]} source={require("../../image/tog5.png")} />
        )
      }else if(per1 == 10){
        return (
          <Image style={[styles.chartPer2, {right:10}]} source={require("../../image/tog10.png")} />
        )
      }else if(per1 == 15){
        return (
          <Image style={[styles.chartPer2, {right:7}]} source={require("../../image/tog15.png")} />
        )
      }else if(per1 == 20){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog20.png")} />
        )
      }else if(per1 == 25){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog25.png")} />
        )
      }else if(per1 == 30){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog30.png")} />
        )
      }else if(per1 == 35){
        return (
            <Image style={styles.chartPer2} source={require("../../image/tog35.png")} />
        )
      }else if(per1 == 40){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog40.png")} />
        )
      }else if(per1 == 45){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog45.png")} />
        )
      }else if(per1 == 50){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog50.png")} />
        )
      }else if(per1 == 55){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog55.png")} />
        )
      }else if(per1 == 60){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog60.png")} />
        )
      }else if(per1 == 65){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog65.png")} />
        )
      }else if(per1 == 70){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog70.png")} />
        )
      }else if(per1 == 75){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog75.png")} />
        )
      }else if(per1 == 80){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog80.png")} />
        )
      }else if(per1 == 85){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog85.png")} />
        )
      }else if(per1 == 90){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog90.png")} />
        )
      }else if(per1 == 95){
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog95.png")} />
        )
      }else{
        return (
          <Image style={styles.chartPer2} source={require("../../image/tog100.png")} />
        )
      }
    }else{
        if(per1 == 0){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo0.png")} />
          )
        }else if(per1 == 5){
          return (
            <Image style={[styles.chartPer2, {right: 18}]} source={require("../../image/alo5.png")} />
          )
        }else if(per1 == 10){
          return (
            <Image style={[styles.chartPer2, {right: 10}]} source={require("../../image/alo10.png")} />
          )
        }else if(per1 == 15){
          return (
            <Image style={[styles.chartPer2, {right: 7}]} source={require("../../image/alo15.png")} />
          )
        }else if(per1 == 20){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo20.png")} />
          )
        }else if(per1 == 25){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo25.png")} />
          )
        }else if(per1 == 30){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo30.png")} />
          )
        }else if(per1 == 35){
          return (
              <Image style={styles.chartPer2} source={require("../../image/alo35.png")} />
          )
        }else if(per1 == 40){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo40.png")} />
          )
        }else if(per1 == 45){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo45.png")} />
          )
        }else if(per1 == 50){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo50.png")} />
          )
        }else if(per1 == 55){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo55.png")} />
          )
        }else if(per1 == 60){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo60.png")} />
          )
        }else if(per1 == 65){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo65.png")} />
          )
        }else if(per1 == 70){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo70.png")} />
          )
        }else if(per1 == 75){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo75.png")} />
          )
        }else if(per1 == 80){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo80.png")} />
          )
        }else if(per1 == 85){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo85.png")} />
          )
        }else if(per1 == 90){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo90.png")} />
          )
        }else if(per1 == 95){
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo95.png")} />
          )
        }else{
          return (
            <Image style={styles.chartPer2} source={require("../../image/alo100.png")} />
          )
        }
    }
}

const styles = StyleSheet.create({
    chartPer2:{
      position:'absolute',
      right:1,
    }
})