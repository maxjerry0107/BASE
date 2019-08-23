/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { YellowBox } from 'react-native';
import {createStackNavigator,createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { fromLeft, zoomIn, zoomOut, fadeIn, fromRight } from 'react-navigation-transitions'
 
const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'LoginEmail'
    && nextScene.route.routeName === 'LoginPassword') {
    return fromRight();
  } else if (prevScene
    && prevScene.route.routeName === 'LoginPassword'
    && nextScene.route.routeName === 'LoginEmail') {
    return fromLeft();
  } else if (prevScene
    && (prevScene.route.routeName === 'LoginEmail'||prevScene.route.routeName === 'LoginPassword')
    && nextScene.route.routeName === 'ResetEmail') {
    return fromRight();
  }else if (prevScene
    && (prevScene.route.routeName === 'ResetEmail'||prevScene.route.routeName === 'ResetPassword')
    && nextScene.route.routeName === 'LoginEmail') {
    return fromRight();
  }else if (prevScene
    && (prevScene.route.routeName === 'ResetEmail')
    && nextScene.route.routeName === 'ResetPassword') {
    return fromLeft();
  }else if (prevScene
    && (prevScene.route.routeName === 'ResetPassword')
    && nextScene.route.routeName === 'ResetEmail') {
    return fromRight();
  }
  return fadeIn();
}

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

import Intro from './src/Component/Intro/Intro'
import Home from './src/Component/Home/Home'
import IdeaView from './src/Component/IdeaView/IdeaView'
import {LoginEmail, LoginPassword} from './src/Component/Login/Login'
import {ResetEmail, ResetPassword} from './src/Component/Login/Reset'
import ImproveIdeaFirst from './src/Component/ImproveIdea/ImproveIdeaFirst'
import ImproveIdeaSecond from './src/Component/ImproveIdea/ImproveIdeaSecond'
import ReportIssueFirst from './src/Component/ReportIssue/ReportIssueFirst'
import ReportIssueSecond from './src/Component/ReportIssue/ReportIssueSecond'
import ReportIssueThird from './src/Component/ReportIssue/ReportIssueThird'
import Evaluate from './src/Component/Evaluate/Evaluate'
import NavigationService from './NavigationService';
import {eng, fin} from './src/Component/Language';

const ActivityProject = createStackNavigator(
  {
    Intro: { screen: Intro , navigationOptions: {header: null,},},
    ResetEmail: { screen: ResetEmail },    
    ResetPassword: { screen: ResetPassword },    
    LoginEmail: { screen: LoginEmail },    
    LoginPassword: { screen: LoginPassword },
    Home: { screen: Home, navigationOptions: {header: null,}, },    
    IdeaView: { screen: IdeaView , navigationOptions: {header: null,},},
    ImproveIdeaFirst: { screen:ImproveIdeaFirst, navigationOptions: {header: null,}, },
    ImproveIdeaSecond: { screen:ImproveIdeaSecond, navigationOptions: {header: null,}, },
    ReportIssueFirst: { screen:ReportIssueFirst, navigationOptions: {header: null,}, },
    ReportIssueSecond: { screen:ReportIssueSecond,  navigationOptions: {header: null,},},
    ReportIssueThird: { screen:ReportIssueThird,  navigationOptions: {header: null,},},
    Evaluate: { screen:Evaluate,  navigationOptions: {header: null,},},
  },
  {
    initialRouteName: "Intro",
    headerLayoutPreset: 'center',
    transitionConfig: (nav) => handleCustomTransition(nav)
  },);

  
const AppContainer = createAppContainer(ActivityProject)

export default class App extends Component {


  render() {
    return <AppContainer ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }} />;
  }
}