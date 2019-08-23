import React, { Component } from 'react'
import {Image, Text, View, ImageBackground, StatusBar } from 'react-native'
import styles from './Intro.styles'
import arrow_image from '../../assets/images/intro/arrow.png'


export default class IntroPage extends Component {
    render(){
        return (
            <View style={styles.container}>            
         <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
                <View  style={styles.causualArea}>
                    <View style={styles.imageArea}>
                        <ImageBackground style={styles.intro_image} source={this.props.image}></ImageBackground>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={styles.biggerText}>{this.props.biggertext}</Text>
                        <Text style={styles.smallerText}>{this.props.smallertext1}{'\n'}{this.props.smallertext2}</Text>
                    </View>
                </View>
                {/* <View  style={styles.buttonArea}>
                    <TouchableHighlight  style={styles.button} underlayColor={'#3284c0'} onPress={this.props.onPress}>
                        <View style={styles.image_button}>
                            <Text style={styles.btnText}>{this.props.btntext}</Text>
                            <Image source={arrow_image} resizeMode={'cover'} style={{marginLeft:10}}></Image>
                        </View>
                    </TouchableHighlight>
                </View> */}
            </View>
        );
    }
}
