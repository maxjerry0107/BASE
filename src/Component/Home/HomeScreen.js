import React from 'react';
import { Text, View , Image, ScrollView, ActivityIndicator, TouchableOpacity,StatusBar} from 'react-native';
import { withNavigation } from 'react-navigation';
import NavigationService from '../../../NavigationService';
import { BackHandler } from 'react-native';
import axios from '../Axios';
import Toast from 'react-native-root-toast';

import {styles, styles1} from './HomeScreen.styles';
import activeIcon from '../../assets/images/home/home1.png';
import inactiveIcon from '../../assets/images/home/home2.png';
import improveIcon from '../../assets/images/improve.png';
import reportIcon from '../../assets/images/report.png';
import Evaluate from '../Evaluate/Evaluate';

const CustomRow = ({item, ongotoIdeaView, ongotoImproveIdeaView,ongotoReportIssueView}) => (
  <View style={[styles1.container, {backgroundColor:'#fff'}]} key={item.id}>
      <TouchableOpacity style={[styles1.toparea]} onPress={ongotoIdeaView}>
          <View style={[styles1.namearea]}>
            <Text style={styles1.process}>{item.type}</Text>
            <Text style={styles1.name}>{item.name}</Text>
          </View>
          <View style={styles1.topbtnarea}>
            <View style={styles1.addbtn}>
              <Text style={styles1.addbtntext}>+</Text>
            </View>
          </View>
      </TouchableOpacity>
      <View style={styles1.bottomarea}>
        <View style={styles1.bottombtnarea}>
          <TouchableOpacity  style={styles1.bottombtn} onPress={ongotoImproveIdeaView}>
            <View style={styles1.bottombtns}>
              <Image source={improveIcon} style={styles1.bottombtnsimage}/>
              <Text style={styles1.bottombtntext}>{global.languages.home_screen_improve_btn}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles1.bottombtnarea}>
          <TouchableOpacity  style={styles1.bottombtn} onPress={ongotoReportIssueView}>
            <View style={styles1.bottombtns}>
              <Image source={reportIcon} style={styles1.bottombtnsimage}/>
              <Text style={styles1.bottombtntext}>{global.languages.home_screen_report_btn}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  </View>
);

const CustomRow1 = ({item,gotoEvaluateView}) => (
  <View style={[styles1.container,{backgroundColor:'#4294D0'}]}>
      <View style={[styles1.toparea]}>
          <View style={styles1.namearea}>
            <Text style={styles1.process1}>{item.type}</Text>
            <Text style={styles1.name1}>{item.name}</Text>
          </View>
          <View style={[styles1.topbtnarea]}>
            <TouchableOpacity  style={styles1.evalbtn} underlayColor={'#197ed1'} onPress={gotoEvaluateView}>
              <Text style={styles1.evalbtntext}>{global.languages.home_screen_evaluate_btn}</Text>
            </TouchableOpacity>
          </View>
      </View>      
      <View style={styles1.bottomarea}>
        <Text style={styles1.evaltext}>{item.ev_count+global.languages.home_screen_evaluate_count}</Text>
      </View>
  </View>
);

const project_data={"result":"success","data":[{"id":1,"name":"Designing1","type":"Android","completed":1,"stage_count":6,"operational_count":10,"phase_count":10,"ev_count":10},{"id":2,"name":"Designing2","type":"IOS","completed":0,"stage_count":5,"operational_count":10,"phase_count":11,"ev_count":10},{"id":3,"name":"Designing3","type":"Mobile Development","completed":0,"stage_count":6,"operational_count":10,"phase_count":10,"ev_count":7},{"id":4,"name":"Designing4","type":"Adobe Creative Cloud","completed":0,"stage_count":4,"operational_count":9,"phase_count":15,"ev_count":9},{"id":5,"name":"Designing5","type":"Android","completed":1,"stage_count":5,"operational_count":10,"phase_count":11,"ev_count":10},{"id":6,"name":"Designing6","type":"IOS","completed":0,"stage_count":6,"operational_count":8,"phase_count":15,"ev_count":3},{"id":7,"name":"Designing7","type":"Mobile Development","completed":0,"stage_count":6,"operational_count":6,"phase_count":13,"ev_count":3},{"id":8,"name":"Designing8","type":"Adobe Creative Cloud","completed":0,"stage_count":6,"operational_count":9,"phase_count":11,"ev_count":6},{"id":9,"name":"Designing9","type":"Android","completed":1,"stage_count":3,"operational_count":9,"phase_count":13,"ev_count":3},{"id":10,"name":"Designing10","type":"IOS","completed":1,"stage_count":3,"operational_count":9,"phase_count":12,"ev_count":5},{"id":11,"name":"Designing11","type":"Mobile Development","completed":1,"stage_count":5,"operational_count":8,"phase_count":12,"ev_count":4},{"id":12,"name":"Designing12","type":"Adobe Creative Cloud","completed":0,"stage_count":5,"operational_count":6,"phase_count":10,"ev_count":9},{"id":13,"name":"Designing13","type":"Android","completed":1,"stage_count":4,"operational_count":8,"phase_count":14,"ev_count":10},{"id":14,"name":"Designing14","type":"IOS","completed":0,"stage_count":4,"operational_count":6,"phase_count":15,"ev_count":10},{"id":15,"name":"Designing15","type":"Mobile Development","completed":0,"stage_count":4,"operational_count":8,"phase_count":16,"ev_count":9},{"id":16,"name":"Designing16","type":"Adobe Creative Cloud","completed":1,"stage_count":3,"operational_count":7,"phase_count":16,"ev_count":6},{"id":17,"name":"Designing17","type":"Android","completed":1,"stage_count":4,"operational_count":6,"phase_count":11,"ev_count":4},{"id":18,"name":"Designing18","type":"IOS","completed":1,"stage_count":6,"operational_count":6,"phase_count":16,"ev_count":8},{"id":19,"name":"Designing19","type":"Mobile Development","completed":0,"stage_count":6,"operational_count":10,"phase_count":11,"ev_count":9},{"id":20,"name":"Designing20","type":"Adobe Creative Cloud","completed":1,"stage_count":3,"operational_count":7,"phase_count":12,"ev_count":9}]};


class HomeScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        dataSource:[]
      };
    }

    static navigationOptions = {
        tabBarIcon: (event) => {
            if(event.focused)
                return <Image source={activeIcon} style={styles.tabBarIcon1}  ImageResizeMode='cover'/>;
            else
                return <Image source={inactiveIcon} style={styles.tabBarIcon1} ImageResizeMode='cover' />;        
        },
    };

    gotoIdeaView = (item) =>{
      global.current_project=item;
      NavigationService.navigate('IdeaView');
    }

    gotoEvaluateView = (item) =>{
      global.current_project=item;
      NavigationService.navigate('Evaluate');
    }

    ongotoImproveIdeaView=()=>{      
      NavigationService.navigate('ImproveIdeaFirst');
    }

    ongotoReportIssueView=()=>{      
      NavigationService.navigate('ReportIssueFirst');
    }


    componentDidMount(){
      this.setState({
               loading: false,dataSource:project_data.data});
    //   axios.post('get_projects.php', {
    //     email: global.userdata.email
    //   })
    //   .then(response => {
    //   let res=response.data;
    //   if(res.result=='success')
    //   {
    //     this.setState({
    //       loading: false,
    //       dataSource: res.data,
    //      });
    //   }
    //   else
    //   {
    //     Toast.show('Can\'t get Data from server. Try again.', {
    //       position:Toast.positions.CENTER,
    //       shadow: true,
    //       animation: true,
    //       hideOnPress: true,
    //       delay: 0,
    //       onHidden: () => {
    //        BackHandler.exitApp();
    //       }
    //     });
    //   }
    // })
    // .catch(function (error) {
    //   Toast.show('Can\'t connect to server.', {
    //     position:Toast.positions.TOP,
    //     shadow: true,
    //     animation: true,
    //     hideOnPress: true,
    //     delay: 0,
    //     onHidden: () => {
    //       BackHandler.exitApp();
    //     }
    //   });
    // });

    }
    
    render() {

     return (
      <View style={styles.container}>
         <StatusBar backgroundColor="rgba(255,255,255,0)" barStyle="dark-content" />
        <View style={styles.header}>
          <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center', alignContent:'center', alignItems:'center'}} onPress={()=>{this.props.navigation.navigate('Profile');}}>
            <View style={styles.avatar}>
              <Text style={styles.avatar_text}>{global.userdata.fname.toUpperCase().charAt(0)+global.userdata.sname.toUpperCase().charAt(0)}</Text>
            </View>
            <View style={{flexDirection:'column', marginLeft:5}}>
               <Text style={styles.job}>{global.userdata.job.toUpperCase()}</Text>
               <Text style={styles.company}>{global.userdata.company}</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex:2, justifyContent: 'center', alignItems: 'center',}}>
          <Text style={styles.name}>{global.languages.home_screen_welcome+global.userdata.fname}</Text>
            <Text style={styles.job}>{global.languages.home_screen_project_count1+this.state.dataSource.length+global.languages.home_screen_project_count2}</Text>             
          </View>
          <View style={{flex:1}}>
            
          </View>
        </View>
        <View style={styles.content}>
          {this.state.loading&&<View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
          </View>}
          {!this.state.loading&&
            <ScrollView style={{width:'100%', height:'100%',paddingTop:1,}}> 
              {
                this.state.dataSource.map((item) => {
                  if(item.completed==0)
                    return (
                      <CustomRow ongotoIdeaView={()=>{this.gotoIdeaView(item)}} 
                      ongotoImproveIdeaView={this.ongotoImproveIdeaView} 
                      ongotoReportIssueView={this.ongotoReportIssueView}
                        item={item} key={item.id}
                      />
                    )
                  else
                    return (
                      <CustomRow1 gotoEvaluateView={this.gotoEvaluateView}
                        item={item} key={item.id}
                      />
                    )
                })
              }
            </ScrollView>
          }
          </View>
        </View>
      );
    }
  }

  

  
export default withNavigation(HomeScreen);