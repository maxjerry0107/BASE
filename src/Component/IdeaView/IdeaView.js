import React from 'react';
import {TouchableOpacity,Image, View, Text, StatusBar,BackHandler} from 'react-native'
import IdeaStage from './IdeaStage'
import IdeaOperational from './IdeaOperational'
import IdeaPhases from './IdeaPhases'

import backImage from '../../assets/images/backbtn.png'
import {Header, Container, Left, Body, Title,Right, Tabs,Tab,TabHeading,Badge} from 'native-base'
import tabHeaderStyle from './IdeaViewHeader.styles'
import NavigationService from '../../../NavigationService';

export default class IdeaView extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activeTab:0,
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

  setActiveTab(index) {
      this.setState({activeTab:index});
  }

  render() {
    return (
    //   <AppContainer  />
      <Container style={{backgroundColor:'rgba(0,0,0,0.8)', paddingVertical:5,paddingHorizontal:5,}}>
        <Header style={{backgroundColor:'#4294D0',borderTopLeftRadius:10, height:52, borderTopRightRadius:10,}}>
          <StatusBar backgroundColor="rgba(0,0,0,0.8)" barStyle="dark-content" />
          <Left style={{flex:1}}>
          </Left>
          <Body style={{flex:2,justifyContent:'center', alignContent:'center', alignItems:'center',}}>
            <Title style={{fontSize:17, fontFamily:'Montserrat SemiBold'}}>{global.languages.ideaview_header}</Title>
          </Body>
          <Right style={{flex:1}}>
            <TouchableOpacity
              onPress={()=>{NavigationService.navigate('Home')}}>
                <View style={{height:20, alignContent:'center', alignItems:'center', justifyContent:'center',marginRight:30}}>
                  <Image source={backImage}></Image>
                </View>
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={{borderBottomLeftRadius:10, borderBottomRightRadius:10, backgroundColor:'#f8f8f8', flex:1}}>
          <Tabs tabBarPosition="top" locked={false} tabContainerStyle={{ height: 65 }}
                  tabBarUnderlineStyle={{height:1.5,backgroundColor:'#4294D0', elevation:0}}
                  onChangeTab={(event)=>this.setActiveTab(event.i)} >
            <Tab heading={ 
              <TabHeading style={tabHeaderStyle.tabbarHeaderView}>
                <Text style={this.state.activeTab==0?tabHeaderStyle.tabbarHeaderText:tabHeaderStyle.tabbarHeaderText1}>{global.languages.ideaview_stage_header}</Text>
                <View style={this.state.activeTab==0?tabHeaderStyle.tabbarHeaderNumberArea:tabHeaderStyle.tabbarHeaderNumberArea1}>
                  <Text style={this.state.activeTab==0?tabHeaderStyle.tabbarHeaderNumber:tabHeaderStyle.tabbarHeaderNumber1}>{global.current_project.stage_count}</Text>
                </View>
              </TabHeading>
            } tabStyle={{elevation:0}}>
                <IdeaStage/>
            </Tab>
            <Tab heading={ 
              <TabHeading style={tabHeaderStyle.tabbarHeaderView}>
                <Text style={this.state.activeTab==1?tabHeaderStyle.tabbarHeaderText:tabHeaderStyle.tabbarHeaderText1}>{global.languages.ideaview_operational_header}</Text>
                <View style={this.state.activeTab==1?tabHeaderStyle.tabbarHeaderNumberArea:tabHeaderStyle.tabbarHeaderNumberArea1}>
                  <Text style={this.state.activeTab==1?tabHeaderStyle.tabbarHeaderNumber:tabHeaderStyle.tabbarHeaderNumber1}>{global.current_project.operational_count}</Text>
                </View>
              </TabHeading>
            } tabStyle={{elevation:0}}>
                  <Text >Stage1</Text>
            </Tab>
              <Tab heading={ 
              <TabHeading style={tabHeaderStyle.tabbarHeaderView}>
                <Text style={this.state.activeTab==2?tabHeaderStyle.tabbarHeaderText:tabHeaderStyle.tabbarHeaderText1}>{global.languages.ideaview_phase_header}</Text>
                <View style={this.state.activeTab==2?tabHeaderStyle.tabbarHeaderNumberArea:tabHeaderStyle.tabbarHeaderNumberArea1}>
                  <Text style={this.state.activeTab==2?tabHeaderStyle.tabbarHeaderNumber:tabHeaderStyle.tabbarHeaderNumber1}>{global.current_project.phase_count}</Text>
                </View>
              </TabHeading>
            } tabStyle={{elevation:0}}>
                <Text >Stage2</Text>
            </Tab>
          </Tabs>
        </View>
      </Container>
    );
   }
 }

//withNavigation(appContainer);