import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert, Platform} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import Writer from './components/Writer'

const TAMANHO_CIRCULO = 100

const Circulo = ({onPress}) =>{
  return(
    <View style={[StyleSheet.absoluteFillObject, styles.containerCirculo]}>
      <Text style={styles.titulo}>Animações em React</Text>
      <Writer/>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.circulo]}>
        <AntDesign name='arrowright' size={28} color={"#8c4227"}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function App(){

  const onPress = () =>{
    let mensagem = "você clicou! "
    Platform.OS === 'web' ? alert(mensagem) : Alert.alert('aviso',
                                                          mensagem,
                                                          [{
                                                            text: 'Cancelar',
                                                            onPress: () => console.log("precionou o cancelar"),
                                                            style:'cancel'
                                                          },
                                                          {
                                                            text:'Ok', 
                                                            onPress: ()=> console.log('pressionou OK')
                                                          }],
                                                            {
                                                              cancelable: false 
                                                            }
                                                          )
  }

  return(
    <View style={styles.container}>
      <Circulo onPress={onPress}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#f2cdac",
    alignItems:'center'
  },
  titulo:{
    fontSize:25,
    color:"#d99873",
    paddingTop:20
  },
  containerCirculo:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:100
  },
  circulo:{
    backgroundColor:"#d99873",
    width:TAMANHO_CIRCULO,
    height:TAMANHO_CIRCULO,
    borderRadius:TAMANHO_CIRCULO/2,
    justifyContent:'center',
    alignItems:'center'

  }
})