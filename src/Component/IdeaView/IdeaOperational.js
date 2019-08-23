import React, {Component} from 'react';
import { Text, View ,TextInput, Image} from 'react-native';

import {IdeaViewHeader} from './IdeaViewHeader'

import styles from './IdeaView.styles';

export default class IdeaOperational extends React.Component {
    static navigationOptions = {
        tabBarIcon:(event) => {
            return <IdeaViewHeader focused={event.focused} text={global.languages.ideaview_operational_header}  num={global.current_project.operational_count} />   ;
        },
    };
    render() {
        return (
            <View style={styles.container}>
               <Text> IdeaOperational</Text>
            </View>
        )
    }
}