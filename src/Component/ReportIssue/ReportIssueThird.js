import React from 'react';
import { Text, View , Image, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity,TextInput} from 'react-native';
import {
  NativeModules,
  BackHandler 
} from 'react-native';


import {Container, Header, Left, Right, Body,Button} from 'native-base'
const { UIManager } = NativeModules;

import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './ReportIssue.styles';
import arrow_image from '../../assets/images/intro/arrow.png'
import NavigationService from '../../../NavigationService';

export default class ReportIssueThird extends React.Component {
  
    constructor(props){
      super(props);
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount = ()=>{
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
  
    handleBackButtonClick() {
      this.props.navigation.goBack(null);
      return true;
    }
    onConfirm = () =>{
      NavigationService.navigate('Home');
    }

    render() {
      
      return (
        <Container style={{backgroundColor:'rgba(0,0,0,0.8)', paddingVertical:5,paddingHorizontal:5,}}>
          <Header style={{ backgroundColor: '#F5FCFF', height:85, elevation: 0, shadowOpacity: 0,borderTopLeftRadius:10, borderTopRightRadius:10, }}>
            <StatusBar backgroundColor="rgba(0,0,0,0.8)" barStyle="dark-content" />
            <Left style={{flex:1}}>
              <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon containerStyle={{marginLeft:10}} name="arrowleft" type="antdesign" size={22} color={'rgba(0,0,0,0.3)'}></Icon>
              </Button>
            </Left>
            <Body style={{flex:2,
                  justifyContent: 'center',flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                <Text
                  style={styles.topHeaderTitle}>
                  {
                    this.props.navigation.getParam('ideaId', '0')=='0'?'Report issue':'Report problem'
                  }
                </Text>
                <Text
                  style={styles.topHeaderSubTitle}>                  
                  {
                    this.props.navigation.getParam('ideaId', '0')=='0'?'3/3 DESCRIPTION':'1/1 DESCRIPTION'
                  }
                </Text>
            </Body>
            <Right style={{flex:1}}></Right>
          </Header>
        <View style={styles.container}>          
          <View style={styles.header}>   
            <View style={styles.namearea}>
              <Text style={styles.projectprocess}>Mobile App Development</Text>
              <Text style={styles.projectname}>Base</Text>
            </View>  
            <View style={styles.topbtnarea}>
              <Image source={require('../../assets/images/check.png')} style={{width:26,height:26 ,marginLeft:'auto', marginRight:20,}} />
            </View>   
          </View>
              
          <View style={[styles.content, {paddingTop:20,}]}>
            <TextInput style={styles.description} 
           multiline={true} placeholder="Describe your idea" autoFocus={true}
          placeholderTextColor="rgba(0,0,0,0.3)" ></TextInput>
          </View>     
          <View style={styles.bottom}>   
            <TouchableHighlight  style={styles.bottombutton1} underlayColor={'#C0323D'} onPress={this.onConfirm}>
                <View style={styles.image_button}>
                    <Text style={[styles.bottombuttonbtnText,{color:'#fff'}]}>CONFIRM</Text>
                    <Icon containerStyle={{marginLeft:10}} name="arrowright" type="antdesign" size={18} color={'#fff'}></Icon>
                </View>
            </TouchableHighlight>
          </View>
        </View>
        </Container>
      );
    }
  }
