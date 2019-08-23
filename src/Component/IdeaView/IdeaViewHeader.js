import React, {Component} from 'react';
import { Text, View} from 'react-native';

import styles from './IdeaViewHeader.styles';

export class IdeaViewHeader  extends React.Component{
  render(){
    return (
      <View style={styles.tabbarHeaderView}>
          <Text style={this.props.focused?styles.tabbarHeaderText:styles.tabbarHeaderText1}>{this.props.text}</Text>
          <View style={this.props.focused?styles.tabbarHeaderNumberArea:styles.tabbarHeaderNumberArea1}>
            <Text style={this.props.focused?styles.tabbarHeaderNumber:styles.tabbarHeaderNumber1}>{this.props.num}</Text>
          </View>
      </View>
    );
  }
}