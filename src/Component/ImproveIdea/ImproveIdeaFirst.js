import React from 'react';
import { Text, View , Image, ScrollView, StatusBar, TouchableHighlight, TouchableOpacity} from 'react-native';
import {
  NativeModules,
  BackHandler ,Animated,Dimensions
} from 'react-native';

import NavigationService from '../../../NavigationService';

const { UIManager } = NativeModules;

import {Icon} from 'react-native-elements'
import {styles} from './ImproveIdea.styles';
import arrow_image from '../../assets/images/intro/arrow.png'
import line_image from '../../assets/images/line.png'
import { Container, Header, Left, Body, Right, Button } from 'native-base';

const height=Dimensions.get('window').height;
export default class ImproveIdeaFirst extends React.Component {
  
componentWillUpdate() {
//  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
//  LayoutAnimation.spring();
}

    constructor(props){
      super(props);
      this.state={
        stage_select:-1,
        operation_select:-1,
        operationAnimation: new Animated.Value(40),
        stageAnimation: new Animated.Value(height-350),
      }
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
    gotoNextView = () =>{
      NavigationService.navigate('ImproveIdeaSecond');
    }

  
  onNextPress = () =>{
    if(this.state.stage_select!=-1)
      NavigationService.navigate('ImproveIdeaSecond');
  }

    
  onStagePress = (id)=>{
    let aa=id;
    if(id==this.state.stage_select){
      aa=-1;
    }
    this.setState({
      stage_select:aa,
      operation_select:-1,
    });
    if(aa!=-1){
      Animated.timing(this.state.stageAnimation, {
        toValue: 70,
        duration: 500
      }).start();
      Animated.timing(this.state.operationAnimation,{
        toValue:(height-310-70),
        duration:500,
      }).start();
    }
    else
    {
     Animated.timing(this.state.stageAnimation, {
        toValue: (height-350),
        duration: 500
      }).start();
      Animated.timing(this.state.operationAnimation,{
        toValue:(40),
        duration:500,
      }).start();
    }
  }
  onOperationPress= (id)=>{
    let aa=id;
    if(id==this.state.operation_select){
      aa=-1;
    }
    this.setState({
      operation_select:aa,
    });
    if(aa!=-1){
      Animated.timing(this.state.operationAnimation, {
        toValue: 70,
        duration: 500
      }).start();
      
    }
    else
    {
      Animated.timing(this.state.operationAnimation, {
        toValue: (height-300-70),
        duration: 500
      }).start()
    }
  }
    
    render() {
      
    const list_stage = [
      {
        id:1,
        name: 'Adobe Creative Cloud1',
      },
      {
        id:2,
        name: 'Adobe Creative Cloud2',
      },
      {
        id:3,
        name: 'Adobe Creative Cloud3',
      },
      {
        id:4,
        name: 'Adobe Creative Cloud4',
      },  
    ];
    const list_operation = [
      {
        id:1,
        name: 'Adobe Cloud1',
        stage_id:1,
      },
      {
        id:2,
        name: 'Adobe Cloud2',stage_id:2,
      },
      {
        id:3,
        name: 'Adobe Cloud3',stage_id:3,
      },
      {
        id:4,
        name: 'Adobe Cloud4',stage_id:4,
      },  
      {
        id:5,
        name: 'Adobe Cloud1',stage_id:1,
      },
      {
        id:6,
        name: 'Adobe Cloud2',stage_id:2,
      },
      {
        id:7,
        name: 'Adobe Cloud3',stage_id:3,
      },
      {
        id:8,
        name: 'Adobe Cloud4',stage_id:4,
      },  
      {
        id:9,
        name: 'Adobe Cloud1',stage_id:1,
      },
      {
        id:10,
        name: 'Adobe Cloud2',stage_id:2,
      },
      {
        id:11,
        name: 'Adobe Cloud3',stage_id:3,
      },
      {
        id:12,
        name: 'Adobe Cloud4',stage_id:4,
      },  
    ];


      return (
        
        <Container style={{backgroundColor:'rgba(0,0,0,0.8)', paddingVertical:5, paddingHorizontal:5}}>
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
                  Improve idea
                </Text>
                <Text
                  style={styles.topHeaderSubTitle}>
                  1/2 SELECT AREA
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
              
          <View style={[styles.content]}>
                <Animated.View style={[styles.mainStageArea,{height:this.state.stageAnimation}]}>
                  <View style={styles.headerArea}>
                    <Image source={line_image}  resizeMode={'cover'} style={{width:'35%', marginRight:10}}/>
                    <Text style={styles.headerText1}>Stage</Text>
                    <Image source={line_image}  resizeMode={'cover'}  style={{width:'35%', marginLeft:10}}/>
                    <Text style={styles.mandatory}>MANDATORY</Text>
                  </View>
                  <View style={styles.contentArea}>
                    <ScrollView style={{width:'100%', height:'100%'}}>
                    {
                      list_stage.map((item, key) => {
                        if(this.state.stage_select==-1)
                        {
                            return (
                            <TouchableOpacity style={styles.ideaTextTouch} key={key} onPress={()=>this.onStagePress(item.id)}>
                              <Text style={styles.ideaText}> {item.name}</Text>
                            </TouchableOpacity>
                          );
                        }
                        else if(this.state.stage_select==item.id)
                        {
                            return (
                              <TouchableOpacity style={[styles.ideaTextTouch]} key={key} onPress={()=>this.onStagePress(item.id)}>
                                <Text style={styles.ideaText}> {item.name}</Text>
                                <Icon name="check" size={12} color="#000" containerStyle={{marginLeft:'auto', marginRight:30}} />
                              </TouchableOpacity>
                            );
                        }
                      })
                    }
                    </ScrollView>
                  </View>
                </Animated.View>
                <Animated.View style={[styles.content_2,]}>
                  <Animated.View style={[styles.mainOperationArea,{height:this.state.operationAnimation,}]}>
                    <View style={styles.headerArea}>
                      <Image source={line_image}  resizeMode={'cover'} style={{width:'32%', marginRight:10}}/>
                      <Text style={styles.headerText1}>Operation</Text>
                      <Image source={line_image}  resizeMode={'cover'}  style={{width:'32%', marginLeft:10}}/>
                      <Text style={styles.mandatory}>OPTIONAL</Text>
                    </View>
                    <View style={styles.contentArea}>
                    <ScrollView style={{width:'100%', height:'100%'}}>
                      {
                        list_operation.map((item, key) => {
                          if(this.state.stage_select==item.stage_id)
                          {
                            if(this.state.operation_select==-1)
                            {
                                return (
                                <TouchableOpacity style={styles.ideaTextTouch} key={key} onPress={()=>this.onOperationPress(item.id)}>
                                  <Text style={styles.ideaText}> {item.name}</Text>
                                </TouchableOpacity>
                              );
                            }
                            else if(this.state.operation_select==item.id)
                            {
                                return (
                                  <TouchableOpacity style={styles.ideaTextTouch} key={key} onPress={()=>this.onOperationPress(item.id)}>
                                    <Text style={styles.ideaText}> {item.name}</Text>
                                    <Icon name="check" size={12} color="#000" containerStyle={{marginLeft:'auto', marginRight:30}} />
                                  </TouchableOpacity>
                                );
                            }
                          }
                        })
                      }
                      </ScrollView>
                    </View>
                  </Animated.View>
                  <Animated.View style={[styles.mainPhaseArea, this.state.operation_select==-1?{height:70}:{flex:1}]}>  
                    <View style={styles.headerArea}>
                      <Image source={line_image}  resizeMode={'cover'} style={{width:'35%', marginRight:10}}/>
                      <Text style={styles.headerText1}>Phase</Text>
                      <Image source={line_image}  resizeMode={'cover'}  style={{width:'35%', marginLeft:10}}/>
                      <Text style={styles.mandatory}>OPTIONAL</Text>
                    </View>
                  </Animated.View> 
                </Animated.View>  
            </View>  

           <View style={styles.bottom}>   
            <TouchableHighlight  style={styles.bottombutton} underlayColor={'#3284c0'} onPress={this.onNextPress}>
                <View style={styles.image_button}>
                    <Text style={[styles.bottombuttonbtnText,this.state.stage_select!=-1?{color:'#fff'}:{color:'rgba(255,255,255,0.3)'}]}>NEXT</Text>
                    <Icon containerStyle={{marginLeft:10}} name="arrowright" type="antdesign" size={18} color={this.state.stage_select!=-1?'#fff':'rgba(255,255,255,0.3)'}></Icon>
                </View>
            </TouchableHighlight>
          </View>
        </View>
        </Container>
      );
    }
  }
