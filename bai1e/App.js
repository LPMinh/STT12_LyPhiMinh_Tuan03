import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
        <Text style={[styles.header]}>REGISTER</Text>
        <View style={[styles.containerForm]}>
            <View style={[styles.containerInput]}>
                <TextInput style={[styles.input]} placeholder='Name' placeHo></TextInput>
            </View>
            <View style={[styles.containerInput]}>
                <TextInput style={[styles.input]} placeholder='Phone'></TextInput>
            </View>
            <View style={[styles.containerInput]}>
                <TextInput style={[styles.input]} placeholder='Email'></TextInput>
            </View>
            <View style={[styles.containerInput]}>
                <TextInput style={[styles.input]} placeholder='Password'></TextInput>
                <Image style={{width:'30px',height:'30px',marginRight:'20px'}} source={require('./assets/eye.png')}></Image>
            </View>
            <View style={[styles.containerInput]}>
                <TextInput style={[styles.input]} placeholder='Birthday'></TextInput>
            </View>
            <View style={[styles.radioGroup]}>
                <View style={[styles.radioContainer]} >
                      <TouchableOpacity style={[styles.radio]}></TouchableOpacity>
                      <Text style={[styles.textRadio]}> Male </Text>
                </View>
                <View style={[styles.radioContainer]} >
                      <TouchableOpacity style={[styles.radio]}></TouchableOpacity>
                      <Text style={[styles.textRadio]} > Female </Text>
                </View>
            </View>
            
        </View>
        <TouchableOpacity style={[styles.button]}>REGISTER</TouchableOpacity>
            <Text>when you agree your terms and condition</Text>
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8EFDF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerForm:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width:'90%',
    height:'70%',
  },
  containerInput:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    backgroundColor:'#cae1d1',
    height:'50px',
    
    
  },
  input:{
    width:'100%',
    paddingLeft:'10px',
    height:'100%',
    fontSize:'20px'
  },
  header:{
    textAlign:'center',
    fontSize:'30px',
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    paddingVertical:'30px',
    height:'10%',
   
  },
  radioGroup:{
    flexDirection:'row',
    width:'100%'
  },
  radioContainer:{
    flexDirection:'row',
    marginLeft:'20px'
  },
  radio:{
    width:'30px',
    height:'30px',
    borderWidth:'3px',
    borderRadius:'50%'
  },
  textRadio:{
    fontSize:'20px',
    marginLeft:'10px'
  },
  button:{
    width:'90%',
    textAlign:'center',
    backgroundColor:'#c34e3b',
    paddingVertical:'10px',
    fontSize:'20px',
    fontWeight:'bold',
    color:'#D8EFDF',
   
  }
  
  
  
    
});
