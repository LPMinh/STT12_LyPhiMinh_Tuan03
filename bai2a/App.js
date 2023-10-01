import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={{textAlign:'left',width:'90%',fontSize:'30px',fontWeight:'700'}}>LOGIN</Text>
        <View style={[styles.form]}>
          <View style={[styles.inputContainer]}>
            <Image style={[styles.icon]} source={require('./assets/user.png')} />
            <TextInput style={[styles.label]} placeholder='Name'></TextInput> 
          </View>
          <View style={[styles.inputContainer]}>
            <Image style={[styles.icon]} source={require('./assets/block.png')} />
            <TextInput style={[styles.label]} placeholder='Password'></TextInput> 
            <Image style={[styles.icon,styles.view]} source={require('./assets/eye.png')} />
          </View>

        </View>
        <TouchableOpacity style={[styles.button]}>

          <Text style={{color:'white',textAlign:'center',fontSize:'20px',fontWeight:'700'}}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center',width:'90%',fontSize:'20px',fontWeight:'700'}}>CREATE ACCOUNT</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eec100',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  form:{
    
    alignItems:'center',
    width:'100%',
    height:'150px',
    justifyContent:'space-between',
    
    
  },
  inputContainer:{ 
    flexDirection:'row',
    height:'60px',
    width:'90%',
    borderWidth:1.5,
    borderColor:'white',
    alignItems:'center',
    paddingLeft:'20px',
   
  },
  icon:{
    width:30,
    height:30,
    
  },
  label:{
    label:'Name',
    placeholderTextColor:'black',
    fontSize:20,
    marginLeft:'20px'
  },
  view:{
    display:'absolute',
    right:'-45%'
  },
  button:{
    
    backgroundColor:'black',
    width:'90%',
    height:'60px',
    alignSelf:'center',
    justifyContent:'center'
  }
  
});
