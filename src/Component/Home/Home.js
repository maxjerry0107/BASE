import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { BackHandler,Alert } from 'react-native';
import HomeScreen from './HomeScreen'
import Profile from './Profile'

const AppContainer=createAppContainer(
  createBottomTabNavigator(
    {
      HomeScreen: { screen: HomeScreen },
      Profile: { screen: Profile },
    },
    {
      initialRouteName: 'HomeScreen',
      tabBarOptions: {
        showLabel:false,
        activeBackgroundColor: '#4294D0',
        inactiveBackgroundColor: '#4294D0', 
      },
    },
  )
);

export default class Home extends React.Component{
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    Alert.alert(
      '',
      'Do you want exit?',
      [
        {text: 'No', onPress: () => {}, style: 'cancel'},
        {text: 'Yes', onPress: () => {BackHandler.exitApp();}},
      ],
      { cancelable: false }
    );
    return true;
  }

  

  render(){
    return <AppContainer/>;
  }
}