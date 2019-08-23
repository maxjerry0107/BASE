import React from 'react';
import { Text, View , TextInput, StatusBar, Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  NativeModules,
  BackHandler ,Dimensions
} from 'react-native';

import {Item, Icon, Input, Right, Body,Button} from 'native-base'

import NavigationService from '../../../NavigationService';

const { UIManager } = NativeModules;

// import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './Evaluate.styles';
import arrow_image from '../../assets/images/intro/arrow.png'
import Slider from 'react-native-slider'
import Modal from 'react-native-modal'

const width=Dimensions.get('window').width;

export default class EvaluateIdea extends React.Component {
  
    constructor(props){
      super(props);
      this.state={
        scaleType:2,
        timeValue:3,
        moneyValue:100,
        moneyInputDlg:false,
        hourType:1,
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


   getPosTime(){
    let v=this.state.timeValue>=8?8:this.state.timeValue;
      return (v-0.25)/7.75*(width)*0.83;
  }
  getPosMoney(){
    let v=this.state.moneyValue>=1000?1000:this.state.moneyValue;
      return (v-50)/950*(width)*0.86;
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
            moneyChanged:true,
            moneyValue:value,
            inputMoneyValue:value.toString(),
          }
        );
      }

    setTimespanInput=()=>{
      let hours=parseInt(this.state.hourTimeValue);
      let minutes=parseInt(this.state.minTimeValue);
      let timeValue=hours+(minutes/60);
      if(timeValue<0.25)
        timeValue=0.25;
      //  else if(timeValue>8)
      //   timeValue=8;
      hours=Math.floor(timeValue);
      minutes=Math.round((timeValue-hours)*60);
      this.setState({hourTimeValue:hours.toString(), minTimeValue:minutes.toString()})
      this.setState({timeValue:timeValue, timeChanged:true})
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


    getHourText = () =>{
      if(this.state.hourType==1)
        return "WEEKLY";
      else if(this.state.hourType==2)
        return "MONTHLY";
      else if(this.state.hourType==3)
        return "IN TOTAL";
    }

    onHourTypePress=(type)=>{
      this.setState({hourType:type});
    }

    render() {
      return (        
      <View style={[styles.container,]}>
          <Modal
            isVisible={this.state.showMoneyInputModal}
            backdropOpacity={0}>
              <View style={{alignSelf:'center',
                borderRadius: 30, padding:20, borderColor:'grey', borderWidth:1,
                width:'60%',  backgroundColor:'#fff', flexDirection:'column'}}>
                <Text style={{color:'#000', alignContent:'center', alignSelf:'center',fontSize:17, fontFamily:'Montserrat Bold'}}>Input Expense</Text>
                <TextInput autoFocus={true} value={this.state.inputMoneyValue} onChangeText={(val)=>this.setState({inputMoneyValue:val})} style={{borderWidth:1, marginTop:5, borderColor:'grey', padding:3, fontFamily:'Montserrat Regular', fontSize:17}} keyboardType={"numeric"} />
                <TouchableOpacity style={{width:100,height:30, borderColor:'#4294D0', borderWidth:1, borderRadius:20,alignSelf:'center', justifyContent:'center', marginTop:10,}} onPress={this.showMoneyInputModal} >
                  <Text style={{alignSelf:'center', color:'#4294D0'}}>OK</Text>
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
                <TouchableOpacity style={{width:100,height:30, borderColor:'#4294D0', borderWidth:1, borderRadius:20,alignSelf:'center', justifyContent:'center', marginTop:10,}} onPress={this.showTimeInputModal} >
                  <Text style={{alignSelf:'center', color:'#4294D0'}}>OK</Text>
                </TouchableOpacity>
              </View>            
          </Modal>

          <View style={styles.header}>   
            <View style={styles.namearea}>
              <Text style={styles.projectname}>{"Base".toUpperCase()}</Text>
              <Text style={styles.ideaName}>Mobile App Development</Text>
            </View>  
            <View style={styles.topbtnarea}>          
              <Image source={require('../../assets/images/check.png')} style={{width:26,height:26 ,marginLeft:'auto', marginRight:20,}} />
            </View>   
          </View>              
          <View style={[styles.descriptionArea,{marginBottom:8,}]}>
            <ScrollView>
          <Text style={styles.description}>
            
            How to load the page only when user selects the tab. Currently, It loads all the views initially. I want to load each view when user select each tab.
           How to load the page only when user selects the tab. Currently, It loads all the views initially. I want to load each view when user select each tab.
           How to load the page only when user selects the tab. Currently, It loads all the views initially. I want to load each view when user select each tab.
           How to load the page only when user selects the tab. Currently, It loads all the views initially. I want to load each view when user select each tab.
           How to load the page only when user selects the tab. Currently, It loads all the views initially. I want to load each view when user select each tab.
           How to load the page only when user selects the tab. Currently, It loads all the views initially. I want to load each view when user select each tab.
           How to load the page only when user selects the tab. Currently, It loads all the views initially. I want to load each view when user select each tab.
           </Text></ScrollView>
          </View>
          <View style={styles.content}>
            <View style={[styles.scaleButtonArea]}>
              <TouchableOpacity onPress={()=>this.onScaleBtnPress(1)}>
                <Text style={[styles.scaleButtonText,
                  this.state.scaleType==2?{borderColor:'#F8F8F8',borderWidth:1,color:'rgba(0,0,0,0.3)'}:{borderColor:'#4294D0',borderWidth:1,color:'#4294D0',}, 
                  this.state.moneyChanged?{color:'#4294D0'}:{}]}>EXPENSE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onScaleBtnPress(2)}>
                <Text style={[styles.scaleButtonText,
                  this.state.scaleType==1?{borderColor:'#F8F8F8',borderWidth:1,color:'rgba(0,0,0,0.3)'}:{borderColor:'#4294D0',borderWidth:1,color:'#4294D0',}, 
                  this.state.timeChanged?{color:'#4294D0'}:{}]}>TIME</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scaleTextArea}>
              <Text style={styles.scaleValueText} onPress={this.onInputValue}>{this.state.scaleType==1?this.formatNumber1():this.formatTime1()}</Text>
              <Text style={styles.scaleTypeText}>{this.state.scaleType==1?'EUROS SAVED IN TOTAL':'HOURS SAVED '+this.getHourText()}</Text>
            </View>
            {this.state.scaleType==2&&
            <View style={styles.scaleArea}>
             <Slider value={this.state.timeValue>=8?8:this.state.timeValue} onValueChange={(value) => {this.onScaleTimeValueChange(value)}} 
             minimumValue={0.25} maximumValue={8} minimumTrackTintColor={'#4294D0'} 
             step={0.01}
             maximumTrackTintColor={'#DDDDDD'} trackStyle={{height:8,borderRadius:10}}
             thumbStyle={{backgroundColor:'#fff', borderColor:'#4294D0', borderWidth:2, width:25, height:25, borderRadius:15}}
             />
             <Text style={{fontSize: 9, color: '#000',fontFamily: 'Montserrat Bold',marginLeft:this.getPosTime()}}>
              {this.formatTime2()}
             </Text>
             <View style={{marginTop:30,flexDirection:'row', justifyContent:'center', width:'100%'}}>
               <TouchableOpacity onPress={()=>this.onHourTypePress(1)}>
                <Text style={[styles.hourType,this.state.hourType==1&&{borderBottomColor:'#4294D0', borderBottomWidth:1, }]}>WEEKLY</Text>
               </TouchableOpacity> 
               <TouchableOpacity onPress={()=>this.onHourTypePress(2)}>
                 <Text style={[styles.hourType,this.state.hourType==2&&{borderBottomColor:'#4294D0', borderBottomWidth:1, }]}>MONTHLY</Text>
               </TouchableOpacity> 
               <TouchableOpacity onPress={()=>this.onHourTypePress(3)}>
                 <Text style={[styles.hourType,this.state.hourType==3&&{borderBottomColor:'#4294D0', borderBottomWidth:1, }]}>IN TOTAL</Text>
               </TouchableOpacity> 
             </View>
             </View>
            }
            {this.state.scaleType==1&&
            <View style={styles.scaleArea}>
             <Slider value={this.state.moneyValue>=1000?1000:this.state.moneyValue} onValueChange={(value) => {this.onScaleMoneyValueChange(value)}} 
             minimumValue={50} maximumValue={1000} minimumTrackTintColor={'#4294D0'} 
             step={1}
             maximumTrackTintColor={'#DDDDDD'} trackStyle={{height:8,borderRadius:10}}
             thumbStyle={{backgroundColor:'#fff', borderColor:'#4294D0', borderWidth:2, width:25, height:25, borderRadius:15}}
             />
             <Text style={{fontSize: 9, color: '#000',fontFamily: 'Montserrat Bold',marginLeft:this.getPosMoney()}}>
              {this.formatNumber2()}
             </Text>
            </View>
            }
          </View>
        </View>
      );
    }
  }
