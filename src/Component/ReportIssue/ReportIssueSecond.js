import React from 'react';
import { Text, View , TextInput, StatusBar, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import {
  NativeModules,
  BackHandler ,Dimensions
} from 'react-native';

import {Container, Header, Left, Right, Body,Button} from 'native-base'

import NavigationService from '../../../NavigationService';
import Modal from 'react-native-modal'
const { UIManager } = NativeModules;

import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './ReportIssue.styles';
import arrow_image from '../../assets/images/intro/arrow.png'
import Slider from 'react-native-slider'

const width=Dimensions.get('window').width;

export default class ReportIssueFirst extends React.Component {
  
componentWillUpdate() {
//  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
//  LayoutAnimation.spring();
}
    constructor(props){
      super(props);
      this.state={
        scaleType:2,
        timeValue:3,
        moneyValue:100,
        moneyInputDlg:false,
        inputMoneyValue:"100",
        hourTimeValue:"3",
        minTimeValue:"0",
        showMoneyInputModal:false,
        showTimeInputModal:false,
        moneyChanged:false,
        timeChanged:false,
      };      
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

    onNextPress = () =>{
      NavigationService.navigate('ReportIssueThird');
    }

    getPosTime(){
      let v=this.state.timeValue>=8?8:this.state.timeValue;
        return (v-0.25)/7.75*(width)*0.83;
    }
    getPosMoney(){
      let v=this.state.moneyValue>=1000?1000:this.state.moneyValue;
        return (v-50)/950*(width)*0.83;
    }

    getHourValue=()=>{
      let value=this.state.timeValue;
      let n=value.toFixed(2);
      let hours=Math.floor(n);
      return hours;
    }

    getMinutesValue=()=>{      
      let value=this.state.timeValue;
      let n=value.toFixed(2);
      let hours=Math.floor(n);
      let minutes=Math.round((n-hours)*60);
      return minutes;
    }


  onScaleBtnPress = (type) =>{
    this.setState(
    {
      scaleType:type,
    });
  }

  formatNumber1 = () =>{
    return this.state.moneyValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  formatTime1 = () =>{
    let value=this.state.timeValue;
    let n=value.toFixed(2);
    let hours=Math.floor(n);
    let minutes=Math.round((n-hours)*60);
    let str=hours + "," + (minutes<10?('0'+minutes):minutes);
    return str;
  }

  formatNumber2 = () =>{
    return this.state.moneyValue.toString()+"€";
  }

  formatTime2 = () =>{
    
    let value=this.state.timeValue;
    let n=value.toFixed(2);
    let hours=Math.floor(n);
    let minutes=Math.round((n-hours)*60);
    let str=hours + "h," + (minutes<10?('0'+minutes):minutes)+'m';
    return str;
  }

  onScaleTimeValueChange = (value) =>{
    let hours=Math.floor(value);
    let minutes=Math.round((value-hours)*60);
    this.setState({hourTimeValue:hours.toString(), minTimeValue:minutes.toString()})
      this.setState(
        {
          timeChanged:true,
          timeValue:value,
        }
      );
    } 
    onScaleMoneyValueChange = (value) =>{
      this.setState(
        {
          moneyValue:value,
          moneyChanged:true,
          inputMoneyValue:value.toString(),
        }
      );
    }

    setTimespanInput=()=>{
      let hours=parseInt(this.state.hourTimeValue);
      let minutes=parseInt(this.state.minTimeValue);
      let timeValue=hours+(minutes/60);
      // if(timeValue>8)
      //   timeValue=8;
      //else 
      if(timeValue<0.25)
        timeValue=0.25;
      hours=Math.floor(timeValue);
      minutes=Math.round((timeValue-hours)*60);
      this.setState({hourTimeValue:hours.toString(), minTimeValue:minutes.toString()})
      this.setState({timeValue:timeValue,timeChanged:true})
    }

    onInputValue=()=>{
      if(this.state.scaleType==2)
      {
        this.setState({showTimeInputModal:true})
      }
      else if(this.state.scaleType==1)
      {
        console.log(this._textinput);
        this.setState({showMoneyInputModal:true});
      }
    }

    onChangeInputMoney=(value)=>{
      this.setState({inputMoneyValue:value});
    }

    onInputMoney=()=>{      
      let v=parseInt(this.state.inputMoneyValue);
      if(v<50)
        v=50;
      // else if(v>1000)
      //   v=1000;
      this.setState({moneyInputDlg:false, moneyValue:v, moneyChanged:true});
    }

    showMoneyInputModal=()=>{
      this.setState({showMoneyInputModal:false});
      this.onInputMoney();
    }
    showTimeInputModal=()=>{
      this.setState({showTimeInputModal:false});
      this.setTimespanInput();
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
                  Report issue
                </Text>
                <Text
                  style={styles.topHeaderSubTitle}>
                  2/3 COST OF ISSUE
                </Text>
            </Body>
            <Right style={{flex:1}}></Right>
          </Header>
        <View style={styles.container}>
        
          <Modal
            isVisible={this.state.showMoneyInputModal}
            backdropOpacity={0}>
              <View style={{alignSelf:'center',
                borderRadius: 30, padding:20, borderColor:'grey', borderWidth:1,
                width:'60%',  backgroundColor:'#fff', flexDirection:'column'}}>
                <Text style={{color:'#000', alignContent:'center', alignSelf:'center',fontSize:17, fontFamily:'Montserrat Bold'}}>Input Expense</Text>
                <TextInput autoFocus={true} value={this.state.inputMoneyValue} onChangeText={(val)=>this.setState({inputMoneyValue:val})} style={{borderWidth:1, marginTop:5, borderColor:'grey', padding:3, fontFamily:'Montserrat Regular', fontSize:17}} keyboardType={"numeric"} />
                <TouchableOpacity style={{width:100,height:30, borderColor:'#C0323D', borderWidth:1, borderRadius:20,alignSelf:'center', justifyContent:'center', marginTop:10,}} onPress={this.showMoneyInputModal} >
                  <Text style={{alignSelf:'center', color:'#C0323D'}}>OK</Text>
                </TouchableOpacity>
              </View>            
          </Modal>

          <Modal
            isVisible={this.state.showTimeInputModal}
            backdropOpacity={0}>
              <View style={{alignSelf:'center',
                borderRadius: 30, padding:20, borderColor:'grey', borderWidth:1,
                width:'60%',  backgroundColor:'#fff', flexDirection:'column'}}>
                <Text style={{color:'#000', alignContent:'center', alignSelf:'center',fontSize:17, fontFamily:'Montserrat Bold'}}>Input Time</Text>
                <View style={{width:'80%', flexDirection:'row', alignContent:'center', alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
                  <TextInput autoFocus={true} value={this.state.hourTimeValue} onChangeText={(val)=>this.setState({hourTimeValue:val})} style={{flex:1, padding:3, marginRight:5, textAlign:'right', fontFamily:'Montserrat Regular', fontSize:17}} keyboardType={"numeric"} />
                  <Text style={{ fontFamily:'Montserrat Regular', fontSize:17,marginRight:5,}}>h</Text>
                  <TextInput autoFocus={true} value={this.state.minTimeValue} onChangeText={(val)=>this.setState({minTimeValue:val})} style={{ flex:1, padding:3, textAlign:'right', fontFamily:'Montserrat Regular', fontSize:17,marginRight:5,}} keyboardType={"numeric"} />
                  <Text style={{ fontFamily:'Montserrat Regular', fontSize:17}}>m</Text>                
                </View>
                <TouchableOpacity style={{width:100,height:30, borderColor:'#C0323D', borderWidth:1, borderRadius:20,alignSelf:'center', justifyContent:'center', marginTop:10,}} onPress={this.showTimeInputModal} >
                  <Text style={{alignSelf:'center', color:'#C0323D'}}>OK</Text>
                </TouchableOpacity>
              </View>            
          </Modal>

          <View style={styles.header}>   
            <View style={styles.namearea}>
              <Text style={styles.projectprocess}>Mobile App Development</Text>
              <Text style={styles.projectname}>Base</Text>
            </View>  
            <View style={styles.topbtnarea}>           
              <Image source={require('../../assets/images/check.png')} style={{width:26,height:26 ,marginLeft:'auto', marginRight:20,}} />
            </View>   
          </View>
              
          <View style={styles.content}>
            <View style={[styles.scaleButtonArea]}>
              <TouchableOpacity onPress={()=>this.onScaleBtnPress(1)}>
                <Text style={[styles.scaleButtonText,
                  this.state.scaleType==2?{borderColor:'#F8F8F8',borderWidth:1,color:'rgba(0,0,0,0.5)'}:{borderColor:'#C0323D',borderWidth:1,color:'#C0323D',}, 
                  this.state.moneyChanged?{color:'#C0323D'}:{}]}>EXPENSE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onScaleBtnPress(2)}>
                <Text style={[styles.scaleButtonText,
                  this.state.scaleType==1?{borderColor:'#F8F8F8',borderWidth:1,color:'rgba(0,0,0,0.5)'}:{borderColor:'#C0323D',borderWidth:1,color:'#C0323D',}, 
                  this.state.timeChanged?{color:'#C0323D'}:{}]}>TIME</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scaleTextArea}>
              <Text style={styles.scaleValueText} onPress={()=>{this.onInputValue()}}>{this.state.scaleType==1?this.formatNumber1():this.formatTime1()}</Text>
              <Text style={styles.scaleTypeText}>{this.state.scaleType==1?'EUROS':'HOURS'}</Text>
            </View>
            {this.state.scaleType==2&&
            <View style={styles.scaleArea}>
             <Slider value={this.state.timeValue>=8?8:this.state.timeValue} onValueChange={(value) => {this.onScaleTimeValueChange(value)}} 
             minimumValue={0.25} maximumValue={8} minimumTrackTintColor={'#C0323D'} 
             step={0.01}
             maximumTrackTintColor={'#DDDDDD'} trackStyle={{height:8,borderRadius:10}}
             thumbStyle={{backgroundColor:'#fff', borderColor:'#C0323D', borderWidth:2, width:25, height:25, borderRadius:15}}
             />
             <Text style={{fontSize: 12, color: '#000',fontFamily: 'Montserrat Bold',marginLeft:this.getPosTime()}}>
              {this.formatTime2()}
             </Text>
             </View>
            }
            {this.state.scaleType==1&&
            <View style={styles.scaleArea}>
             <Slider value={this.state.moneyValue>=1000?1000:this.state.moneyValue} onValueChange={(value) => {this.onScaleMoneyValueChange(value)}} 
             minimumValue={50} maximumValue={1000} minimumTrackTintColor={'#C0323D'} 
             step={1}
             maximumTrackTintColor={'#DDDDDD'} trackStyle={{height:8,borderRadius:10}}
             thumbStyle={{backgroundColor:'#fff', borderColor:'#C0323D', borderWidth:2, width:25, height:25, borderRadius:15}}
             />
             <Text style={{fontSize: 12, color: '#000',fontFamily: 'Montserrat Bold',marginLeft:this.getPosMoney()}}>
              {this.formatNumber2()}
             </Text>
            </View>
            }
          </View>
          <View style={styles.bottom}>   
            <TouchableHighlight  style={styles.bottombutton1} underlayColor={'#C0323D'} onPress={this.onNextPress}>
                <View style={styles.image_button}>
                    <Text style={styles.bottombuttonbtnText1}>REPORT ISSUE</Text>
                    {/* <Image source={arrow_image} resizeMode={'cover'} style={{marginLeft:10}}></Image> */}
                </View>
            </TouchableHighlight>
          </View>
        </View>
        </Container>
      );
    }
  }
