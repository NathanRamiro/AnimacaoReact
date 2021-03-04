import React, { useRef, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert, Platform, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Writer from './components/Writer'

const TAMANHO_CIRCULO = 100

const Circulo = ({ onPress, animatedValue }) => {

  const animatedBackgroung = animatedValue.interpolate({
    inputRange: [0, 0.0001, 0.5, 0.5001, 1],
    outputRange: ["#f2cdac", "#f2cdac", "#f2cdac", "#8c4227", "#8c4227"]
  })

  const animatedText = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [20, 35, 20]
  })

  const animatedColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#8c4227", "#fff", "#f2cdac"]
  })

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, styles.containerCirculo,
    { backgroundColor: animatedBackgroung }]}>
      <Text style={styles.titulo}>Animações em React</Text>

      <Writer />
      <Animated.Text
        style={{
          fontSize: animatedText,
          color: animatedColor,
          margin: 10
        }}
      >frase não importante</Animated.Text>

      <Animated.View style={[styles.circulo, {
        transform: [
          {
            rotateY: animatedValue.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ['0deg', '-90deg', '-180deg']
            })
          },
          {
            scale: animatedValue.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 5, 1]
            })
          },
          {
            translateX: animatedValue.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 50, 0]
            })
          }
        ]
      }]}>

        <TouchableOpacity onPress={onPress}>
          <View style={[styles.circulo]}>
            <AntDesign name='arrowright' size={28} color={"#8c4227"} />
          </View>
        </TouchableOpacity>

      </Animated.View>
    </Animated.View>
  )
}

export default function App() {
  const animatedValue = useRef(new Animated.Value(0)).current
  const [indice, setIndice] = useState(0)

  const animation = (toValue) => Animated.timing(animatedValue, {
    toValue: toValue,
    duration: 3000,
    useNativeDriver: false
  })

  const onPress = () => {
    setIndice(indice === 1 ? 0 : 1)
    animation(indice === 1 ? 0 : 1).start()
  }

  /*const onPress = () =>{
    let mensagem = "você clicou! "
    Platform.OS === 'web' ? alert(mensagem) : Alert.alert('aviso',
                                                          mensagem,
                                                          [
                                                            {
                                                             text: 'Cancelar',
                                                             onPress: () => console.log("precionou o cancelar"),
                                                             style:'cancel'
                                                            },
                                                            {
                                                              text:'Ok', 
                                                              onPress: ()=> console.log('pressionou OK')
                                                            }
                                                          ],
                                                            {
                                                              cancelable: false 
                                                            }
                                                          )
  }*/

  return (
    <View style={styles.container}>
      <Circulo onPress={onPress} animatedValue={animatedValue} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2cdac",
    alignItems: 'center'
  },
  titulo: {
    fontSize: 25,
    color: "#d99873",
    paddingTop: 20
  },
  containerCirculo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 100
  },
  circulo: {
    backgroundColor: "#d99873",
    width: TAMANHO_CIRCULO,
    height: TAMANHO_CIRCULO,
    borderRadius: TAMANHO_CIRCULO / 2,
    justifyContent: 'center',
    alignItems: 'center'

  }
})