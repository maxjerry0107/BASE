import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex:1.1,
    width:'100%',
    backgroundColor:'#f0f0f0',
    borderBottomColor:'#d0d0d0',
    borderBottomWidth:1,
  },
  avatar: {
    backgroundColor:'#fff',
    width:80,
    height:80, 
    borderRadius:50,
    borderColor:'#d0d0d0',
    borderWidth: 1,
    borderBottomColor:'#f0f0f0',
    borderBottomWidth: 1,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent:'center'
  },
  avatar_tabbar_active: {
    width:25,
    height:25, 
    borderRadius:13,
    borderColor:'#fff',
    borderWidth: 2,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent:'center'
  },
  avatar_text_tabbar_active:{    
    fontSize: 12,
    color: "#fff",
    fontFamily:'Montserrat SemiBold',
    textAlign:'center',
  },
  avatar_tabbar_inactive: {
    width:25,
    height:25, 
    borderRadius:12,
    borderColor:'rgba(255,255,255,0.4)',
    borderWidth: 2,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent:'center'
  },
  avatar_text_tabbar_inactive:{    
    fontSize: 12,
    color:'rgba(255,255,255,0.4)',
    fontFamily:'Montserrat SemiBold',
    textAlign:'center',
  },
  avatar_text:{    
    fontSize: 37,
    color: "#4294D0",
    fontFamily:'Montserrat Regular',
    textAlign:'center',
  },
  content: {
    flex:6, flexDirection:"column",
    width:'100%',
  },
  nameArea: {
    flex:0.6,
    flexDirection:'column',
    paddingTop: '13%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  editArea: {
    flex:3,
    flexDirection:'column',
    marginTop: 10,
    marginBottom: 10,
  },
  logout: {
    flex:2,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 13,
    color: "black",
    fontFamily:'Montserrat SemiBold',
  },
  job: {
    fontSize: 10,
    color: "#4294D0",
    marginTop:5,
    fontFamily:'Montserrat SemiBold',
  },
  inputAgency:
  {
    flex:1,
    fontSize: 13,
    padding:5,
    width:'100%',
    fontFamily:'Montserrat Regular',
    textAlign: 'right' ,
    paddingRight:20,
    paddingLeft:40,
  },
  tabBarIcon:{
    width:20,
    height:20,
  },
  tabBarIcon1:{
    width:20,
    height:16,
  },
  SectionStyle:{
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor:'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    marginTop:0,
  }
})
