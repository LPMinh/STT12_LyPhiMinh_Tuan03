import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }} style={styles.container}>
      
      <View style={[styles.header]}>
          <Text style={{fontSize:'80px',fontWeight:'bold'}}>CODE</Text>
          <Text style={{fontSize:'24px',fontWeight:'bold'}}>VERIFICATION</Text>
          <Text style={{fontSize:'18px',fontWeight:'bold',textAlign:'center'}}>Enter ontime password sent on ++849092605798</Text>
      </View>
      <View style={[styles.codeContainer]}>
          <TextInput style={[styles.cell]}></TextInput>
          <TextInput style={[styles.cell]}></TextInput>
          <TextInput style={[styles.cell]}></TextInput>
          <TextInput style={[styles.cell]}></TextInput>
          <TextInput style={[styles.cell]}></TextInput>
          <TextInput style={[styles.cell]}></TextInput>

      </View>
      <TouchableOpacity style={[styles.button]}>VERIFY CODE</TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
    width:'90%'
    
  
  },
  codeContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:'75%'
  },
  cell:{
    width:'50px',
    height:'50px',
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    borderWidth:1,
  },
  button:{
    backgroundColor:'#e3c000',
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:15,
    fontSize:20,
    fontWeight:'bold',
   marginTop:20,
   marginBottom:80
  }
});
