import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,Image,TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';




export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#00CCF9', '#00CCF9' ]}
  
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}>
       <Image source={require('./assets/Ellipse8.png')} style={styles.logo} />
       <Text style={styles.header}>GROW YOUR BUSINESS</Text>
       <Text style={styles.context}>We will help you to grow your business using online server</Text>
       <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button}>LOGIN</TouchableOpacity>
           <TouchableOpacity style={styles.button}>SIGN UP</TouchableOpacity>

       </View>
    </LinearGradient>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems:'center'
    
  },
  logo:{
      width:150,
      height:150
  },header:{
      fontSize:25,
      fontWeight:'700',
      width:'70%',
      textAlign:'center',
      fontFamily:'Roboto'
  },
  context:{
      fontSize:16,
      fontWeight:'bold',
      width:'80%',
      textAlign:'center',
      fontFamily:'Roboto'
  },buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'80%'
  },
  button:{
      backgroundColor:'#E3C000',
      width:120,
      height:40,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      fontFamily:'Roboto',
      fontWeight:'700',
      
  }
  
});