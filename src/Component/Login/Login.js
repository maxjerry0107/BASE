import React, { Component } from 'react'
import {TextInput,Image, Text, View, TouchableHighlight,StatusBar,ActivityIndicator, Alert} from 'react-native'
import Toast from 'react-native-root-toast'
import styles from './Login.styles'
import arrow_image from '../../assets/images/intro/arrow.png'
import NavigationService from '../../../NavigationService';
import axios from '../Axios';


export class LoginEmail extends Component {
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
}


componentDidMount() {
  this.focusListener = this.props.navigation.addListener('didFocus', () => this._email.focus());
}

componentWillUnmount() {
  this.focusListener.remove();
}


onGotoResetPassword = ()=>
{
  NavigationService.navigate('ResetEmail');
}

onContinue = () =>
{
  const email=this._email._lastNativeText;
  if(this.validate(this._email._lastNativeText)==false)
  {
     NavigationService.navigate('LoginPassword', {
       email:email,onGoBack:this.refresh,
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
      return false;
    }
    else {
      return true;
    }
  }
  render () {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
        <View style={styles.mainArea}>
          <View style={{flex:2, width:'100%', alignItems:'center'}}>
          <TextInput style={styles.emailInput} placeholder={global.languages.login_email_placeholder}
          placeholderTextColor="grey" textContentType="none" autoFocus={true}  ref={(c)=>this._email=c}/>
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
          <TouchableHighlight style={{marginTop:10}} underlayColor={'#fff'} onPress={this.onGotoResetPassword}>
            <Text style={{fontSize:12, fontFamily:'Montserrat Regular'}}>{global.languages.forgot_password_text}</Text>
          </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}























export class LoginPassword extends Component {
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
  this.state={
    loading:false,
  }
}


componentDidMount() {
  this.focusListener = this.props.navigation.addListener('didFocus', () => this._password.focus());
}

componentWillUnmount() {
  this.focusListener.remove();
}

onGotoResetPassword = ()=>
{
  NavigationService.navigate('ResetEmail');
}

onContinue = () =>
{
  const { navigation } = this.props;
  const email = navigation.getParam('email', "");
  const password= this._password._lastNativeText;
 //   this.setState({validated:this.state.validated, password:this.state.password, loading:true})
 //   axios.post('login.php', {
  //      email: email,
   //     password: this.state.password
  //  })
 //   .then(function (response) {
      let res={"result":"success","user":{"id":"1","email":"kostya1207@hotmail.com","fname":"Aero","sname":"Juujarvi","job":"UI Designer","company":"IT Company"}};
      if(res.result=='success')
      {
        let userdata=res.user;
        
        global.userdata = userdata;

        NavigationService.navigate('Home')
      }
      // else
      // {
      //   Toast.show('Login Failed. Try again.', {
      //     duration:Toast.durations.LONG,
      //     position:Toast.positions.TOP,
      //     shadow: true,
      //     animation: true,
      //     hideOnPress: true,
      //     delay: 0,
      //     onHidden: () => {
      //       NavigationService.navigate('LoginEmail')
      //     }
      //   });
    //   }
    // })
    // .catch(function (error) {
    //   Toast.show('Login Failed. Can\'t connect Server.\nTry again.', {
    //     duration:Toast.durations.LONG,
    //     position:Toast.positions.TOP,
    //     shadow: true,
    //     animation: true,
    //     hideOnPress: true,
    //     delay: 0,
    //     onHidden: () => {
    //       NavigationService.navigate('LoginEmail')
    //     }
    //   });
    // });
}

  render () {
    if(this.state.loading){
      return( 
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eee"
           }}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    else
    {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
        <View style={styles.mainArea}>
          <View style={{flex:2, width:'100%', alignItems:'center'}}>
          <TextInput style={styles.emailInput} placeholder={global.languages.login_password_placeholder}
           secureTextEntry={true}  ref={(c)=>this._password=c}
            placeholderTextColor="grey" autoFocus={true} 
            textContentType="none"  />
          <TouchableHighlight  style={styles.button} underlayColor={'#197ed1'} onPress={this.onContinue}>
            <View style={styles.image_button}>
              <View style={{flex:1}}></View>
              <Text style={styles.btnText}>{global.languages.login_btn}</Text>
              <View style={{flex:1}}>
                <Image source={arrow_image} resizeMode={'cover'} style={{marginLeft:10,  width:13,height:13,}}></Image>
              </View>
              </View>
          </TouchableHighlight>

          </View>
          <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
          <TouchableHighlight style={{marginTop:10}} underlayColor={'#fff'} onPress={this.onGotoResetPassword}>
            <Text style={{fontSize:12, fontFamily:'Montserrat Regular'}}>{global.languages.forgot_password_text}</Text>
          </TouchableHighlight>

          </View>
        </View>
      </View>
    )
    }
  }
}