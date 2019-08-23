import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',paddingHorizontal:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    justifyContent:'flex-start'
  },

  container1:{
     flex:1,    
    // flexDirection: 'column',
    // backgroundColor: '#F8F8F8',
    // justifyContent: 'center',
    // alignItems: 'center'
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
    height:56,
    flex:1,
    flexDirection:'row',
    backgroundColor:'#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionArea: {
    width:'100%',
    height:80,
    backgroundColor:'#F5FCFF',
    borderColor:'#dddddd',
    borderBottomWidth:1,
    paddingBottom:20,
  },
  bottom: {
    width:'100%',    
    height:60,borderBottomLeftRadius:10, borderBottomRightRadius:10, 
  },
  content: {
    flex:6, flexDirection:'column',
    width:'100%',
    paddingTop: 20,
  },
  content_1: {
    flex:9, flexDirection:'column',
    width:'100%',
  },
  content_2:{
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection:'column',
    backgroundColor:'#F8F8F8',
  },
  content1: {
    flex:6, flexDirection:'column',
    width:'100%',
  },
  stageArea:{
    flex:10,
    flexDirection:'column',
    width:'100%',
  },
  stageAreaActive:{
    flex:1.5,
    flexDirection:'column',
    width:'100%',
  },
  mainPhaseArea:{
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection:'column',
    backgroundColor:'#F8F8F8',
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
  ideaName:{
    marginTop:2,
    fontSize:14,
    color: '#000',
    fontFamily:'Montserrat ExtraBold',
  },
  headerText:{
    fontSize:14,
    color: '#4294D0',
    fontFamily:'Montserrat Bold',
  },
  headerText1:{
    fontSize:14,
    color: '#D0424D',
    fontFamily:'Montserrat ExtraBold',
  },
  mandatory:{
    position:'absolute', right:30,top:0, color:'#000', fontFamily:'Montserrat SemiBold', fontSize:8
  },
  projectname:{
    marginTop:5,
    fontSize:8,
    fontFamily:'Montserrat Bold',
    color: 'rgba(0,0,0,0.3)',
  },
  namearea: {
      flex:5,
      paddingLeft:30,
      flexDirection:'column',
  },
  topbtnarea: {
      flex:1,
  },
  bottombutton: {
      height: '100%',
      backgroundColor:'#4294D0',
  },
  bottombutton1: {
      height: '100%',
      backgroundColor:'#4294D0',borderBottomLeftRadius:10, borderBottomRightRadius:10, 
  },
  bottombuttonbtnText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',fontFamily: 'Montserrat SemiBold',
    textAlignVertical:'center',letterSpacing: 1,
    height:'100%'
  },
  bottombuttonbtnText1: {
    fontSize: 13,
    textAlign: 'center',
    color: '#fff',fontFamily: 'Montserrat SemiBold',
    textAlignVertical:'center',letterSpacing: 2,
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
    width:'100%', 
  },
  ideaText:{
    color:'#000',
     fontSize:12, 
     fontFamily:'Montserrat ExtraBold'
  },
  description:{
     color:'#000',
     fontSize:10.5, 
     fontFamily:'Montserrat Regular',
     width:'100%',
     paddingLeft:30,
     paddingRight:30,
     lineHeight:14,
     textAlignVertical:'top',
  },

  scaleButtonArea:{
    flex:1.3,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center'
  },

  scaleTextArea:{
    flex:2.3,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    marginTop:20,
  },
  scaleArea:{
    flex:4,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection:'column',
    marginTop:20,
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
  scaleButtonText:{
    padding:2,
    paddingHorizontal:12,
    fontSize:14,
    borderRadius:5,
    fontFamily:'Montserrat SemiBold',
    marginLeft: 10,
    marginRight: 10,
  },
  scaleTypeText:{
    fontSize:12,
    fontFamily:'Montserrat ExtraBold',
    marginTop: 5,
    color:'#000'
  },
  scaleValueText:{
    fontSize:36,
    fontFamily:'Montserrat Bold',
    color:'#4294D0',
  },
  hourType:{
    fontFamily:'Montserrat Bold', color:'#000', fontSize:12, marginHorizontal:10,marginVertical:15,
  }
});