import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput ,Image,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      <Text style={{padding:'50px',fontSize:'30px'}}>LOGIN</Text>
      <View style={[ styles.fromContainer]}>

          <View style={[ styles.inputContainer]}>
              <TextInput style={[styles.input]}
                  placeholder="Email"
                />
          </View>
          <View style={[ styles.inputContainer]}>
              <TextInput style={[styles.input]}
                  placeholder="Password"
                />
              <Image source={require('./assets/eye.png')} style={[styles.icon]} />
          </View>
      </View>
      <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.text]}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.help}>
        <Text style={styles.text1}>When you agree to terms and conditions</Text>
        <Text style={styles.text1}>For got your password</Text>
        <Text style={styles.text1}>Or login with</Text>
      </View>
      <View style={styles.social}>
        <TouchableOpacity style={[styles.buttonsocial]}>
          <Image source={require('./assets/fb.png')} style={[styles.iconsocial]} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonsocial]} >
          <Image source={require('./assets/zalo.png')} style={[styles.iconsocial]} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonsocial]}>
          <Image source={require('./assets/gg.png')} style={[styles.iconsocial]} />
        </TouchableOpacity>
      </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efdf',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainer:{
    
    justifyContent:'space-between',
    alignItems:'space-between',
    borderWidth:1, 
    borderColor:'black',
   // width:'80%',
   height:60,
      
    
  },
  input:{
   
    alignItems:'flex-start',
    width:'100%',
    height:'100px',
    paddingLeft:'10px',
    
    
  },  
  fromContainer:{
    flex:1,
    width:'90%',
    height:'200px',
    justifyContent:'space-evenly'
    
  },
  icon:{
    position:'absolute',
    height:'20px',
    width:'20px',
    marginLeft:'90%',
    marginTop:'20px',
  },
  button:{
    backgroundColor:'red',
    width:'80%',
    paddingVertical:10,
    marginTop:'30px'
  },
  text:{
    color:'white',
    textAlign:'center',
    fontSize:20,
  },
  help:{
    flex:1,
   
    alignItems:'center',
    width:'80%',
  },
  text1:{
    padding:'10px'
  },
  iconsocial:{
    width:'100%',
    height:'100%'
  },
  social:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
  },
  buttonsocial:{
    width:'120px',
    height:'60px',
    borderRadius:'50%',
    alignItems:'center',
    justifyContent:'center'
  }
  
    
});
