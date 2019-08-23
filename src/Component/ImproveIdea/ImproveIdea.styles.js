import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  topHeaderSubTitle:{
    
    color: '#4294D0',
    textAlign: 'center',
    fontFamily:'Montserrat SemiBold',
    fontSize: 10,
  },

  topHeaderTitle:{
    
    color: 'black',
    textAlign: 'center',
    fontFamily:'Montserrat Bold',
    fontSize: 20,
    marginBottom:5,
  },
  header: {
    height:70,
    width:'100%',
    flexDirection:'row',
    backgroundColor:'#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor:'#ddd',
    borderTopWidth:1,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
  },
  bottom: {
    width:'100%',    
    height:60,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  content: {
    flex:6, flexDirection:"column",
    width:'100%',
    paddingTop: 20,
  },
  stageArea:{
    flex:8,
    flexDirection:"column",
    width:'100%',
  },
  stageAreaActive:{
    flex:1.5,
    flexDirection:"column",
    width:'100%',
  },
  operationArea:{
    flex:1,
    flexDirection:"column",
    width:'100%',
  },
  operationAreaActive:{
    flex:7.5,
    flexDirection:"column",
    width:'100%',
  },
  mainStageArea:{
    //   flex:7.5,
       alignItems: 'stretch',
       justifyContent: 'flex-start',
       flexDirection:'column',
       backgroundColor:'#F8F8F8',
     },
     mainOperationArea:{
       alignItems: 'stretch',
       justifyContent: 'flex-start',
       flexDirection:'column',
       backgroundColor:'#F8F8F8',
     },
     headerText1:{
       fontSize:14,
       color: '#4294D0',
       fontFamily:'Montserrat Bold',
     },
  phaseArea:{
    flex:1,
    flexDirection:"column",
    width:'100%',
  },
  headerArea:{
    height:30,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentArea:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectprocess:{
    fontSize:8,
    fontFamily:'Montserrat Regular',
    color: '#000',
  },
  headerText:{
    fontSize:14,
    color: '#4294D0',
    fontFamily:'Montserrat ExtraBold',
  },
  mandatory:{
    position:'absolute', right:30,top:0, color:'#000', fontFamily:'Montserrat Regular', fontSize:6
  },
  projectname:{
    fontSize:14,
    color: '#000',
    fontFamily:'Montserrat ExtraBold',
  },
  namearea: {
      flex:1,
      paddingLeft:30,
      flexDirection:'column',
  },
  topbtnarea: {
      flex:1,
  },
  bottombutton: {
      height: '100%',
      backgroundColor:'#4294D0',borderBottomLeftRadius:10, borderBottomRightRadius:10, 
  },
  bottombuttonbtnText: {
    fontSize: 15,
    textAlign: "center",fontFamily: 'Montserrat SemiBold',
     textAlignVertical:'center',letterSpacing: 1,
   height:'100%'
  },
  
  image_button:{flex:1, flexDirection:'row',
  alignItems:'center',
  alignContent:'center',
  justifyContent:'center',
  width:'100%'},

  ideaTextTouch:{
    flexDirection:'row',
    margin:5,
    padding:5,
    paddingLeft:20, 
    flex:1,
  },
  content_2:{
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection:'column',
    backgroundColor:'#F8F8F8',
  },
  mainOperationArea:{
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection:'column',
    backgroundColor:'#F8F8F8',
  },
  mainPhaseArea:{
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection:'column',
    backgroundColor:'#F8F8F8',
  },
  ideaText:{
    color:'#000',
     fontSize:12, 
     fontFamily:'Montserrat Bold'
  },
  description:{
    color:'#000',
     fontSize:12, 
     fontFamily:'Montserrat SemiBold',
     width:'100%',
     height:'100%',
     paddingLeft:20,
     paddingRight:20,
     textAlignVertical:'top',
  }
});