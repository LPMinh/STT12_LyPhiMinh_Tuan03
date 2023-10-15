import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
export default function screen2({navigation,route}) {
  const {selectedProduct} = route.params || {};
   var products=[
      {
          id:0,
          image:require('../assets/vs_silver.png'),
          price:1790000,
          name:'Điện Thoại Vsmart Joy 3',
          conds:'Chính hãng',
          color:'Trắng',
          manu:'Vsmart',
      },
      {
          id:2,
          image:require('../assets/vs_blue.png'),
          price:1790000,
          name:'Điện Thoại Vsmart Joy 3',

          conds:'Chính hãng',
          color:'Xanh',
          manu:'Vsmart',
      },
      {
          id:3,
          image:require('../assets/vs_black.png'),
          price:1790000,
          name:'Điện Thoại Vsmart Joy 3',

          color:'Đen',
          manu:'Vsmart',
          conds:'Chính hãng',

      },
      {
          id:1,
          image:require('../assets/vs_red.png'),
          price:1790000,
          name:'Điện Thoại Vsmart Joy 3',
          color:'Đỏ',
          manu:'Vsmart',
          conds:'Chính hãng',

      }
   ]
   const [product,setProduct]=useState(selectedProduct)

   const [name,setName]=useState(selectedProduct.name)
   const [image,setImage]=useState(selectedProduct.image)
   const [color,setColor]=useState()
   const [price,setPrice]=useState()
   const [manu,setManu]=useState()
   const [conds,setConds]=useState(selectedProduct.conds)
   const [titleCorlor,setTitleColor] = useState("");
   const [titleManu,setTitleManu] = useState("");
   useEffect(() => {
    if (selectedProduct) {
      setImage(selectedProduct.image);
      setName(selectedProduct.name);
      setPrice(formatVND(selectedProduct.price));
      setConds(selectedProduct.conds);
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);
   const handleColorSelection = (selectedProduct) => {
    setProduct(selectedProduct);
    setImage(selectedProduct.image);
    setColor(selectedProduct.color);
    setPrice(formatVND(selectedProduct.price));
    setManu(selectedProduct.manu);
    setConds(selectedProduct.conds);
    setTitleColor("Màu: ");
    setTitleManu("Cup cấp bởi: ")
    
  };
  const formatVND = (amount) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
  
    return formatter.format(amount);
  };

    return (
      <View style={styles.container}>
          <View style={styles.product_container}>
              <View style={styles.image_container}>
                  <Image source={image}  style={{width:null,height:'100%',resizeMode:"contain"}}/>
              </View>
              <View style={[styles.info]}>
                    <Text style={{width:'100%'}}>{name}</Text>
                    <Text style={{width:'100%'}} >{conds}</Text>
                    <View style={[{width:'100%',flexDirection:'row'}]}>
                          <Text>{titleCorlor}</Text><Text style={{fontWeight:'bold'}}>{color}</Text>
                    </View>
                    <View style={[{width:'100%',flexDirection:'row'}]}>
                    <Text>{titleManu}</Text><Text  style={{fontWeight:'bold'}}>{manu}</Text>
                    </View>                   
                    <Text  style={{fontWeight:'bold',fontSize:20}}>{price}</Text>
              </View>
  
          </View>
          <View style={styles.content_color_container}>
              <Text style={{textAlign:'left',width:'100%',padding:10}}>Chọn một màu bên dưới</Text>
              <View style={styles.color_container}>
                <TouchableOpacity onPress={() => handleColorSelection(products[0])} style={{backgroundColor:'#C5F1FB',padding:'40px'}}>
                      
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => handleColorSelection(products[3])}  style={{backgroundColor:'#F30D0D',padding:'40px'}}>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => handleColorSelection(products[2])} style={{backgroundColor:'#000000',padding:'40px'}}>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => handleColorSelection(products[1])} style={{backgroundColor:'#234896',padding:'40px'}}>
                </TouchableOpacity>
                 
                
              </View>
              <TouchableOpacity style={[styles.button_finish]} onPress={() => navigation.navigate('screen1', { selectedProduct: product })}>
  
                  <Text style={[{color:'white',fontWeight:'bold'}]}>Xong</Text>
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
    product_container:{
      width:'100%',
      height:'20%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start',
    },
    
    textName:{
      
      fontFamily:'Roboto',
      fontSize:15,
      fontWeight:'400',
      textAlign:'left',
      marginTop:20,
    },
    content_color_container:{
      width:'100%',
      height:'80%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'grey'
     
    },
    color_container:{
      width:'100%',
      height:'80%',
      
      justifyContent:'space-between',
      alignItems:'center',
      
    },
    button_finish:{
      width:'90%',
      height:'10%',
      backgroundColor:'#1952E2',
      borderRadius:6,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    },
    info:{
      width:'65%',
      height:'100%',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      

    }
    ,
    image_container:{
      width:'35%',
      height:'100%',
      justifyContent:'center',
     
    },
  
  });
