import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  tabbarHeaderView:{
    backgroundColor:'#fff', borderWidth:0, borderColor:'#f00', flexDirection:'row', flex:1, justifyContent: 'center', alignItems: 'center',elevation:0,
  },
  tabbarHeaderText:{
    fontSize:15, 
    fontFamily:'Montserrat SemiBold',color:'#4294D0', 
  },
  tabbarHeaderText1:{
    fontSize:15, 
    fontFamily:'Montserrat Regular',color:'rgba(0,0,0,0.7)',
  },
  tabbarHeaderNumberArea:{
    marginLeft: 5,
    width:21,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor:'#4294D0',
    borderWidth: 1,
    borderColor: '#4294D0',
    borderRadius: 10,
  },
  tabbarHeaderNumberArea1:{
    marginLeft: 5,
    width:21,
    justifyContent: 'center',
    alignItems: 'center',    
    borderWidth: 1.5,
    backgroundColor:'white',
    borderColor: '#4294D0',
    borderRadius: 10,
  },
  tabbarHeaderNumber:{
    fontSize:13, color:'white',
    fontFamily:'Montserrat SemiBold',
  },
  tabbarHeaderNumber1:{
    fontSize:13, color:'#4294D0',
    fontFamily:'Montserrat SemiBold',
  }
})
