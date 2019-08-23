import React from 'react';
import { View ,ScrollView, ActivityIndicator} from 'react-native';
import { withNavigation } from 'react-navigation';
import {IdeaViewHeader} from './IdeaViewHeader'
import axios from '../Axios';
import Toast from 'react-native-root-toast';
import NavigationService from '../../../NavigationService';
import styles from './IdeaView.styles';
import IdeaViewItem from './IdeaViewItem';
import { BackHandler } from 'react-native';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import { Platform } from 'react-native';

const res={"result":"success","data":[{"id":1,"process":"BASE","name":"Designing1","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":2,"process":"BASE","name":"Designing2","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":3,"process":"BASE","name":"Designing3","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":""},{"id":4,"process":"BASE","name":"Designing4","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":5,"process":"BASE","name":"Designing5","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":6,"process":"BASE","name":"Designing6","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":""},{"id":7,"process":"BASE","name":"Designing7","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":8,"process":"BASE","name":"Designing8","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":9,"process":"BASE","name":"Designing9","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":""},{"id":10,"process":"BASE","name":"Designing10","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":11,"process":"BASE","name":"Designing11","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":12,"process":"BASE","name":"Designing12","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":""},{"id":13,"process":"BASE","name":"Designing13","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":14,"process":"BASE","name":"Designing14","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":15,"process":"BASE","name":"Designing15","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":""},{"id":16,"process":"BASE","name":"Designing16","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":17,"process":"BASE","name":"Designing17","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":18,"process":"BASE","name":"Designing18","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":""},{"id":19,"process":"BASE","name":"Designing19","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"},{"id":20,"process":"BASE","name":"Designing20","date":"2019-06-11","description":"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.","download":"a.pdf"}]};

function getLocalPath (url) {
  const filename = url.split('/').pop();
  // feel free to change main path according to your requirements
  return `${RNFS.DocumentDirectoryPath}/${filename}`;
}

const url = 'http://10.0.2.2/api_test/';


class IdeaStage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
      opened_id:0,
    };
  }
 
  componentDidMount(){
    
    this.setState({ loading: false,
             dataSource: res.data,})

  //   axios.post('get_stages.php', {
  //     userid: global.userdata.id,
  //     project_id:global.current_project.id,
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

  onGotoImprove=(id)=>{
    NavigationService.navigate('ImproveIdeaSecond', {ideaId:id});
  }
  
  onGotoReport=(id)=>{
    NavigationService.navigate('ReportIssueThird', {ideaId:id});
  }

  onOpenIdea=(id)=>{
    if(id==this.state.opened_id)
      this.setState({opened_id:0});
    else
      this.setState({opened_id:id});
  }

  onDownload=(file)=>{

    let localFile=getLocalPath(url+file);
    
    const options = {
      fromUrl: url+file,
      toFile: localFile
    };
    RNFS.downloadFile(options).promise
      .then(() => {
        FileViewer.open(localFile).then(()=>{}).catch((e)=>{
          console.log(e);
        })
      })
      .catch(error => {
        Toast.show('Can\'t download file.', {
          position:Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      });
  }
    render() {
      let open_id=this.state.opened_id;
      if(this.state.loading)
      {
        return <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>;
      }else
      {
        return (
          
          <View style={styles.container1}>
            <View style={styles.container}>
               <ScrollView style={{width:'100%', height:'100%', paddingTop:5,}}>
                  {
                    this.state.dataSource.map((item) => {
                        if(open_id==0)
                        {
                        return (
                          <IdeaViewItem item={item} key={item.id} 
                            onGotoImprove={()=>{this.onGotoImprove(item.id)}} 
                            onGotoReport={()=>{this.onGotoReport(item.id)}}
                            onDownload={()=>{this.onDownload(item.download)}}
                            onOpenIdea={()=>{this.onOpenIdea(item.id)}} open={this.state.opened_id}
                            />
                        );
                       }
                       else
                       {
                         if(open_id==item.id)
                         {
                          return <IdeaViewItem item={item} key={item.id} 
                            onGotoImprove={()=>{this.onGotoImprove(item.id)}} 
                            onGotoReport={()=>{this.onGotoReport(item.id)}}
                            onDownload={()=>{this.onDownload(item.download)}}
                            onOpenIdea={()=>{this.onOpenIdea(item.id)}} open={this.state.opened_id}
                            />
                         }
                       }
                    })
                  }
               </ScrollView>
            </View>
          </View>
        )
      }
    }
}

export default withNavigation(IdeaStage);
