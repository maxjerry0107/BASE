import React, { Component } from 'react'
import {TextInput,Image, Text, View, TouchableHighlight, StatusBar,TouchableOpacity} from 'react-native'
import Toast from 'react-native-root-toast'
import styles from './Reset.styles'
import NavigationService from '../../../NavigationService';
import arrow_image from '../../assets/images/intro/arrow.png'

export class ResetEmail extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0, 
    },
    headerTitleStyle: {
      fontFamily:'Montserrat SemiBold',
      color:'black',fontWeight: "200"
    },
  };
constructor(props){
  super(props);
  this.state = {
    email :'',
    validated: false ,
  }
}

componentDidMount() {
  this.focusListener = this.props.navigation.addListener('didFocus', () => this._email.focus());
}

componentWillUnmount() {
  this.focusListener.remove();
}

onGotoLogin = ()=>
{
  this.props.navigation.goBack();
}
onContinue = () =>
{
  if(this.state.validated==true)
  {
     NavigationService.navigate('ResetPassword', {
       email:this.state.email
     })
  }
  else
  {
    Toast.show('Please Input Valid Email', {
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0
  });
  }
}
  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    this.setState({email:text,validated:false})
      }
    else {
      this.setState({email:text,validated:true})
    }
  }
  render () {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
        <View style={styles.mainArea}>
          
        <View style={{alignItems:'center', justifyContent:'center', flex:2, width:'100%'}}>
          <TextInput style={styles.emailInput} placeholder={global.languages.login_email_placeholder} 
          placeholderTextColor="grey"   autoFocus={true}  ref={(c)=>this._email=c}
          onChangeText={(text) => this.validate(text)} />
          <TouchableHighlight  style={styles.button} underlayColor={'#197ed1'} onPress={this.onContinue}>
              <View style={styles.image_button}>
              <View style={{flex:1}}></View>
                  <Text style={styles.btnText}>{global.languages.continue_text}</Text>
                  <View style={{flex:1}}>
                    <Image source={arrow_image} resizeMode={'cover'} style={{marginLeft:10, width:13,height:13,}}></Image>
                  </View>
              </View>
          </TouchableHighlight>
          </View>
          <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
          <TouchableOpacity  onPress={this.onGotoLogin}>
            <Text style={{fontSize:12,
    fontFamily:'Montserrat Regular',}}>{global.languages.login_btn} </Text>
          </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </View>
    )
  }
}























export class ResetPassword extends Component {
  static navigationOptions = {
    title: "",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0, 
    },
    headerTitleStyle: {
      fontFamily:'Montserrat SemiBold',
      color:'black',fontWeight: "200"
    },
  };

constructor(props){
  super(props);
  this.state={
    password : '',
    validated:false,
  }
}


onGotoLogin = ()=>
{
  NavigationService.navigate('LoginEmail');  
  this.props.navigation.navigate('LoginEmail');
}

  render () {
    const { navigation } = this.props;
    const email = navigation.getParam('email', "");
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
        <View style={styles.mainArea}>
          <View style={{flex:1, alignItems:'center'}}>
          <Text style={{fontSize:16, alignSelf:'center', textAlign:'center',
    fontFamily:'Montserrat SemiBold', position:'absolute', bottom:100,}}>
            {global.languages.reset_password_text1}{'\n'}
            <Text style={{color:'#4294D0'}}>{email}</Text> {'\n'}
            {global.languages.reset_password_text2}
          </Text>
          <TouchableHighlight  style={styles.button} underlayColor={'#197ed1'} onPress={this.onGotoLogin}>
              <View style={styles.image_button}>
                  <View style={{flex:1}}></View>
                  <Text style={styles.btnText}>{global.languages.login_btn}</Text>
                  <View style={{flex:1}}>
                    <Image source={arrow_image} resizeMode={'cover'} style={{marginLeft:10, width:13,height:13,}}></Image>
                  </View>
              </View>
          </TouchableHighlight>
          </View>
          <View style={{flex:1}}>
          <TouchableHighlight style={{marginTop:10}}>
            <Text style={{fontSize:12, fontFamily:'Montserrat Regular',}}>{global.languages.send_link_again}</Text>
          </TouchableHighlight>
          </View>
        </View>
        <View></View>
      </View>
    )
  }
}