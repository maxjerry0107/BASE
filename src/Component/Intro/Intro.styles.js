import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    width:'100%',
  },
  causualArea: {
      flex:1,
      flexDirection: 'column',
      alignItems:'center',
      alignContent:'center',
      width:'100%'
  },
  imageArea:{
    flex:1,
    width:'100%'
  },
  textArea:{
    flex:.3, 
    flexDirection:'column',
     alignItems:'center',
     alignContent:'center',
     justifyContent:'center',
     width:'100%'
  },
  biggerText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontFamily:'Montserrat Bold',
    color:'#4294D0',
  },
  smallerText:{
    width:'100%', 
    fontSize: 10,
    textAlign:'center', fontFamily:'Montserrat SemiBold',
    color:'black',
    margin: 10,
  },
  buttonArea:
  {
      flex:.1,      
        flexDirection: 'column',
  },

  image_button:{flex:1, flexDirection:'row',
  alignItems:'center',
  alignContent:'center',
  justifyContent:'center',
  width:'100%'},

  btnText: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",fontFamily: 'Montserrat SemiBold',
    textAlignVertical:'center',
    height:'100%',
  },
  
  button: {
      height: '100%',
      backgroundColor:'#4294D0',
  },
  intro_image:{
    width: undefined,
    height: '100%', resizeMode:'cover'
  }
})
