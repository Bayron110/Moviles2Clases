import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler'
import { Checkbox, RadioButton } from 'react-native-paper'

export default function EncuentaScreens() {

  const [visible, setvisible] = useState(false)
  const [respuesta, setRespuesta] = useState('');
  const [respuesta2, setrespuesta2] = useState(0)

  function respuestaV(){
    if(respuesta2 >= 1 && respuesta2 <= 10){
  Alert.alert("Aviso", "Enviando Encuesta");
}else{
  Alert.alert("Alerta", "La valoración debe estar entre 1 y 10");
}
  }


  return (
    <View>
      <Text>Encuenta</Text>
      <Text>Contacto</Text>
      <TextInput placeholder='Numero de Contacto' 
      keyboardType="numeric"/>
      <Text>¿Recomendarías el Producto?</Text>
      <RadioButton.Group onValueChange={(valor) => setRespuesta(valor)} value={respuesta}>
        <RadioButton.Item label="Sí" value="si" />
        <RadioButton.Item label="No" value="no" />
        <RadioButton.Item label="Quizás" value="quizas" />
      </RadioButton.Group>
      <Text>Valoracion del 1 al 10</Text>
      <TextInput placeholder='Ingrese el Numero que usted con el que usted nos califique' 
      onChangeText={(text)=>setrespuesta2(+text)}
      keyboardType="numeric"/>
      <Text>Permitir contacto para seguimiento.</Text>
      <Switch
        value={visible}
        onValueChange={() => setvisible(!visible)} 
      />
      <Button title='Enviar Datos' onPress={()=>respuestaV()}/>

    </View>
  )
}

const styles = StyleSheet.create({})