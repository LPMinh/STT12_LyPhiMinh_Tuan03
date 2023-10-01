import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
    style={styles.container}
    colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
  >
        <Image source={require('./assets/block.png')} style={{width: '105px', height: '117px',paddingTop: '150px'}} />
        
            <Text style={[styles.text1]}>FORGET PASSWORD</Text>
        
       
            <Text style={[styles.text2]}>Provide your account’s email for which you want to reset your password</Text>
      
        <View style={[ styles.inputContainer]}>
            <Image source={require('./assets/mail.png')} style={styles.icon} />

            <TextInput style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'/>
        </View>
        <View style={[styles.containerButton]}>
            <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
        </View>
        
        
    </LinearGradient>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efdf',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width: '305px',
    height: '45px'
  },
  
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
   
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 124,
    paddingVertical: 10,
    borderRadius: 1,
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1:{
    width: '140px', height: '58px' ,fontFamily: 'Roboto',fontSize: '25px',
    fontWeight: '700',
    lineHeight: '29px',
    letterSpacing: '0em',
    textAlign: 'center',
  },
  text2:{
     width: '302px',
     height: '53px',
     textAlign: 'center',
     fontFamily: 'Roboto',
     fontSize: '15px',
     fontWeight: '700',
     lineHeight: '18px',
     letterSpacing: '0em'
    

  }
});
