import React from 'react';
import { Text, View , Image, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import {
  NativeModules,
  BackHandler ,Dimensions
} from 'react-native';

import {Container, Header, Left, Right, Body,Button,Tabs,Tab} from 'native-base'

import NavigationService from '../../../NavigationService';
//import {ViewPager} from 'rn-viewpager';
import Swiper from 'react-native-page-swiper';
const { UIManager } = NativeModules;

import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './Evaluate.styles';
import arrow_image from '../../assets/images/intro/arrow.png'
import Slider from 'react-native-slider'
import EvaluateIdea from './EvaluateIdea';

const width=Dimensions.get('window').width;


const ideas=[
  {
    id:1,
    name: 'Adobe Cloud1',
    stage_id:1,
  },
  {
    id:2,
    name: 'Adobe Cloud2',
    stage_id:1,
  },
  {
    id:3,
    name: 'Adobe Cloud3',
    stage_id:1,
  },
  {
    id:4,
    name: 'Adobe Cloud4',
    stage_id:1,
  },
  {
    id:5,
    name: 'Adobe Cloud5',
    stage_id:1,
  },
]

export default class Evaluate extends React.Component {
  
componentWillUpdate() {
//  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
//  LayoutAnimation.spring();
}
    constructor(props){
      super(props);
      this.state={
          step:0,
          txtBtn:'CONTINUE',
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
    let step=this.state.step;

    if(step==ideas.length-1)
    {
      NavigationService.navigate("Home");
    }
    else
    {
    //  this._viewpaper.setPage(step);
      step=step+1;
      this.setState({step:step})
      if(step==ideas.length)
        this.setState({txtBtn:'CONFIRM'});
    }
  }
   onPageSelected = e => {
     console.log(e);
    let pageIndex=e;
    this.setState({step:e})
    if(pageIndex==(ideas.length-1))
      this.setState({txtBtn:'CONFIRM'});
    else
      this.setState({txtBtn:'CONTINUE'});
  };

  renderIdeas=()=>{
    return(
      <EvaluateIdea idea={ideas[this.state.step-1]} />
    );
  }

    render() {
      return (        
        <Container style={{backgroundColor:'rgba(0,0,0,0.8)', paddingTop:3, paddingBottom:3,paddingHorizontal:5}}>
          <Header style={{ backgroundColor: '#F5FCFF', height:80, elevation: 0, shadowOpacity: 0,borderTopLeftRadius:10, borderTopRightRadius:10, paddingHorizontal:5,}}>
            <StatusBar backgroundColor="rgba(0,0,0,0.8)" barStyle="dark-content" />
            <Left style={{flex:1}}>
              <Button transparent onPress={()=>this.props.navigation.goBack()} style={{marginBottom:20,}}>
              <Icon containerStyle={{marginLeft:10}} name="close" type="antdesign" size={22} color={'rgba(0,0,0,0.3)'}></Icon>
              </Button>
            </Left>
            <Body style={{flex:2,
                  justifyContent: 'center',flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                <Text
                  style={styles.topHeaderTitle}>
                  Evaluation
                </Text>
                <Text
                  style={styles.topHeaderSubTitle}>
                  IDEA {this.state.step+1}/{ideas.length}
                </Text>
            </Body>
            <Right style={{flex:1}}></Right>
          </Header>
          <View style={[styles.mainContainer]}>
          <Slider value={this.state.step+1} style={{height:5,}} 
             minimumValue={0} maximumValue={ideas.length} minimumTrackTintColor={'#4294D0'} 
             step={1}
             maximumTrackTintColor={'#DDDDDD'} trackStyle={{height:3.5}}
             thumbStyle={{ width:0, height:0}}
             />
            <Swiper style={[styles.container1,{zIndex:0,}]} ref={(c)=>this._viewpaper=c}   onPageChange={this.onPageSelected.bind(this)} index={this.state.step} pager={false}>
            {
              ideas.map((item)=>{
              return (<View style={[{flex:1, }]} key={item.id}>
                <EvaluateIdea item={item} />
              </View>);
              })
            }
            </Swiper>
          </View>

            <View style={styles.bottom}>   
              <TouchableHighlight  style={styles.bottombutton1} underlayColor={'#4294D0'} onPress={this.onNextPress}>
                  <View style={styles.image_button}>
                      <Text style={styles.bottombuttonbtnText1}>{this.state.txtBtn}</Text>
                      {this.state.step!=ideas.length&&
                      <Image source={arrow_image} resizeMode={'contain'} style={{marginLeft:10, height:10,}}></Image>
                      }
                  </View>
              </TouchableHighlight>
            </View>
        </Container>
      );
    }
  }
