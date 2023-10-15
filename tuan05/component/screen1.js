import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
export default function screen1({ navigation,route}) {
  var product={
    image:require('../assets/vs_blue.png'),
    name:'Điện Thoại Vsmart Joy 3',
    price:'1790000',
    conds:'Hàng Chính hãng'
  }
  const [productCurrent,setProduct]=useState(product);
  const formatVND = (amount) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
  
    return formatter.format(amount);
  };
  const { selectedProduct } = route.params || {};
  const [image, setImage] = useState(product.image);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(formatVND(product.price));
  const [conds, setConds] = useState(product.conds);
 

  useEffect(() => {
    if (selectedProduct) {
      setImage(selectedProduct.image);
      setName(selectedProduct.name);
      setPrice(formatVND(selectedProduct.price));
      setConds(selectedProduct.conds);
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image source={image}  style={{width:'100%',height:'100%'}}/>

        </View>
        <View style={[styles.content_container]}>
          <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start'}}>
          <Text style={[styles.textName]}>{name}-</Text>
          <Text style={[styles.textName]}>{conds}</Text>

          </View>
          <View style={[styles.star_container_all]}>
              <View style={[styles.star_container]}>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
                  <Image source={require('../assets/star.png')}  style={{width:'23px',height:'25px'}}/>
              </View>
              <Text>(Xem 828 đánh giá)</Text>
          </View>
          <View style={[styles.price_container]}>
            <Text style={[styles.textPrice]}>{price}</Text>
            <Text style={[styles.textPriceOld]}>1.990.000đ</Text>
          </View>
          <View style={[{width:'100%',flexDirection:'row'}]}>
            <Text style={[{color:'#FA0000',fontFamily:'Roboto',fontWeight:'700'}]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require('../assets/Group 1.png')}  style={{width:'15px',height:'15px',marginLeft:10}}/>
          </View>
          <TouchableOpacity style={[styles.button_color]} onPress={() => navigation.navigate('screen2', { selectedProduct: productCurrent })}>
            <Text style={[styles.button_text]}>4 MÀU-CHỌN MÀU</Text>
            <Image source={require('../assets/vector.png')}  style={{width:'15px',height:'15px',marginLeft:10,position:'absolute',right:10}}/>

          </TouchableOpacity>

          <TouchableOpacity style={[styles.button_choose]}>
            <Text style={[{color:'white',fontWeight:'bold'}]}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_container:{
    width:'90%',
    height:'60%'
  },
  textName:{
   
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight:'400',
    textAlign:'left',
  },
  star_container_all:{
    width:'100%',
    height:'10%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  star_container:{
    width:'40%',
    height:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  price_container:{
    width:'100%',
    height:'10%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  textPrice:{
    fontFamily:'Roboto',
    fontSize:20,
    fontWeight:'700',
    textAlign:'center',
   
  },
  textPriceOld:{
    fontFamily:'Roboto',
    fontSize:15,
    fontWeight:'400',
    textAlign:'center',
    color:'#9B9B9B',
    textDecorationLine:'line-through'
  },
  content_container:{
    width:'90%',
    height:'40%',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center'
  },
  button_color:{
    width:'100%',
    height:'20%',
    backgroundColor:'#FFFFFF',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'grey',
    borderWidth:1
    
  },
  button_choose:{
    width:'100%',
    height:'20%',
    backgroundColor:'#EE0A0A',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end'
  },
  
  
});