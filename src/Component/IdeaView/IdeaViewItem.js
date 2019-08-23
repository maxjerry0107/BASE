import React, {Component} from 'react';
import { Text, View,TouchableOpacity,Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import improveIcon from '../../assets/images/improve.png';
import reportIcon from '../../assets/images/report.png';
import folderIcon from '../../assets/images/folder.png';

const height=Dimensions.get("window").height;

import styles from './IdeaViewItem.styles';

export default class IdeaViewItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      collapsed:true,
    }
  }

  onToggle = ()=>{
    this.setState({
      collapsed:!this.state.collapsed,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open==this.props.item.id)
      this.setState({collapsed:false});
    else
      this.setState({collapsed:true});
  }
  render(){
    let item=this.props.item;
    return (
      <View style={[styles.container]}>
        <View style={styles.toparea}>
          <TouchableOpacity style={styles.topbtn} onPress={this.props.onOpenIdea}> 
            <View style={styles.namearea}>
              <Text style={styles.process}>{item.process}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.topbtnarea}>
                {item.download!=''&&
                  <Image source={folderIcon} style={{width:15, height:20}} resizeMode={"contain"}/>
                }
                {!this.state.collapsed&&
                <Icon style={{marginLeft:10}} name="caretup" size={12} color="#4294D0" />}
                {this.state.collapsed&&
                  <Icon style={{marginLeft:10}} name="caretdown" size={12} color="#000" />}
            </View>
          </TouchableOpacity>
        </View>
        {!this.state.collapsed&&
        <View style={{flex:1,flexDirection:'column',height:height-230,borderTopColor: 'rgba(0,0,0,0.3)',borderTopWidth:0.5,}}>
          <View style={styles.descriptionArea}>
            <Text style={styles.date} >{item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={item.download!=''?styles.bottomButtonArea:styles.bottomButtonArea1}>
            {item.download!=''&&
            <View style={{height:42}}>
              <TouchableOpacity style={styles.bottombtns} onPress={this.props.onDownload}>
              <View style={styles.downloadbtn}>
                  <Image source={folderIcon} resizeMode={"contain"} style={[styles.bottombtnsimage, {width:15, height:20}]}/>
                  <Text style={styles.bottombtntext1}>{global.languages.ideaview_download_btn}</Text>
                </View>
              </TouchableOpacity>
            </View>}
            <View style={{height:50}}>
            <TouchableOpacity style={styles.bottombtns} onPress={this.props.onGotoImprove}>
              
            <View style={styles.improvebtn}>
                  <Image source={improveIcon} style={styles.bottombtnsimage} resizeMode={"contain"}/>
                  <Text style={styles.bottombtntext2}>{global.languages.ideaview_improve_btn}</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{height:50}}>
            <TouchableOpacity style={styles.bottombtns}  onPress={this.props.onGotoReport}>
              
            <View style={styles.reportbtn}>
                  <Image source={reportIcon} style={[styles.bottombtnsimage, {width:12, height:12}]} resizeMode={"contain"}/>
                  <Text style={styles.bottombtntext3}>{global.languages.ideaview_report_btn}</Text>
                </View>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        }
      </View>
    )
  }
}
      