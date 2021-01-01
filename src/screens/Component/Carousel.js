import React from "react";
import {View,Text,StyleSheet, Image} from "react-native";
import Swiper from "react-native-web-swiper";

const styles = StyleSheet.create({
    container: {
       marginHorizontal:10,marginVertical:10,
        
        width:340,height:200,
    },
    slideContainer: {
      
        width:340,height:200,
        alignItems: "center",
        justifyContent: "center"
    },
    
});

export default class Carousel extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Swiper  dotColor="#000" activeDotColor="#000" timeout="4">
                    <View style={[styles.slideContainer,styles.slide1]}>
                      
                        <Image  source={require('../../img/Careers-Edge-Blog-Img.jpg')} style={{width:340,height:200,alignSelf:'center',borderRadius:10,borderWidth:1,borderColor:'#00a'}} /> 
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        
                        <Image  source={require('../../img/Wipro-BPharma-MPharma-Freshers-Job.jpg')} style={{width:340,height:200,alignSelf:'center',borderRadius:10,borderWidth:1,borderColor:'#00a'}} /> 
                    </View>
                    <View style={[styles.slideContainer,styles.slide3]}>
                        
                        <Image  source={require('../../img/H.png')}style={{width:340,height:200,alignSelf:'center',borderRadius:10,borderWidth:1,borderColor:'#00a'}} /> 
                    </View>
                </Swiper>
            </View>
        )
    }
}