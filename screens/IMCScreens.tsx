import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function IMCScreens() {
    const [peso, setpeso] = useState("")
    const [altura, setaltura] = useState("")

    function calculo() {
        let final = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
        Alert.alert("IMC", "Su IMC es: " + final)
        if (final <= 18.49) {
            Alert.alert("Peso Bajo");
        } else if (final > 18.49 && final <= 24.99) {
            Alert.alert("Peso Normal");
        } else if (final >= 25 && final <= 29.9) {
            Alert.alert("Sobrepeso");
        } else if (final >= 30 && final <= 34.99) {
            Alert.alert("Obesidad Leve");
        } else {
            Alert.alert("Obesidad Moderada o Mayor");
        }
    }
    return (
        <View>
            <Text>IMCS</Text>
            <View>
                <Text>Ingre su Altura</Text>
                <TextInput placeholder='Ingresar Altura'
                    onChangeText={(text) => setaltura(text)} />
                <Text>Ingrese su Peso en Kg</Text>
                <TextInput placeholder='Ingresar Peso'
                    onChangeText={(text) => setpeso(text)} />
                <Button title='Calcular' onPress={calculo}></Button>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({})