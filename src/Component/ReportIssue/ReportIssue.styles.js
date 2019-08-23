import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius:10, borderBottomRightRadius:10, 
  },

  topHeaderSubTitle:{
    
    color: '#D0424D',
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
    borderTopColor:'#eee',
    borderTopWidth:1,
    borderBottomColor:'#ccc',
    borderBottomWidth:0.2,
  },
  bottom: {
    width:'100%',    
    height:60,borderBottomLeftRadius:10, borderBottomRightRadius:10, 
  },
  content: {
    flex:6, flexDirection:'column',
    width:'100%',
    paddingTop: 30,
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
  projectprocess:{
    fontSize:8,
    fontFamily:'Montserrat Regular',
    color: '#000',
  },
  headerText:{
    fontSize:14,
    color: '#4294D0',
    fontFamily:'Montserrat Bold',
  },
  headerText1:{
    fontSize:14,
    color: '#D0424D',
    fontFamily:'Montserrat Bold',
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
      backgroundColor:'#4294D0',
  },
  bottombutton1: {
      height: '100%',
      backgroundColor:'#D0424D',borderBottomLeftRadius:10, borderBottomRightRadius:10, 
  },
  bottombuttonbtnText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat Bold',
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
  },

  scaleButtonArea:{
    flex:1,
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
    fontFamily:'Montserrat SemiBold',
    marginLeft: 10,
    marginRight: 10,
    borderWidth:1,
  },
  scaleButtonText1:{
    padding:2,
    paddingHorizontal:7,
    fontSize:14,
    fontFamily:'Montserrat SemiBold',
    marginLeft: 10,
    marginRight: 10,
    borderWidth:1,
    borderColor:'#D0424D',
    color:'#D0424D',
  },
  scaleTypeText:{
    fontSize:20,
    fontFamily:'Montserrat Regular',
    marginTop: 5,
    color:'#000'
  },
  scaleValueText:{
    fontSize:40,
    fontFamily:'Montserrat Bold',
    color:'#D0424D',
  },
});