import React, {Component} from 'react';
import { Text, View ,TextInput, Image,Alert,StatusBar} from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import SwitchSelector from "react-native-switch-selector";
import NavigationService from '../../../NavigationService';

import styles from './Profile.styles';
import activeIcon from '../../assets/images/home/profile1.png';
import inactiveIcon from '../../assets/images/home/profile2.png';
import { TouchableHighlight, TouchableOpacity } from 'react-native';


class Profile extends React.Component {
    static navigationOptions = {
      tabBarIcon: (event) => {
        if(event.focused)
          return (
           // <Image source={activeIcon} style={styles.tabBarIcon} ImageResizeMode='cover'/>
            <View style={styles.avatar_tabbar_active}>
              <Text style={styles.avatar_text_tabbar_active}>{global.userdata.fname.toUpperCase().charAt(0)+global.userdata.sname.toUpperCase().charAt(0)}</Text>
            </View>
            );
        else
          return(
            // <Image source={inactiveIcon} style={styles.tabBarIcon} ImageResizeMode='cover' />
            <View style={styles.avatar_tabbar_inactive}>
              <Text style={styles.avatar_text_tabbar_inactive}>{global.userdata.fname.toUpperCase().charAt(0)+global.userdata.sname.toUpperCase().charAt(0)}</Text>
            </View>
            );        
      },
    };

    storeData = async (value) => {
      try {
        AsyncStorage.setItem('@lang', value);
        Alert.alert(
          '',
          'You have to restart to change language?\nDo you want to restart now?',
          [
            {text: 'No', onPress: () => {}, style: 'cancel'},
            {text: 'Yes', onPress: () => {RNRestart.Restart();}},
          ],
          { cancelable: false }
        );
      } catch (e) {

      }
    }

    logout = ()=>{
      Alert.alert(
        '',
        'Do you want to sign out?',
        [
          {text: 'No', onPress: () => {}, style: 'cancel'},
          {text: 'Yes', onPress: () => {
            NavigationService.navigate('Intro');}},
        ],
        { cancelable: false }
      );
    }


    render() {
      return (
        <View style={ styles.container }>
        <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
          <View style={styles.header}>
              <View style={{position: 'absolute', top: '100%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.avatar}>
                  <Text style={styles.avatar_text}>{global.userdata.fname.toUpperCase().charAt(0)+global.userdata.sname.toUpperCase().charAt(0)}</Text>
                </View>
             </View>
          </View>
          <View style={styles.content}>
             <View style={styles.nameArea}>
               <Text style={styles.name}>{global.userdata.fname+" "+global.userdata.sname}</Text>
               <Text style={styles.job}>{global.userdata.job.toUpperCase()}</Text>
             </View>
             <View style={[styles.editArea,]}>
                <View style={[styles.SectionStyle, {marginTop:3,}]}>
                  <Text style={{paddingLeft:20, fontSize:12, color:'#000', fontFamily:'Montserrat SemiBold',}}>{global.languages.profile_company}</Text>
                  <TextInput editable={false}
                      style={styles.inputAgency}
                      placeholder={global.userdata.company} placeholderTextColor={'rgba(0,0,0,0.5)'}
                  />
                </View>
                <View style={[styles.SectionStyle, {marginTop:35,}]}>
                 <Text style={{paddingLeft:20, fontSize:12,color:'#000', fontFamily:'Montserrat SemiBold',}}>{global.languages.profile_email}</Text>
                  <TextInput editable={false}
                      style={styles.inputAgency} placeholderTextColor={'rgba(0,0,0,0.5)'}
                      placeholder={global.userdata.email} 
                  />
                </View>
             </View>
             <View style={styles.logout}>
             <SwitchSelector
                style={{width:'65%'}}
                initial={global.lang=='eng'?0:1}
                onPress={value => this.storeData(value)}
                textColor={'#4294D0'} 
                selectedColor={'#f8f8f8'}
                buttonColor={'#4294D0'}
                textStyle={{fontFamily:'Montserrat SemiBold',fontSize:11}}
                selectedTextStyle={{fontFamily:'Montserrat SemiBold',fontSize:11}}
                hasPadding
                options={[
                  { label:"English", value: "eng",}, 
                  { label: "Finnish", value: "fin",} 
                ]}
              />
               <TouchableOpacity style={{marginTop:20, borderRadius:30, borderWidth:1, 
               borderColor:'#D0424D', width:117, height:32, justifyContent:'center'}}
               onPress={()=>{this.logout()}}
               >
                 <Text style={{color:'#D0424D', width:'100%', textAlign:'center', textAlignVertical:'center',
                    fontFamily:'Montserrat SemiBold',fontSize:11}}>{global.languages.profile_logout}</Text>
               </TouchableOpacity>
             </View>
          </View>
        </View>
      );
    }
  }
    
export default withNavigation(Profile);