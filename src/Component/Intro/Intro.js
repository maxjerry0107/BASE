import React, { Component } from 'react'
import {Image, Text, View, TouchableHighlight,StatusBar } from 'react-native'
//import ViewPager from "@react-native-community/viewpager";
import {ViewPager} from "rn-viewpager";
import styles from './Intro.styles';
import IntroPage from './IntroPage'
import {eng, fin} from '../Language';
import AsyncStorage from '@react-native-community/async-storage';

import NavigationService from '../../../NavigationService';
import intro_image1 from '../../assets/images/intro/intro1.png'
import intro_image2 from '../../assets/images/intro/intro2.png'
import intro_image3 from '../../assets/images/intro/intro3.png'
import arrow_image from '../../assets/images/intro/arrow.png'

let pageIndex=0;

export default class Intro extends Component {
  componentDidMount = async() => {
    try {
      const value = await AsyncStorage.getItem('@lang');
      if(value !== null) {
        global.lang = value;      
      }
      else{
        global.lang = 'eng';
      }
    } catch(e) {
      global.lang = 'eng';
    }
  
    if(global.lang=='eng')
    {
      global.languages=eng;
    }
    else
    {
      global.languages=fin;
    }
   }

constructor(props){
  super(props);
  this.state={
    btntext:'CONTINUE',
  }
}
  onContinue = ()=>{

    if(pageIndex==2)
    {
      NavigationService.navigate("LoginEmail");
      pageIndex=0;
      this.viewPager.setPage(0);
      this.setState({btntext:'CONTINUE'});
    }
    else
    {
      this.viewPager.setPage(pageIndex+1);
      if(pageIndex==2)
        this.setState({btntext:'START'});
    }
  }
  onPageSelected = e => {
    pageIndex=e.position;
    if(pageIndex==2)
      this.setState({btntext:'START'});
    else
      this.setState({btntext:'CONTINUE'});
  };
  render () {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
        <ViewPager style={{flex:1,width:'100%'}} initialPage={0}  onPageSelected={this.onPageSelected.bind(this)}
        ref={(viewPager) => {
            this.viewPager = viewPager
        }}> 
          <View style={styles.container} key='1'>
            <IntroPage image={intro_image1}
                biggertext="MORE EFFICIENT PROJECTS" 
                smallertext1="Suggest improvements, report issues and"
                smallertext2="support to choose best ways to do projects" />    
          </View>
          <View style={styles.container} key='2'>
            <IntroPage image={intro_image2}
                biggertext="AT REACH OF YOUR HARD" 
                smallertext1="Start using all projects best work methods and" 
                smallertext2="tools in your own projects" />    
          </View>
          <View style={styles.container} key='3'>
            <IntroPage image={intro_image3}
                biggertext="EVERYWHERE" 
                smallertext1="Learn from others and develop your own craft." 
                smallertext2="Information on the best are shared with whole company" />    
          </View>
        </ViewPager>
        <View style={styles.buttonArea}>
            <TouchableHighlight  style={styles.button} underlayColor={'#52a4e0'} onPress={this.onContinue}>
                <View style={styles.image_button}>
                    <View style={{flex:1}}></View>
                    <Text style={styles.btnText}>{this.state.btntext}</Text>
                    <View style={{flex:1}}> 
                      <Image source={arrow_image} resizeMode={'contain'} style={{marginLeft:10, height:12}}></Image>
                    </View>                   
                </View>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}