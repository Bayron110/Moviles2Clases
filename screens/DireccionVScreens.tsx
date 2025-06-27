import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler'

export default function DireccionVScreens() {
  const [calle, setcalle] = useState("")
  const [numero, setnumero] = useState(0)
  const [ciudad, setciudad] = useState("")
  const [visible, setvisible] = useState(false)

  function campos() {
  if (!calle || !numero || !ciudad) {
    Alert.alert("Alerta", "Todos los campos son obligatorios");
  } else {
    Alert.alert("Aviso", "Ingresando credenciales");
}
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Dirección</Text>
      <View>
        <Text style={styles.txt}>Ingrese su Calle </Text>
        <TextInput placeholder='ejemplo: Calle de los perros'
          onChangeText={(text) => setcalle(text)} />
        <Text style={styles.txt}>Numero Exterior </Text>
        <TextInput placeholder='Ingre su numero'
        onChangeText={(text) => setnumero(+text)} 
        keyboardType="numeric"/>
        <Text style={styles.txt}>Ingrese su Ciudad </Text>
        <TextInput placeholder='ejemplo Quito'
          onChangeText={(text) => setciudad(text)} />
        <Text style={styles.txt}>Referencias </Text>
        <TextInput placeholder='ejemplo av.Moran Valverde' 
        keyboardType="numeric"/>
        <Text style={styles.txt}>La Dirección es Fisical</Text>
        <Switch
          value={visible}
          onValueChange={() => setvisible(!visible)} 
        />
        <Button title='Verificar' onPress={()=> campos()}/>

      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    color: "#070e09"
  },
})