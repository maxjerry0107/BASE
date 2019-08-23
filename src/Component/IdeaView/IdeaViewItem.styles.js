import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft:16,
    marginRight:16,
    marginTop: 8,
    marginBottom: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
    borderColor: '#E7E8EA',
    borderWidth:0.2,
},
toparea: {
  flex: 1,
  height:55,
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent:'center',
  alignItems:'center'
},
topbtn:
{
  flex: 1,
  flexDirection: 'row',
  width:'100%',
},
namearea: {
  flex:1,
  paddingLeft:20,
  flexDirection:'column',
},
topbtnarea: {
  flex:1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: 20,
},
process:{
fontSize:8,
color: 'rgba(0,0,0,0.5)',
fontFamily:'Montserrat SemiBold',
},
name:{
fontSize:14,
color: '#000',
fontFamily:'Montserrat Bold',
},
evalbtn:{
  flex:1, flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft:'auto',
  marginRight:20,
},
addbtn:{
marginLeft: 'auto',
marginRight:10
},
date:{
fontSize:8,
color: 'rgba(0,0,0,0.5)',
fontFamily:'Montserrat Regular',
},
description:{
  marginTop:10,
fontSize:12,
color: 'black',
fontFamily:'Montserrat Regular',
},
addbtntext:{
fontSize:30,
color: '#4294D0',
},
bottomarea:{
},
descriptionArea:{
  flex:1,flexDirection:'column',
  padding:20,
  borderBottomColor:'rgba(112,112,112,1)',
  borderBottomWidth:0.5,
  },
  bottomButtonArea:{
    flexDirection:'column', height:190,
    paddingHorizontal:15,
    borderColor: '#E7E8EA',
    borderWidth:0.2,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor:"#eee",
    justifyContent:'space-evenly'
    },bottomButtonArea1:{
      height:130,
      flexDirection:'column',
      paddingHorizontal:15,
      borderColor: '#E7E8EA',
      borderWidth:0.2,
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
      backgroundColor:"#eee",
      justifyContent:'space-evenly'
      },
    downloadbtn:{
      flex:1,flexDirection:'row',
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      width:'100%',
      borderRadius:20,
      borderColor:'rgba(0,0,0,0.1)',
      borderWidth:1
    },
    improvebtn:{
      flex:1,flexDirection:'row',
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      width:'100%',
      borderRadius:10,
      borderColor:'rgba(66,148,208,0.3)',
      borderWidth:1
    },
    reportbtn:{
      flex:1,flexDirection:'row',
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      width:'100%',
      borderRadius:10,
      borderColor:'#D0424D',
      borderWidth:1
    },
    btnArea:{
      height:50,
      padding:3,
    },
    bottombtns:{
      flex:1,
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      width:'100%'
    },
    bottombtnsimage:{
      position: 'absolute', 
      left: 30, 
      height:15,
      width:15,
    },
    bottombtntext1:{
      fontSize:10,
      color:'#000',
      fontFamily:'Montserrat SemiBold',
    },
    bottombtntext2:{
      fontSize:13,
      color:'#4294D0',
      fontFamily:'Montserrat SemiBold',
    },
    bottombtntext3:{
      fontSize:13,
      color:'#D0424D',
      fontFamily:'Montserrat SemiBold',
    },
})
