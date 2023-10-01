import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,Image,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';





export default function App() {
  return (
    <LinearGradient
    style={styles.container}
    colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
  >
      <View style={[styles.container, styles.style1]}>
        <Image source={require('../bai1a/assets/Ellipse8.png')} style={styles.Elipse8} />
      </View>
      <View style={[styles.container, styles.style2]}>
        <Text style={styles.text1}>GROW YOUR BUSINESS</Text>
        <Text style={styles.text2}>We will help you to grow your business using online server</Text>
      </View>
      <View style={[styles.container, styles.style3]}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ textAlign: 'center', fontFamily: 'Roboto', fontWeight: '700' }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ textAlign: 'center', fontFamily: 'Roboto', fontWeight: '700' }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, styles.style4]}>
        <Text style={styles.text3}>HOW WE WORK</Text>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  text1:{
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 29,
    letterSpacing: 0,
    textAlign: 'center',  
     height:58,
     width:189
    
  },
  text2:{
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    width: 302,
    height: 20,
    paddingVertical: '50px'
    
    
  },
  text3:{
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    alignItems: 'flex-end'

  },
  style1 :{
     
      justifyContent : "center",
      alignItems: "center",
      paddingVertical: '110px'
      
  },
  style2 :{
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '50px'
   
    
  },
  style3 :{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
 style4:{
  justifyContent: 'flex-start',
  alignItems: 'center'
 },
  Elipse8:{
    width: '100px',
    height: '100px'
    
  },
  button:{
    flexDirection:'row',
     justifyContent: 'center',
     alignItems: 'center',
     width: 48,
     height: 42,
   
     backgroundColor:'yellow',
     paddingHorizontal:60

  }
});