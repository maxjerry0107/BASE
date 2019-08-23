import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#eee',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
   },
  header: {
    flex:0.9,
    width:'100%',
    height:86,
    backgroundColor:'#F5FCFF',
    borderBottomColor:'#d5dCdF',
    borderBottomWidth:1,
    flexDirection:'row'
  },
  content: {
    flex:6, flexDirection:"column",
    width:'100%',
  },
  name: {
    fontSize: 18,
    color: "#4294D0",
    fontFamily:'Montserrat SemiBold',
  },
  job: {
    fontSize: 10,
    color:'#000',
    fontFamily: 'Montserrat SemiBold',
  },
  company: {
    fontSize: 8,
    color:'rgba(0,0,0,0.5)',
    fontFamily: 'Montserrat Regular',
  },
  tabBarIcon:{
    width:20,
    height:20,
  },
  tabBarIcon1:{
    width:20,
    height:16,
  },
  avatar: {
    marginLeft:20,
    width:22,
    height:22, 
    borderRadius:11,
    borderColor:'#ddd',
    borderWidth: 1,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent:'center'
  },
  avatar_text:{    
    fontSize: 10,
    color: "#4294D0",
    fontFamily:'Montserrat SemiBold',
    textAlign:'center',
  },
})


export const styles1 = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      height:92,
      padding: 10,
      marginLeft:21,
      marginRight:21,
      marginTop: 18,
      borderRadius: 10,
      elevation: 2,
      borderColor: 'grey',
      borderWidth:0.2,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent:'center',
  },
  toparea: {
    width:'100%',
    height:50,
    paddingTop:10,
    flexDirection: 'row',
    paddingBottom: 2,
  },
  namearea: {
      flex:1,
      paddingLeft:10,
      flexDirection:'column',
      justifyContent: 'center',
  },
  topbtnarea: {
      flex:1,
      justifyContent: 'center',
  },
  process:{
    fontSize:8,
    fontFamily:'Montserrat SemiBold',
    color: 'rgba(0,0,0,0.5)',
  },
  name:{
    fontSize:14,
    color: '#000',
    fontFamily:'Montserrat Bold',
  },
  process1:{
    fontSize:8,
    fontFamily:'Montserrat SemiBold',
    color: '#fff',
  },
  name1:{
    fontSize:14,
    fontFamily:'Montserrat Bold',
    color: '#fff',
  },
  evalbtn:{
    height:30,
    width:130,
    borderRadius: 75,
    backgroundColor:'#fff',
    alignContent: 'center',
    alignItems: 'center',    
    justifyContent:'center',
    marginLeft: 'auto'
  },
  addbtn:{
    marginLeft: 'auto',
    marginRight:10
  },
  evalbtntext:{
    fontSize:12,
    color: '#4294D0',
    fontFamily:'Montserrat SemiBold',
  },
  evaltext:{
    fontSize:10,
    color: '#fff',
    fontFamily:'Montserrat Regular',
  },
  addbtntext:{
    fontSize:30,
    color: '#4294D0',
  },
  bottomarea:{    
    borderTopColor: '#ccc',
    borderTopWidth:0.6,
    height:50,
    width:'95%',flexDirection:'row',
    alignContent: 'center',
    alignItems: 'center',    
    justifyContent:'center',
    alignSelf: 'center',
  },
  bottombtnarea:{
    flex:1,
    height:'100%',
    alignContent: 'center',
    alignItems: 'center',    
    justifyContent:'center',
  },
  bottombtntext:{
    fontSize:10,
    color:'#000',
    fontFamily:'Montserrat SemiBold',
  },
  bottombtns:{
    flex:1,flexDirection:'row',
    alignItems:'center',
    width:'100%'
  },
  bottombtn:{
    alignSelf:'center',
    flex:1,
  },
  bottombtnsimage:{
    marginRight:10,
  }
});