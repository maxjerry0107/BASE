import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  container: {
    flex:1,      
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    width:'100%',
  },
  mainArea: {
    flex:1,      
    flexDirection: 'column',
    width:'100%',
    alignContent: 'center',
    alignItems: 'center',    
    justifyContent:'center',
  },
  emailInput: {
    width:'100%',height:50,
    borderBottomWidth: 1,
    fontSize: 18,
    fontFamily:'Montserrat SemiBold',
    paddingLeft: 20,
    position:'absolute',
    bottom:100,
    borderBottomColor:'grey'
  },
  button: {
      width: '90%',
      position:'absolute',
      bottom:0,
      height:60,
      borderRadius: 75,
      backgroundColor:'#4294D0',
  },
  btnText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",fontFamily: 'Montserrat SemiBold',
     textAlignVertical:'center',
    height:'100%'
  },
  image_button:{flex:1, flexDirection:'row',
  alignItems:'center',
  alignContent:'center',
  justifyContent:'center',
  width:'100%'},

})
